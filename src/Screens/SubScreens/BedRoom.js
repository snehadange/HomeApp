import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, AsyncStorage } from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons'
import Temperature from '../../Component/Temperature';
import SavingMode from '../../Component/SavingMode'
import SetIcon from '../../Component/SetIcon';
import SetTemprature from '../../Component/SetTemperature';
export default class AllRoom extends React.Component {
  

    render() {
        return (
            <View style={styles.container}>
              <Temperature/>
              <View
                    style={{
                        top: 60,
                        borderBottomColor: '#005682',
                        borderBottomWidth: 2, 
                    }}
                />
                <SavingMode/>
                <View
                    style={{
                        top: 40,
                        borderBottomColor: '#005682',
                        borderBottomWidth: 2,
                    }}
                />
                <SetIcon/>
                <View
                    style={{
                        top: 30,
                        borderBottomColor: '#005682',
                        borderBottomWidth: 2,
                    }}
                />
                <SetTemprature/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       backgroundColor: '#0a2d73',
    },
 


})