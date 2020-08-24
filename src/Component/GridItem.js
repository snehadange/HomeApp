import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { MaterialCommunityIcons, Ionicons, MaterialIcons, FontAwesome, FontAwesome5 } from 'react-native-vector-icons'

const datalist = [
    { key: '1', type: 'Bedroom' },
    { key: '2', type: 'Living Room' },
    { key: '3', type: 'Kitchen' },
    { key: '4', type: 'Bathroom' },
    { key: '5', type: 'Kids Room' },
    { key: '6', type: 'Dining Room' }]

const numColumns = 3
const Width = Dimensions.get('window').width

export default class GridItem extends React.Component {
    constructor() {
        super()
      
        this.state = {

        }

    }

    renderItem = (item, index) => {

        return (
            <TouchableOpacity style={styles.itemStyle} 
              onPress={this.props.handle}
            >

             <View style={{top:10}} > 
                {item.key === '1' ? <Ionicons name="ios-bed" size={30} color="white" style={{ top: -20 }} /> : null}
                {item.key === '2' ? <Ionicons name="ios-bed" size={30} color="white" style={{ top: -20 }} /> : null}
                {item.key === '3' ? <Ionicons name="ios-bed" size={30} color="white" style={{ top: -20 }} /> : null}
                {item.key === '4' ? <FontAwesome name="bathtub" size={30} color="white" style={{ top: -20 }} /> : null}
                {item.key === '5' ? <FontAwesome5 name="baby-carriage" size={30} color="white" style={{ top: -20 }} /> : null}
                {item.key === '6' ? <Ionicons name="ios-bed" size={30} color="white" style={{ top: -20 }} /> : null}
            
                <Text style={styles.itemText}>{item.type}</Text>

             </View>
               



            </TouchableOpacity>
        )
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' ,borderColor:'red'}}>Welcome Home</Text>
                </View>

          
                <FlatList
                    data={datalist}
                    renderItem={({ item }) => this.renderItem(item)}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={numColumns}
                />
               
             
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
          backgroundColor: '#0a2d73',
          justifyContent:'center'
    },
    itemStyle: {
        backgroundColor: '#133b8c',
        height: 120,
        margin: 3,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        borderRadius: 10,
        top: 10,
        
    },
    itemText: {
        color: 'white',
        fontSize: 13,
        top:-10,
        
    }


})