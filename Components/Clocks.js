import * as React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import AnalogClock from 'react-native-clock-analog'
export default class Clocks extends React.Component {
    constructor(props){
        super(props)
        var date=new Date()
        this.state={
            hour:date.getHours(),
            minutes:date.getMinutes()

        }
        alert(this.state.hour)
    }

  render() {
    return (
      <View style={styles.container}>
        <AnalogClock
            size={300}
            colorCenter="tomato"
            colorNumber="gray"
            colorClock="gray"
            colorHour="tomato"
            colorMinutes="tomato"
            hour={this.state.hour}
            minutes={this.state.minutes}
          />

      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});