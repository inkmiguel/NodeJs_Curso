import {httpClientPlugin as http} from '../plugins/http-client'

export const getPokemonById = async (id: string|number):Promise<string> => {

    try{
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const pokemon = await http.get(url);
        return pokemon.name;
    } catch (error) {
        throw new Error('Pokemon no existe');
    }


    // throw new Error('Pokemon no existe');

    // return fetch(url)
    //     .then((resp) => resp.json())
    //     // .then(()=> {throw new Error('Pokemon no existe')})
    //     .then((pokemon)=> pokemon.name);
}
