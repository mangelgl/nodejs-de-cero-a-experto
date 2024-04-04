import { ToDoEntity } from "../../entities/todo.entity";
import { ToDoRepository } from "../../repositories/todo.repository";

export interface GetTodosUseCase {
    execute(): Promise<ToDoEntity[]>
}

export class GetTodos implements GetTodosUseCase {

    constructor(
        private readonly repository: ToDoRepository
    ) {}
    
    execute(): Promise<ToDoEntity[]> {
        return this.repository.getAll();
    }

}