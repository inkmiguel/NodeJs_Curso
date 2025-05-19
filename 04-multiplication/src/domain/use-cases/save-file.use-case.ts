import fs from 'fs';

export interface SaveFileUseCase {
    execute: (options: Options) => boolean;
}

export interface Options {
    fileContent: string;
    destintation?: string;
    fileName?: string;
}

export class SaveFile implements SaveFileUseCase {
    constructor(
        // Repositories: StoreageRepository
    ) { }

    execute({
        fileContent,
        destintation = 'output',
        fileName = 'table'
    }: Options): boolean {
        try {
            fs.mkdirSync(destintation, { recursive: true });
            fs.writeFileSync(`${destintation}/${fileName}.txt`, fileContent);
            console.log(`La tabla fue creada en ${destintation}/${fileName}.txt`);
            return true;
        }
        catch (error) {
            console.error('Error al crear la tabla:', error);
            return false;
        }
    }
}export interface SaveFileUseCase {
    execute: (options: Options) => boolean;
}