import { View,Dimensions, Text,StyleSheet,Platform, SafeAreaView} from 'react-native'
import React from 'react'
import {themeColors} from '../../theme'
const screenHeight = Dimensions.get('window').height;

export default function QuizRooms() {
  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.header}>
     <Text style={styles.headerLeft}>Quiz Rooms</Text>
     
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
  headerLeft: {
    color:themeColors.semiBlack,
    alignItems: 'flex-start',
    fontWeight:'600',
    fontSize: screenHeight < 768 ? 20:25,
    marginStart:10, 
  },
 
  headerText: {
    fontSize: screenHeight < 768 ? 15: 18,
    fontWeight: '500',
  },
  
  });
  