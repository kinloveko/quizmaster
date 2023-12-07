import { View,Dimensions, Text,StyleSheet,Platform, SafeAreaView} from 'react-native'
import React from 'react'
import {themeColors} from '../../theme'


const screenHeight = Dimensions.get('window').height;
export default function Dashboard() {
  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.header}>

     <View style={{marginStart:10,flexDirection:'column'}}>
     <Text style={styles.headerLeft}>Welcome back,</Text>
     <Text numberOfLines={1} style={styles.headerLeftName}>Juan Dela Cruz</Text>
     </View>
     <View style={{alignSelf:'flex-end',marginTop:3,marginEnd:5}}>
     <View style={{borderRadius:90,paddingLeft:12,paddingRight:12,paddingTop:7,paddingBottom:7,backgroundColor:themeColors.fullscaleGreen}}>
     <Text style={{color:'white',fontWeight:'bold',fontSize:15}}>J</Text>
     </View>   
     </View>
     </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
container:{
flex:1,
...Platform.select({
  ios:{
  },
  android:{
    paddingTop:27,
  },
}),
backgroundColor:'white',
},
header: {
  top:screenHeight < 768 ? -8:-12, 
  padding: 10,
  marginTop:5,
  flexDirection:'row',
  justifyContent: 'space-between',
},
headerRight:{

},
headerLeft: {
  color:"#888888",
  alignItems: 'flex-start',
  fontWeight:'300',
  fontSize: screenHeight < 768 ? 13:15, 
},
headerLeftName: {
  color:themeColors.semiBlack,
  alignItems: 'flex-start',
  fontWeight:'600',
  fontSize: screenHeight < 768 ? 15:17, 
  maxWidth:170,
},
headerText: {
  fontSize: screenHeight < 768 ? 15: 18,
  fontWeight: '500',
},

});
