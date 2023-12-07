import { View,Dimensions, Text,StyleSheet,Platform, SafeAreaView, TouchableOpacity} from 'react-native'
import React from 'react'
import {themeColors} from '../../theme'
import QuestionTab from '../../screens/QuestionsSubScreen/QuestionTab'
import DifficultyTab from '../../screens/QuestionsSubScreen/DifficultyTab'
import SetsTab from '../../screens/QuestionsSubScreen/SetsTab'
import CategoriesTab from '../../screens/QuestionsSubScreen/CategoriesTab'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
 


const screenHeight = Dimensions.get('window').height;

const Tab = createMaterialTopTabNavigator();
const TabArr = [
  { route: 'Questions', label: 'Questions', component: QuestionTab },
  { route: 'Sets', label: 'Sets', component: SetsTab },
  { route: 'Categories', label: 'Categories', component: CategoriesTab },
  { route: 'Difficulty', label: 'Difficulty', component: DifficultyTab },
];


export default function Question() {



  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.header}>
     <Text style={styles.headerLeft}>Questions</Text>
     </View>
      <View style={{marginTop:-5,flex:1,paddingStart:20,paddingEnd:10}}>
      <Tab.Navigator
      initialRouteName={'Questions'}
      style={{}}
      screenOptions={({ route }) => ({
          tabBarLabel: ({ focused }) => (
          <TouchableOpacity
            style={[
              {marginHorizontal:-40, borderRadius:20,paddingEnd:8,paddingStart:8,paddingTop:8,paddingBottom:8, backgroundColor: focused ? themeColors.fullscaleGreen : '#EDEDED' },
            ]}
          >
            <Text style={[{textAlign:'center',fontSize:12,color:focused ? 'white':themeColors.semiBlack }]}>{route.name}</Text>
          </TouchableOpacity>
        ),
        tabBarStyle:{  backgroundColor:'#F8F9FA',
          elevation: 0,   // for Android
        shadowOffset: {
            width: 0, height: -10 // for iOS
        },},
        tabBarIndicatorStyle: styles.tabIndicator,
        animationEnabled:false,
        lazy:true,
        swipeEnabled:false,
        tabBarPressColor:'white'
      })}
      shouldRasterizeIOS
    >
      {TabArr.map((item, index) => (
        <Tab.Screen
          key={index}
          name={item.route}
          component={item.component}
        />
      ))}
    </Tab.Navigator>
      </View>
 
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  tabIndicator: {
    backgroundColor:'transparent', // Customize the indicator color
    height: 10, // Customize the indicator height
  },
  container:{
  flex:1,
  ...Platform.select({
    ios:{
    },
    android:{
      paddingTop:27,
    },
  }),
  backgroundColor:'#F8F9FA',
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
  