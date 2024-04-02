import { Router } from "express";
import { ToDoController } from "../toDo/toDoController";

export class ToDoRoutes {

    static get routes(): Router {

        const router = Router();
        const toDoController = new ToDoController();        

        router.get('/', toDoController.getTodos );
        router.get('/:id', toDoController.getTodoById );
        router.post('/', toDoController.createTodo );
        router.put('/:id', toDoController.updateTodo );
        router.delete('/:id', toDoController.deleteTodo );

        return router;
    }
}