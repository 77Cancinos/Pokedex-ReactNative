import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import capitalize from 'lodash.capitalize';
import getColorByPokemonType from '../../utils/getColorByPokemonType';

export default function PokemonHeader({ name, order, image, type }) {

    //console.log(name);
    const color = getColorByPokemonType(type);
    //console.log(color);

    const bgStyles = [{ backgroundColor: color, ...styles.bg }]

    return (
        <>
            {/* // <View> */}
            <View style={bgStyles} />
            {/* <Text> {name} </Text> */}
            <SafeAreaView style={styles.content}>

                <View styles={styles.headerName}>
                    <Text style={styles.name}>{capitalize(name)}</Text>
                    <Text style={styles.order}>#{`${order}`.padStart(3, 0)}</Text>
                </View>

                <View style={styles.contentImg} >
                    <Image source={{ uri: image }} style={styles.img} />
                </View>
            </SafeAreaView>
            {/* // </View> */}
        </>
    )
}

const styles = StyleSheet.create({
    bg: {
        width: '100%',
        height: 400,
        position: 'absolute',
        borderBottomEndRadius: 300,
        borderBottomLeftRadius: 300,
        transform: [{ scaleX: 2 }],
    },
    content: {
        marginHorizontal: 20,
        marginTop: 30,
    },
    headerName: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 40,
    },
    name: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 27,
    },
    order: {
        color: 'white',
        fontWeight: 'bold',
    },
    contentImg: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        top: 30,
    },
    img: {
        width: 250,
        height: 300,
        resizeMode: 'contain',
    }
});