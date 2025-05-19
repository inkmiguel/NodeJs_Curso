export interface CreateTableUseCase {
    execute: (options: CreateTableOptions) => string;
}

export interface CreateTableOptions {
    base: number;
    limit?: number;
    showTable?: boolean;
}
export class CreateTable implements CreateTableUseCase{
    constructor(

    ) { }

    execute({ base, limit = 10 }: CreateTableOptions) {
        let outputMessage = '';
        for (let i = 1; i <= limit; i++) {
            const result = base * i;
            outputMessage += `${base} x ${i} = ${result}\n`;
        }
        return outputMessage;
    }
} 