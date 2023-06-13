import { Lesson } from "../../entities/Lesson";
import { prismaClient } from "../../prisma";
import { LessonRepository, CreateLessonData } from "../Lesson.repository";

export class InMemoryLessonRepository implements LessonRepository {
  public items: Lesson[] = [];

  public async create(data: CreateLessonData): Promise<void> {
    this.items.push(data);
  }
}
