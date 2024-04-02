import { create } from "domain";
import { Request, Response } from "express";
import fs from 'fs';

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

    public getTodos = ( req: Request, res: Response ) => {        
        res.json( todos );
        return;
    }

    public getTodoById = ( req: Request, res: Response ) => {
        const id = +req.params.id; // operador '+' convierte el valor a número
        if ( isNaN( id )) return res.status(400).json({ error: `Id is not a number` });

        const todo = todos.find( todo => todo.id === id );
        
        (todo)
            ? res.json( todo )
            : res.status(404).json({ error: `ToDo with id ${id} not found` });
        
        return;
    }

    public createTodo = ( req: Request, res: Response ) => {
        const { text } = req.body;        
        if ( !text ) return res.status(400).json({ error: 'Text property is required' });

        const newTodo = {
            id: todos.length + 1,
            text,
            createdAt : new Date()
        };

        todos.push( newTodo );

        res.json( newTodo );

        return;
    }

    public updateTodo = ( req: Request, res: Response ) => {
        const id = +req.params.id; // operador '+' convierte el valor a número
        if ( isNaN( id )) return res.status(400).json({ error: `Id is not a number` });

        const todo = todos.find( todo => todo.id === id );        
        if ( !todo ) return res.status(404).json({ error: `ToDo with id ${id} not found` });

        const { text, createdAt } = req.body;

        todo.text = text || todo.text;
        ( createdAt === 'null' )
            ? todo.createdAt = null
            : todo.createdAt = new Date( createdAt || todo.createdAt );

        res.json( todo );
        return;
    }

    public deleteTodo = ( req: Request, res: Response ) => {
        const id = +req.params.id; // operador '+' convierte el valor a número
        if ( isNaN( id )) return res.status(400).json({ error: `Id is not a number` });

        const todo = todos.find( todo => todo.id === id );
        const todoIndex = todos.findIndex( todo => todo.id === id );
        if ( !todo ) return res.status(404).json({ error: `ToDo with id ${id} not found` });

        todos.splice(todoIndex, 1);
        res.json(todo);
        return;
    }
}