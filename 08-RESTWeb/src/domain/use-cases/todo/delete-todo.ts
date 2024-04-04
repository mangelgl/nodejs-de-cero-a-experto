import { ToDoEntity } from "../../entities/todo.entity";
import { ToDoRepository } from "../../repositories/todo.repository";

export interface DeleteTodoUseCase {
    execute( id: number ): Promise<ToDoEntity>
}

export class DeleteTodo implements DeleteTodoUseCase {

    constructor(
        private readonly repository: ToDoRepository
    ) {}
    
    execute( id: number ): Promise<ToDoEntity> {
        return this.repository.delete( id );
    }

}