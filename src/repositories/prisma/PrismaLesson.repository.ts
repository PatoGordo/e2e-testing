import { prismaClient } from "../../prisma";
import { CreateLessonData, LessonRepository } from "../Lesson.repository";

export class PrismaLessonRepository implements LessonRepository {
  public async create(data: CreateLessonData): Promise<void> {
    await prismaClient.lesson.create({
      data: {
        title: data.title,
        description: data.description || undefined,
      },
    });
  }
}
