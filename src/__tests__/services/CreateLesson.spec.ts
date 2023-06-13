import { CreateLessonService } from "../../services/CreateLesson.service";
import { InMemoryLessonRepository } from "../../repositories/in-memory/InMemoryLesson.repository";

describe("Create Lesson", () => {
  it("Should be able to create Create Lesson", async () => {
    const repository = new InMemoryLessonRepository();

    const createLesson = new CreateLessonService(repository);

    const res = createLesson.execute({
      title: "Testee",
      description: "test",
    });

    expect(res).resolves.not.toThrow();

    expect(repository.items).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          title: "Testee",
        }),
      ])
    );
  });

  it("Should not be able to create Create Lesson because title is invalid", async () => {
    const repository = new InMemoryLessonRepository();

    const createLesson = new CreateLessonService(repository);

    const res = createLesson.execute({
      title: "",
    });

    expect(res).rejects.toThrow();

    expect(repository.items).toEqual([]);
  });
});
