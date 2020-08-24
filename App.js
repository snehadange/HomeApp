import React from 'react';
import { View, StatusBar, Text, TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons, MaterialCommunityIcons ,Ionicons} from 'react-native-vector-icons'

import BedRoom from './src/Screens/SubScreens/BedRoom'
import LivingRoom from './src/Screens/SubScreens/LivingRoom'
import Kitchen from './src/Screens/SubScreens/Kitchen'

import Home from './src/Screens/Home';
import AllRoom from './src/Screens/AllRoom';


const Stack = createStackNavigator()
const Tab = createMaterialTopTabNavigator()




function StackScreen() {

  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AllRoom" component={MyTab} />


    </Stack.Navigator>

  );
}

function MyTab(props) {
  return (
    <View style={{ flex: 1,backgroundColor:'#005682'}}>
     <View style={{marginTop:30}}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
          <MaterialIcons name="arrow-back" size={30} />
        </TouchableOpacity>
      </View>
     
      <Tab.Navigator tabBarOptions={{
        labelStyle: { fontSize: 12},
        tabStyle: { width: 120},
        style: { backgroundColor: '#005682' },
        activeTintColor: 'white',
       
        showLabel: true,
        showIcon:true
      }}>
        <Tab.Screen name="BedRoom" component={BedRoom} options={{
          tabBarIcon: () => (
            <Ionicons name="ios-bed" size={30} color="white"  />
          )
        }} />
        <Tab.Screen name="LivingRoom" component={LivingRoom} options={{
          tabBarIcon: () => (
            <Ionicons name="ios-bed" size={30} color="white"  />
         
          )
        }} />
        <Tab.Screen name="Kitchen" component={Kitchen} options={{
          tabBarIcon: () => (
            <Ionicons name="ios-bed" size={30} color="white"  />
         
          )
        }} />
      </Tab.Navigator>
    
    </View>

  )
}



export default function App() {
  return (
    <NavigationContainer>
      <StackScreen />
    </NavigationContainer>
  );
}



