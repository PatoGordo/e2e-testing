export class Lesson {
  id?: string;
  title: string;
  description?: string;

  constructor({ id, title, description }: Lesson) {
    this.id = id;
    this.title = title;
    this.description = description || undefined;
  }
}
