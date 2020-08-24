import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, AsyncStorage } from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons'


export default class LivingRoom extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }


  


    render() {
        return (
            <View style={styles.container}>
              <Text>LivingRoom</Text> 
              
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#0a2d73',
    },
  
  


})