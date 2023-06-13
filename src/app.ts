import express, { Router } from "express";
import cors from "cors";
import { PrismaLessonRepository } from "./repositories/prisma/PrismaLesson.repository";
import { CreateLessonService } from "./services/CreateLesson.service";

export const app = express();

app.use(express.json());

app.use(cors());

const router = Router();

router.post("/lesson", async (req, res) => {
  const { title, description } = req.body;

  const repository = new PrismaLessonRepository();
  const service = new CreateLessonService(repository);

  try {
    await service.execute({ title, description });

    return res.status(201).json({
      ok: true,
    });
  } catch (error) {
    console.log(error);

    return res.status(400).json({
      error: (error as Error).message,
      ok: false,
    });
  }
});

app.use("/api/", router);
