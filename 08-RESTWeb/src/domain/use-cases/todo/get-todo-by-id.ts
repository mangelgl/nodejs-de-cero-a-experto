import { ToDoEntity } from "../../entities/todo.entity";
import { ToDoRepository } from "../../repositories/todo.repository";

export interface GetTodoByIdUseCase {
    execute( id: number ): Promise<ToDoEntity>
}

export class GetTodoById implements GetTodoByIdUseCase {

    constructor(
        private readonly repository: ToDoRepository
    ) {}
    
    execute( id: number ): Promise<ToDoEntity> {
        return this.repository.findById( id );
    }

}