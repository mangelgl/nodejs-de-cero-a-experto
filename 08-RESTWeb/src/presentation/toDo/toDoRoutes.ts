import { Router } from "express";
import { ToDoController } from "../toDo/toDoController";
import { TodoDataSourceImpl } from "../../infrastructure/datasource/todo.datasource.impl";
import { TodoRepositoryImpl } from "../../infrastructure/repositories/todo.repository.impl";

export class ToDoRoutes {

    static get routes(): Router {

        const router = Router();
        const datasource = new TodoDataSourceImpl();
        const repository = new TodoRepositoryImpl( datasource );
        const toDoController = new ToDoController( repository );

        router.get('/', toDoController.getTodos );
        router.get('/:id', toDoController.getTodoById );
        router.post('/', toDoController.createTodo );
        router.put('/:id', toDoController.updateTodo );
        router.delete('/:id', toDoController.deleteTodo );

        return router;
    }
}