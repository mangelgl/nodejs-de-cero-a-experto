import { getUUID } from '../../src/plugins/get-id-plugin'

describe('plugins/get-id-plugin', () => {

    test('getUUID() should return an UUID', () => {

        const id = getUUID();

        expect(typeof id).toBe('string');
        expect(id.length).toBe(36);
    });
});