import { useEffect, useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native';
import { getPokemonDetailsApi } from '../api/pokemon';
import PokemonHeader from '../components/Pokemon/PokemonHeader';
import PokemonType from '../components/Pokemon/PokemonType';
import PokemonStats from '../components/Pokemon/PokemonStats';

export default function PokemonScreen({ navigation, route: { params } }) {

    //console.log(props);
    //console.log(params);

    const [pokemon, setPokemon] = useState(null);

    //Cambiamos un icono para agregar a favoritos
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => null,
            headerLeft: () => <MaterialCommunityIcons name='arrow-left' color="#fff"
                size={20} style={{ marginLeft: 20 }}
                onPress={navigation.goBack}
            />
        })
    }, [navigation, params])


    //Se ejecuta cada vez que llega un parametro diferente (params cambia su valor)
    useEffect(() => {
        (async () => {
            try {
                const response = await getPokemonDetailsApi(params.id);
                //console.log(response);
                setPokemon(response);
            } catch (error) {
                //En dado caso de error se regresa a la lista general
                navigation.goBack();
            }
        })()
    }, [params]);

    //Renderiza null cuando no tenga la respuesta
    if (!pokemon) return null;

    return (
        <ScrollView>
            {/* <Text> {pokemon.name} </Text> */}
            <PokemonHeader name={pokemon.name} order={pokemon.order}
                image={pokemon.sprites.other["official-artwork"].front_default}
                type={pokemon.types[0].type.name}
            />
            <PokemonType types={pokemon.types} />
            <PokemonStats stats={pokemon.stats} />
        </ScrollView>
    )
}