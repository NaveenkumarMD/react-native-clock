import React, { Component } from 'react'
import { Text, View ,StyleSheet, TextBase} from 'react-native'
import {Ionicons} from '@expo/vector-icons'

export default class Timer extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.timer}>00.00.00</Text>
                <Text ><Ionicons name="play-circle-outline" size={60} color="tomato" /></Text>
                
                
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent:'space-around'
      },
      timer:{
        fontSize:50,
      }

})

