import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList, AsyncStorage } from 'react-native';
import { MaterialCommunityIcons, Ionicons ,FontAwesome} from 'react-native-vector-icons'
import { Switch } from 'react-native-switch';


export default class SetIcon extends React.Component {
    state = {
        lightval: false
    }
    render() {
        return (
            <View style={styles.contaier}>
                <View style={{ flexDirection: 'row' }}>



                    <View style={{width:70,left:20}} >
                        <Switch
                            value={this.state.lightval}
                            style={{ transform: [{ scaleX: 7 }, { scaleY: 7 }] }}
                            onValueChange={(lightval) => this.setState({ lightval })}
                            disabled={false}
                            activeText={<Ionicons name="md-home" size={20} color="#12cbc2" />}
                            inActiveText={<Ionicons name="md-home" size={20} color="black" />}
                            backgroundActive={'green'}
                            backgroundInactive={'gray'}
                            circleActiveColor={'#30a566'}
                            circleInActiveColor={'#000000'}
                        />
                    </View>
                    <View
                        style={{
                            left: 20,
                            borderLeftColor: '#005682',
                            borderLeftWidth: 2,
                            top: -8,
                            height: 70
                        }}
                    />
                    <TouchableOpacity
                        style={{
                            borderWidth: 1,
                            borderColor: 'yellow',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 45,
                            height: 45,
                            borderRadius: 50,
                            left:30
                        }}
                    >
                      <Ionicons name="md-sunny" size={20} color="yellow" />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            borderWidth: 1,
                            borderColor: '#1c73d5',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 45,
                            height: 45,
                            borderRadius: 50,
                            left:50
                        }}
                    >
                      <FontAwesome name="user" size={20} color="#1c73d5" />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            borderWidth: 1,
                            borderColor: '#d5a51c',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 45,
                            height: 45,
                            borderRadius: 50,
                            left:70
                        }}
                    >
                      <Ionicons name="md-bulb" size={20} color="#d5a51c" />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            borderWidth: 1,
                            borderColor: 'yellow',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 45,
                            height: 45,
                           // backgroundColor: '#fff',
                            borderRadius: 50,
                            left:90
                        }}
                    >
                      <Ionicons name="md-sunny" size={20} color="yellow" />
                    </TouchableOpacity>
                </View>



            </View>
        )
    }
}

const styles = StyleSheet.create({
    contaier: {
       
        marginTop: 70,
        justifyContent: 'center',
        backgroundColor: '#0a2d73',
    }
})