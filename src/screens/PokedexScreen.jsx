import { SafeAreaView } from 'react-native';
import { useEffect, useState } from 'react';
import { getPokemonsApi, getPokemonDetailsByUrlApi } from '../api/pokemon';
import PokemonList from '../components/PokemonList';

export default function PokedexScreen() {

    const [pokemons, setPokemons] = useState([]);
    // console.log(pokemons);
    const [nextUrl, setNextUrl] = useState(null);

    useEffect(() => {
        //console.log('hola mundo');
        (async () => {
            await loadPokemons();
        })();
    }, []);

    const loadPokemons =  async() => {
        try {
            const response = await getPokemonsApi(nextUrl);
            //console.log(response);
            setNextUrl(response.next);

            const pokemonArray = [];

            for await (const poke of response.results) {
                // console.log(poke);
                const pokemonDetail = await getPokemonDetailsByUrlApi(poke.url);
                //console.log(pokemonDetail);

                pokemonArray.push({
                    id: pokemonDetail.id,
                    name: pokemonDetail.name,
                    // type: pokemonDetail.types[0].name,
                    type: pokemonDetail.types[0].type.name,
                    order: pokemonDetail.order,
                    image: pokemonDetail.sprites.other['official-artwork'].front_default
                });

            }

            // setPokemons(pokemonArray);
            setPokemons([...pokemons, ...pokemonArray]);
            //SETEAR UN ARRAY EN CONJUNTO

        } catch (error) {
            console.error(error);
        } 
    };

    return (
        <SafeAreaView>
            <PokemonList pokemonsList={pokemons} 
                         loadPokemons={loadPokemons} 
                         isNext={nextUrl}
            />
        </SafeAreaView>
    );
}