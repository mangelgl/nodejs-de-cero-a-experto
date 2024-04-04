import { CreateTodoDto } from "../../dto";
import { ToDoEntity } from "../../entities/todo.entity";
import { ToDoRepository } from "../../repositories/todo.repository";

export interface CreateTodoUseCase {
    execute( dto: CreateTodoDto ): Promise<ToDoEntity>
}

export class CreateTodo implements CreateTodoUseCase {

    constructor(
        private readonly repository: ToDoRepository
    ) {}
    
    execute( dto: CreateTodoDto ): Promise<ToDoEntity> {
        return this.repository.create( dto );
    }

}