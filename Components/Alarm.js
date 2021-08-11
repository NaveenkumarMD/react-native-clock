import React, { Component } from 'react'
import { Text, View ,StyleSheet, StatusBar} from 'react-native'

export default class Alarm extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.footbar}>
                    <Text>Hello world</Text>
                </View>
                <StatusBar style="auto"/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    footbar:{
        backgroundColor:'green'
    }
})

