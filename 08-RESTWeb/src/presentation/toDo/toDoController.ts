import { Request, Response } from "express";
import { prisma } from "../../data/postgres";
import { CreateTodoDto } from "../../domain/dto";

const todos = [
    { id: 1, text : 'Buy milk', createdAt : new Date() },
    { id: 2, text : 'Buy coffee', createdAt : null },
    { id: 3, text : 'Buy cookies', createdAt : new Date() }
];

console.log(todos);

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
        const { text } = req.body;
        if ( !text ) return res.status(400).json({ error: 'Text property is required' });
        
        /*
        const newTodo = {
            id: todos.length + 1,
            text,
            createdAt : new Date()
        };
        todos.push( newTodo ); 
        */

        const newTodo = await prisma.toDo.create({
            data : { message : text }
        });

        res.json( newTodo );

        return;
    }

    public updateTodo = async ( req: Request, res: Response ) => {
        const id = +req.params.id; // operador '+' convierte el valor a número
        if ( isNaN( id )) return res.status(400).json({ error: `Id is not a number` });

        // const todo = todos.find( todo => todo.id === id );
        const todo = await prisma.toDo.findFirst({
            where : { id }
        });
        if ( !todo ) return res.status(404).json({ error: `ToDo with id ${id} not found` });

        let { text, createdAt } = req.body;
        
        /* todo.message = text || todo.message;
        ( createdAt === 'null' )
            ? todo.createdAt = null
            : todo.createdAt = new Date( createdAt || todo.createdAt ); */        
        ( createdAt === 'null' )
            ? createdAt = null
            : createdAt = new Date( createdAt || todo.createdAt );

        const updatedTodo = await prisma.toDo.update({
            where : { id },
            data : {
                message: text || todo.message,
                createdAt
            }
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