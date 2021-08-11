import React, { Component } from 'react'
import { Text, View ,StyleSheet, StatusBar} from 'react-native'
import CountDown from 'react-native-countdown-component';
import { TextInput } from 'react-native-gesture-handler';
import {Ionicons} from '@expo/vector-icons'

export default class Stopwatch extends Component {
    constructor(props){
        super(props)
        this.state={
            time:0,
            run:false,
            timervalue:0
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <CountDown size={30} until={this.state.timervalue} onFinish={()=>{
                    if(this.state.run){
                        alert("Done")
                    }
                    
                }} running={this.state.run}
                digitStyle={{backgroundColor: 'grey'}}
                digitTxtStyle={{color: 'white'}}
                timeToShow={['M', 'S']}
                separatorStyle={{color: '#1CC625'}}/>
                <View style={{marginTop:"20%",marginBottom:"30%"}}>
                    <TextInput placeholder="00" style={{fontSize:90,borderBottomWidth:2,borderBottomColor:"tomato",color:"tomato"}} onChangeText={(text)=>{
                        this.setState({time:parseInt(text)})

                    }} />
                    <Text style={{color:"gray"}}>   in seconds</Text>
                    </View>

                <Text onPress={()=>{
                    this.setState({timervalue:this.state.time})
                    
                    setTimeout(() => {
                        alert(this.state.timervalue)
                        this.setState({run:true})
                    }, 2000);
                    
                }}><Ionicons name="play-circle-outline" size={60} color="tomato" /></Text>
                
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent:'center',
    },

})

