import request from "supertest";
import { app } from "../../app";
import { prismaClient } from "../../prisma";

test("[E2E] Create lesson", async () => {
  const response = await request(app).post("/lesson").send({
    title: "TEST E2E Lesson",
  });

  const lessonExists = await prismaClient.lesson.findFirst({
    where: {
      title: "TEST E2E Lesson",
    },
  });

  expect(response.statusCode).toBe(201);
  expect(response.body.ok).toEqual(true);
  expect(lessonExists).toBeTruthy();
});
