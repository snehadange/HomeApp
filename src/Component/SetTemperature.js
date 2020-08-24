import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground ,ViewPro} from 'react-native'
import { MaterialCommunityIcons, Ionicons, FontAwesome, Feather } from 'react-native-vector-icons'

import SemiExample from './SemiExample';

export default class SetTemprature extends React.Component {
    
    state={
        tempValue:20.5
    }

   addtemp=()=>{
     
       this.setState({
           tempValue:this.state.tempValue+0.5
       })
   }

   decreasetemp=()=>{
      this.setState({
        tempValue:this.state.tempValue-0.5
      }) 
   }
    render() {
     
        return (
            <View style={styles.contaier}>
               
                <TouchableOpacity
                    style={{
                        borderWidth: 1,
                        borderColor: '787aaf',
                         alignItems: 'center',
                        justifyContent: 'center',
                        width: 50,
                        height: 50,
                        borderRadius: 50,
                       
                       
                    }}
                    onPress={()=>this.addtemp()}
                >
                    <Feather name="plus" size={25} color="#787aaf"  />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        borderWidth: 1,
                        borderColor: '787aaf',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 50,
                        height: 50,
                        borderRadius: 50,
                        left: 250,
                        top: -45
                    }}
                    onPress={()=>this.decreasetemp()}
                >
                    <Feather name="minus" size={25} color="#787aaf" />

                </TouchableOpacity>
             
                <View style={{left:40,top:-40}}>
                    {/*<ImageBackground source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/GD%26T_Profileofaline.svg/1024px-GD%26T_Profileofaline.svg.png' }}
                        style={{ width: 300, height: 300, top: -110, left: 30 }}>
                    <Text  style={{fontSize:30,fontWeight:'bold',color:'#FF00FF',top:130,left:110}}>{this.state.tempValue}°</Text>
                     </ImageBackground>*/}
                 
                  <SemiExample circleRadius={130} progressShadowColor="red" progressColor="yellow" progressWidth={1} interiorCircleColor='#0a2d73'
                     percentage={this.state.tempValue} minValue={2} maxValue={5} currentvalue={20}/>
                   <Text style={{top:-50,left:100,fontSize:30,fontWeight:'bold',color:'#FF00FF'}}>{this.state.tempValue}°</Text>
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
    },
  
 


})