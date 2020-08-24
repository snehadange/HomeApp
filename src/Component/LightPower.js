import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList, AsyncStorage } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from 'react-native-vector-icons'
import { Switch } from 'react-native-switch';

export default class LightPower extends React.Component {
    state = {
        lightval: false,
        powerval:false
    }
    render() {
        return (
            <View style={styles.contaier}>
                <View style={{ flexDirection: 'row' }}>

                    <Ionicons name="md-bulb" size={20} color="#12cbc2" />
                    <Text style={{ color: 'white', fontWeight: 'bold' ,left:10}}>Light Control</Text>
                     <View style={{left:200}}>
                         <Switch
                        value={this.state.lightval}
                        onValueChange={(lightval) => this.setState({ lightval })}
                        disabled={false}
                        activeText={'On'}
                        inActiveText={'Off'}
                        backgroundActive={'green'}
                        backgroundInactive={'gray'}
                        circleActiveColor={'#30a566'}
                        circleInActiveColor={'#000000'}
                    />  
                     </View>
                  

                </View>

                <View style={{ flexDirection: 'row' ,top:10}}>

                    <MaterialCommunityIcons name="power-plug" size={20} color="#12cbc2" />
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Power Supply</Text>
                    <View style={{left:185}}>
                         <Switch
                        value={this.state.powerval}
                        onValueChange={(powerval) => this.setState({ powerval })}
                        disabled={false}
                        activeText={'On'}
                        inActiveText={'Off'}
                        backgroundActive={'green'}
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
        
        marginTop: 20,
        justifyContent: 'center',
      
        backgroundColor: '#0a2d73',
    }
})