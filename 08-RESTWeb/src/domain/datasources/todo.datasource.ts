import { CreateTodoDto, UpdateTodoDto } from "../dto";
import { ToDoEntity } from "../entities/todo.entity";

export abstract class ToDoDataSource {

    abstract create( createTodoDto: CreateTodoDto ): Promise<ToDoEntity>;
    // todo: paginación
    abstract getAll(): Promise<ToDoEntity[]>;
    abstract findById( id: number ): Promise<ToDoEntity>;
    abstract update( updateTodoDto: UpdateTodoDto ): Promise<ToDoEntity>;
    abstract delete( id: number ): Promise<ToDoEntity>;
}