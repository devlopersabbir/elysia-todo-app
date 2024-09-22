export class Todo {
  id: number;
  title: string;
  description: string;
  isComplete: boolean;

  constructor(
    id: number,
    title: string,
    description: string,
    isComplete: boolean = false
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.isComplete = isComplete;
  }
}
