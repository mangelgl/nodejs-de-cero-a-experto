import { UpdateTodoDto } from "../../dto";
import { ToDoEntity } from "../../entities/todo.entity";
import { ToDoRepository } from "../../repositories/todo.repository";

export interface UpdateTodoUseCase {
    execute( dto: UpdateTodoDto ): Promise<ToDoEntity>
}

export class UpdateTodo implements UpdateTodoUseCase {

    constructor(
        private readonly repository: ToDoRepository
    ) {}
    
    execute( dto: UpdateTodoDto ): Promise<ToDoEntity> {
        return this.repository.update( dto );
    }

}