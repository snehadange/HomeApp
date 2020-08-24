import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList, AsyncStorage } from 'react-native';
import { MaterialIcons, Ionicons } from 'react-native-vector-icons'
import GridItem from '../Component/GridItem';
import LightPower from '../Component/LightPower';
import  IndicatorExample from '../Component/IndicatorExample';


export default class Home extends React.Component {
    constructor() {
        super()
       
        this.state = {

        }

    }



   gotoBedroom=()=>{
       this.props.navigation.navigate('AllRoom')
   }




    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Home</Text>
                    <TouchableOpacity style={styles.icon}>
                        <Ionicons name="ios-settings" color="white" size={25} />
                    </TouchableOpacity>

                </View>


                <GridItem handle={()=>this.gotoBedroom()} />
                <View
                    style={{
                        top: 10,
                        borderBottomColor: 'black',
                        borderBottomWidth: 2,
                        left: 5,
                        right: 5
                    }}
                />
                <LightPower />
                <View
                    style={{
                        top: 20,
                        borderBottomColor: 'black',
                        borderBottomWidth: 2,
                        left: 5,
                        right: 5
                    }}
                />
                <IndicatorExample/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0a2d73',

    },
    header: {
        paddingTop: 64,
        paddingBottom: 14,
        backgroundColor: '#005682',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#454D65',
        shadowOffset: { height: 5 },
        shadowRadius: 15,
        shadowOpacity: 0.2,
        zIndex: 10
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        left: -120
    },
    icon: {
        left: 140,
        top: -20
    },
    list: {
        marginHorizontal: 10
    }

})