import { prisma } from "../../data/postgres";
import { CreateTodoDto, ToDoDataSource, ToDoEntity, UpdateTodoDto } from "../../domain";
import { CustomError } from "../../domain";

export class TodoDataSourceImpl implements ToDoDataSource {
    
    async create( createTodoDto: CreateTodoDto ): Promise<ToDoEntity> {
        const newTodo = await prisma.toDo.create({
            data : { text : createTodoDto?.text! }
        });

        return ToDoEntity.fromObject( newTodo );
    }

    async getAll(): Promise<ToDoEntity[]> {
        const todos = await prisma.toDo.findMany({
            orderBy : { id : "asc" }
        });

        return todos.map( todo => ToDoEntity.fromObject(todo) );
    }

    async findById( id: number ): Promise<ToDoEntity> {        
        const todo = await prisma.toDo.findFirst({
            where : { id },
            /* select : {
                id : true,
                text : true,
                completedAt : true
            } */
        });
        if ( !todo ) throw new CustomError(`Todo with id ${id} not found`, 404);
        
        return ToDoEntity.fromObject( todo! );
        
    }

    async update( updateTodoDto: UpdateTodoDto ): Promise<ToDoEntity> {
        await this.findById( updateTodoDto.id );

        const updatedTodo = await prisma.toDo.update({
            where : { id: updateTodoDto.id },
            data : updateTodoDto!.values
        });

        return ToDoEntity.fromObject( updatedTodo );
    }

    async delete( id: number ): Promise<ToDoEntity> {
        await this.findById( id );

        const deletedTodo = await prisma.toDo.delete({
            where : { id }
        });

        return ToDoEntity.fromObject( deletedTodo );
    }

}