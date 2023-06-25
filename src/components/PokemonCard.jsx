import { View, Text, StyleSheet, Image, TouchableWithoutFeedback, Pressable } from 'react-native';
import getColorByPokemonType from '../utils/getColorByPokemonType';
import capitalize from 'lodash.capitalize';
import { useNavigation } from '@react-navigation/native';

export default function PokemonCard({ pokemon }) {

    const navigation = useNavigation();

    // console.log(pokemon);

    // console.log(pokemon.type);
    const pokemonColor = getColorByPokemonType(pokemon.type);
    // console.log(pokemonColor);
    const bgStyles = { backgroundColor: pokemonColor, ...styles.bgStyles }



    const goToPokemon = () => {
        // console.log(`Vamos al pokemon: ${pokemon.name}`);
        // console.log(`${pokemon.id}`);
        navigation.navigate('pokemon', { id: pokemon.id });
        //Como parametros del navigate no se puede mandar funciones
    }

    return (
        // <View>
        //     <Text>PokemonCard INFO</Text>
        // </View>

        <TouchableWithoutFeedback onPress={goToPokemon}>

            {/* <View style={styles.container}>
            <Pressable onPress={goToPokemon}> */}

            <View style={styles.card}>

                <View style={styles.spacing}>

                    <View style={bgStyles}>
                        {/* <Text> Hola Mundo </Text> */}
                        <Text style={styles.number} >#{`${pokemon.order}`.padStart(3, 0)}</Text>
                        <Text style={styles.name}> {capitalize(pokemon.name)} </Text>
                        <Image source={{ uri: pokemon.image }} style={styles.image} />
                    </View>

                </View>

            </View>

            {/* </Pressable>
        </View> */}

        </TouchableWithoutFeedback>


    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        flex: 1,
        height: 130,
    },
    spacing: {
        flex: 1,
        padding: 5,
    },
    // bgStyles: {
    //     backgroundColor: "grey",
    // },
    bgStyles: {
        flex: 1,
        borderRadius: 15,
        padding: 10,
    },
    number: {
        position: 'absolute',
        right: 10,
        top: 10,
        color: '#fff',
        fontSize: 11,
    },
    name: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
        paddingTop: 10,
    },
    image: {
        position: 'absolute',
        bottom: 2,
        right: 2,
        width: 90,
        height: 90,
    }
});