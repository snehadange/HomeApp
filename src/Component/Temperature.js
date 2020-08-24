import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, AsyncStorage } from 'react-native';
import { MaterialIcons ,FontAwesome} from 'react-native-vector-icons'

export default class Temperature extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }


  


    render() {
        return (
            <View style={styles.container}>
              <View style={{flexDirection:'row',top:15}}>
                <FontAwesome name="thermometer-4" size={30} color="white" style={{top:10}}/>
                <Text style={{fontSize:30,color:'white',fontWeight:'bold',left:10}}>Temperature</Text>
                <Text style={{fontSize:30,color:'white',fontWeight:'bold',left:100}}>18.5</Text>
              </View>
              <View style={{flexDirection:'row',top:40}}>
               <Text style={{color:'white'}}>Energy consumption</Text>
               <Text style={{color:'white',left:180}}>45.2KW</Text>
              </View>
              <View style={{flexDirection:'row',top:45}}>
               <Text style={{color:'white'}}>Expanditure</Text>
               <Text style={{color:'white',left:240}}>5.2$</Text>
              </View>
              <View style={{flexDirection:'row',top:50}}>
               <Text style={{color:'white'}}>Air Humidity</Text>
               <Text style={{color:'white',left:240}}>45%</Text>
              </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
       // flex: 1,
       // justifyContent:'center',
       // alignItems:'center',
        backgroundColor: '#0a2d73',
    },
  
  


})