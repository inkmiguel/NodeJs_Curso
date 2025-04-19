import { buildLogger,logger as winstonLogger } from "../../src/plugins/logger.plugin";

describe('plugin/logger.plugin.ts', () => {
    test('buildLogger should return a function logger',()=>{
        const logger = buildLogger('test-service');
        expect(typeof logger.log).toBe('function');
        expect(typeof logger.error).toBe('function');
    });
    test('logger.log should log a message',()=>{
        const winstonLoggerMoock = jest.spyOn(winstonLogger, 'log');

        const message = 'test message';
        const service = 'test-service';
        const logger = buildLogger(service);
        
        logger.log(message);
        
        expect(winstonLoggerMoock).toHaveBeenCalledWith('info',
            expect.objectContaining({
                message, 
                service 
            }));
    });

});