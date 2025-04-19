import {getUUID} from '../../src/plugins/get-id.plugin';

describe('plugin/get-id.plugin.ts', () => {

    test('getUUID should return a valid UUID', () => {
        const uuid = getUUID();

        console.log(uuid); // Log the UUID for debugging
                expect(typeof uuid).toBe('string');
        expect(uuid.length).toBe(36);
    });
});
