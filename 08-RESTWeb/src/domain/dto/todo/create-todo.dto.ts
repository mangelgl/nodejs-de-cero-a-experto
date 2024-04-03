
export class CreateTodoDto {

    private constructor(
        public readonly text: string
    ) {}

    // props: properties
    static createTodo ( props : {[key:string]: any} ) : [string?, CreateTodoDto?] {
        const { text } = props;
        if ( !text ) return ['Text property is required!'];

        return [, new CreateTodoDto( text )];
    }
}