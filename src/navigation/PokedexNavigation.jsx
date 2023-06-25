import { createStackNavigator } from '@react-navigation/stack';
import Pokedex from '../screens/PokedexScreen';
import PokedexScreen from '../screens/PokedexScreen';
import PokemonScreen from '../screens/PokemonScreen';

const Stack = createStackNavigator();

export default function PokedexNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='pokedex' component={PokedexScreen} options={{ title: "", headerTransparent: true }} />
            <Stack.Screen name='pokemon' component={PokemonScreen}
                options={{ title: "", headerShown: true, headerTransparent: true, headerShadowVisible: false }}
            />
        </Stack.Navigator>
    )
}