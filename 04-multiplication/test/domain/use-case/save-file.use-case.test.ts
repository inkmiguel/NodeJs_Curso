import fs from 'fs';
import { SaveFile } from '../../../src/domain/use-cases/save-file.use-case';

describe('SaveFileUseCase', () => {

    afterEach(() => {
        fs.rmSync('output', { recursive: true, force: true });
    });

    test('Should save a file with the given content', () => {

        const saveFile = new SaveFile();
        const filePath = 'output/table.txt';
        const options = {
            fileContent: 'test content'
        };
        const result = saveFile.execute(options);

        
        const checkFile = fs.existsSync(filePath);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        
        expect (result).toBeTruthy();
        expect(checkFile).toBe(true);
        expect(fileContent).toBe(options.fileContent);
    });
});
