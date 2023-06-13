import { LessonRepository } from "../repositories/Lesson.repository";

export interface CreateLessonDTO {
  title: string;
  description?: string;
}

export class CreateLessonService {
  constructor(private repository: LessonRepository) {}

  async execute(data: CreateLessonDTO) {
    if (!data.title) {
      throw new Error("Title is required!");
    }

    await this.repository.create(data);
  }
}
