import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList, AsyncStorage } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from 'react-native-vector-icons'
import { Switch } from 'react-native-switch';

export default class SavingMode extends React.Component {
    state = {
        modeval: false,
       
    }
    render() {
        return (
            <View style={styles.contaier}>
                <View style={{ flexDirection: 'row',top:20 }}>

                    <Ionicons name="md-bulb" size={20} color="#12cbc2" />
                    <Text style={{ color: '#12cbc2', fontWeight: 'bold' ,left:10}}>Saving Mode</Text>
                     <View style={{left:200}}>
                         <Switch
                        value={this.state.modeval}
                        onValueChange={(modeval) => this.setState({ modeval })}
                        disabled={false}
                        activeText={'On'}
                        inActiveText={'Off'}
                        backgroundActive={'#12cbc2'}
                        backgroundInactive={'gray'}
                        circleActiveColor={'#30a566'}
                        circleInActiveColor={'#000000'}
                    />  
                     </View>
                  

                </View>

                

            </View>
        )
    }
}

const styles = StyleSheet.create({
    contaier: {
   
        marginTop:60,
        justifyContent: 'center',
         backgroundColor: '#0a2d73',
    }
})