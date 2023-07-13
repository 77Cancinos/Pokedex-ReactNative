import { FlatList, StyleSheet, ActivityIndicator, Platform } from 'react-native';
import PokemonCard from './PokemonCard';

export default function PokemonList({ pokemonsList, loadPokemons, isNext }) {

    //console.log(pokemonsList);
    //showsVerticalScrollIndicator   -  hace que no aparezca una barra de scroll

    const loadMore = () => {
        //  console.log('cargando mas pokemons');
         loadPokemons();
    }

    return (
        <FlatList
            data={pokemonsList}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(poke) => String(poke.id)}
            // renderItem={({ item }) => <Text> {item.name} </Text>}
            renderItem={({ item }) => <PokemonCard pokemon={item} />}
            contentContainerStyle={styles.flatListContentContainer}

            onEndReached={isNext && loadMore}
            onEndReachedThreshold={0.1}
            ListFooterComponent={
                isNext && (
                    <ActivityIndicator
                        size='large'
                        style={styles.spinner}
                        color='#AEAEAE'
                    />
                )
            }
        />
    )
}

const styles = StyleSheet.create({
    flatListContentContainer: {
        paddingHorizontal: 5,
        marginTop: Platform.OS === 'android' ? 30 : 0,
    },
    spinner: {
        marginTop: 20,
        marginBottom: Platform.OS === 'android' ? 90 : 60,
    },
});