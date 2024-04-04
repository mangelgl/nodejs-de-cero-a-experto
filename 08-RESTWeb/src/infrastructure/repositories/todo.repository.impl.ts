import { CreateTodoDto, ToDoDataSource, ToDoEntity, ToDoRepository, UpdateTodoDto } from "../../domain";

export class TodoRepositoryImpl implements ToDoRepository {

    constructor(
        private readonly datasource: ToDoDataSource
    ) {}

    create( createTodoDto: CreateTodoDto ): Promise<ToDoEntity> {
        return this.datasource.create( createTodoDto );
    }

    getAll(): Promise<ToDoEntity[]> {
        return this.datasource.getAll();
    }

    findById( id: number ): Promise<ToDoEntity> {
        return this.datasource.findById( id );
    }

    update( updateTodoDto: UpdateTodoDto ): Promise<ToDoEntity> {
        return this.datasource.update( updateTodoDto );
    }

    delete( id: number ): Promise<ToDoEntity> {
        return this.datasource.delete( id );
    }

}