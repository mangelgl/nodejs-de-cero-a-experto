
export class CustomError extends Error {

    constructor(
        public readonly message: string,
        public statusCode: number = 400,
    ) {
        super(message);
    }
}