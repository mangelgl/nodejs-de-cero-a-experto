import { Request, Response } from "express";
import { prisma } from "../../data/postgres";
import { CreateTodoDto, UpdateTodoDto } from "../../domain/dto";

export class ToDoController {

    // * DI
    constructor () {

    }

    public getTodos = async ( req: Request, res: Response ) => {
        const todos = await prisma.toDo.findMany({
            orderBy : { id : "asc" }
        });
        
        res.json( todos );
        return;
    }

    public getTodoById = async ( req: Request, res: Response ) => {
        const id = +req.params.id; // operador '+' convierte el valor a número
        if ( isNaN( id )) return res.status(400).json({ error: `Id is not a number` });

        // const todo = todos.find( todo => todo.id === id );
        const todo = await prisma.toDo.findFirst({
            where : { id }
        });
        
        (todo)
            ? res.json( todo )
            : res.status(404).json({ error: `ToDo with id ${id} not found` });
        
        return;
    }

    public createTodo = async ( req: Request, res: Response ) => {        
        const [ error, createTodoDto ] = CreateTodoDto.createTodo(req.body);
        if ( error ) res.status(400).json({ error });

        const newTodo = await prisma.toDo.create({
            data : { text : createTodoDto?.text! }
        });

        res.json( newTodo );

        return;
    }

    public updateTodo = async ( req: Request, res: Response ) => {
        const id = +req.params.id; // operador '+' convierte el valor a número
        const [ error, updateTodoDto ] = UpdateTodoDto.updateTodo({...req.body, id});
        if ( error ) res.status(400).json({ error });

        const updatedTodo = await prisma.toDo.update({
            where : { id },
            data : updateTodoDto!.values
        });        

        res.json( updatedTodo );
        return;
    }

    public deleteTodo = async ( req: Request, res: Response ) => {
        const id = +req.params.id; // operador '+' convierte el valor a número
        if ( isNaN( id )) return res.status(400).json({ error: `Id is not a number` });

        // const todo = todos.find( todo => todo.id === id );
        const todo = await prisma.toDo.findFirst({
            where : { id }
        });
        // const todoIndex = todos.findIndex( todo => todo.id === id );
        if ( !todo ) return res.status(404).json({ error: `ToDo with id ${id} not found` });

        // todos.splice(todoIndex, 1);
        const deletedTodo = await prisma.toDo.delete({
            where : { id }
        });
        res.json( deletedTodo );
        return;
    }
}