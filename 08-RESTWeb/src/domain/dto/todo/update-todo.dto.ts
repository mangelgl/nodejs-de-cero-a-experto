
export class UpdateTodoDto {

    private constructor(
        public readonly id: number,
        public readonly text?: string,
        public readonly completedAt?: Date,
    ) {}

    get values() {
        const obj: {[key: string] : any} = {};

        if ( this.text ) obj.text = this.text;
        if ( this.completedAt ) obj.completedAt = this.completedAt;

        return obj;
    }

    // props: properties
    static updateTodo ( props : {[key:string]: any} ) : [string?, UpdateTodoDto?] {
        const { id, text, completedAt } = props;
        let newCompletedAt = completedAt;

        if ( !id || isNaN(Number(id)) ) return ['Id must be a valid number!'];

        if ( completedAt ) {
            newCompletedAt = new Date( completedAt );
            if ( newCompletedAt.toString() === 'Invalid Date' ) return ['completedAt property must be a valid date!'];
        }

        return [, new UpdateTodoDto( id, text, newCompletedAt )];
    }
}