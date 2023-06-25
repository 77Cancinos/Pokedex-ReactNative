import React from 'react';

import { Image } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Account from '../screens/AccountScreen';
// import Pokedex from '../screens/PokedexScreen';
// import Favorite from '../screens/FavoriteScreen';
import FavoritesNavigation from './FavoritesNavigation';
import PokedexNavigation from './PokedexNavigation';
import AccountNavigation from './AccountNavigation';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>

      <Tab.Screen name='Favorite' component={FavoritesNavigation} options={{
        tabBarLabel: 'Mis Favoritos',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name='heart' color={color} size={size} />
        ),
      }} />

      <Tab.Screen name='Pokedex' component={PokedexNavigation} options={{
        tabBarLabel: "",
        tabBarIcon: () => renderPokeball(),
      }} />

      <Tab.Screen name='Account' component={AccountNavigation} options={{
        tabBarLabel: "Mi Cuenta",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name='account' color={color} size={size} />
        ),
      }}
      />

    </Tab.Navigator>
  )
}


const renderPokeball = () => {
  return (
    <Image
      source={require('../assets/pokeball.png')}
      style={{ width: 45, height: 45, }}
    />
  )
}