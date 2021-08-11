import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Stopwatch from './Components/Stopwatch';
import Timer from './Components/Timer';
import Alarm from './Components/Alarm'
import {Ionicons} from '@expo/vector-icons'
import Clocks from './Components/Clocks';
import { Button, Text, View } from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuProvider,
} from 'react-native-popup-menu';
const Tab=createBottomTabNavigator()
export default class App extends React.Component {
  render() {
    return (
      <View style={{backgroundColor:'grey',flex:1}}>
        <MenuProvider>
        <View>
        
    <Menu>
      
      <MenuTrigger   >
      <Ionicons name="arrow-down-circle-outline" size={40} color="white"/>
      </MenuTrigger>
      <MenuOptions>
        <MenuOption onSelect={() => alert(`Save`)} >
          <View >
            <Ionicons name="airplane" size={20}/>
            <Text>Airplane</Text>
          </View>

        </MenuOption>
        <MenuOption onSelect={() => alert(`Save`)} text='Save' />

   
      </MenuOptions>
    </Menu>
  </View>
        </MenuProvider>
        

      </View>
    )
  }
}


