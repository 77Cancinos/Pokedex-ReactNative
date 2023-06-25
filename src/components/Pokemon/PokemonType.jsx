import { View, Text, StyleSheet } from 'react-native';
import { map, capitalize } from 'lodash';
import getColorByPokemonType from '../../utils/getColorByPokemonType';

export default function PokemonType({ types }) {
    //console.log(types);

    return (
        <View style={styles.content}>
            {map(types, (item) => (
                <View key={item.type.url} style={{ ...styles.pill, backgroundColor: getColorByPokemonType(item.type.name) }}>
                    <Text> {capitalize(item.type.name)}</Text>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    pill: {
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 20,
        marginHorizontal: 10,
        // backgroundColor: "#f0f",

    }
});