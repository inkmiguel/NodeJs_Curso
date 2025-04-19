import {getPokemonById} from '../../src/js-foundation/06-promises';

describe('js-foundation - 06-promises', () => {

    test('getPokemonById  should return a pokemon', async () => {
        const pokemonId = 1;
        const pokemonName = await getPokemonById(pokemonId);
        expect(pokemonName).toBe('bulbasaur');
    });

    test('getPokemonById should throw an error for non-existent pokemon', async () => {
        const pokemonId = 9999;
        try{
            const pokemonName = await getPokemonById(pokemonId);
            expect(true).toBe(false); // This line should not be reached
        }
        catch (error) {
            expect((error as Error).message).toBe('Pokemon no existe');
        }
    });
});