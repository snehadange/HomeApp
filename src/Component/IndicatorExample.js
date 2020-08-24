import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, AsyncStorage } from 'react-native';
import StepIndicator from 'react-native-step-indicator'

const labels = ["1", "2", "3", "4","5"];
const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#fe7013',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#fe7013',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#fe7013',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#fe7013',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#fe7013',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#fe7013'
}

export default class IndicatorExample extends React.Component {
    state={
        currentPosition:0
    }

    render() {
        return (
          
        <View style={styles.container}>
               <Text style={{ color: 'white', fontSize: 20,left:90,top:-40}}>Security level</Text>
               <StepIndicator
                  customStyles={customStyles}
                 currentPosition={this.state.currentPosition}
                 labels={labels}
               />
          </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        marginTop: 60
    }
})