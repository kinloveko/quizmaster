import { StyleSheet, TouchableOpacity,TouchableWithoutFeedback,Text, View,Dimensions } from 'react-native'
import Icon, { Icons } from '../theme/Icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useRef } from 'react'
import * as Animatable from 'react-native-animatable';
import {themeColors} from '../theme'
import Dashboard from './subScreen/Dashboard';
import Question from './subScreen/Question';
import Reports from './subScreen/Reports';
import QuizRooms from './subScreen/QuizRooms';
import AddQuestion from './subScreen/AddQuestion';


const TabArr = [
    { route: 'Dashboard', label: '', type:  Icons.Feather, icon: 'sidebar', component: Dashboard },
    { route: 'Question', label: '', type:  Icons.Feather, icon: 'help-circle', component: Question },
    { route: 'AddQuestion', label: '', type: Icons.AntDesign, icon: 'pluscircle', component: AddQuestion },
    { route: 'QuizRooms', label: '', type: Icons.MaterialIcons, icon: 'meeting-room', component: QuizRooms },
    { route: 'Reports', label: '', type: Icons.Ionicons, icon: 'document-text-outline', component: Reports },
];

const screenHeight = Dimensions.get('window').height;
const constHeight = screenHeight * 0.09;
const Tab = createBottomTabNavigator();

const animate1 = { 0: { scale: 0.1, translateY: 0 }, 0.1: { translateY: 0 }, 1: { scale: 1.0, translateY:-1} };
const animate2 = { 0: { scale: 1, translateY: 0 }, 0.1: { scale: 1, translateY: 0.1} };

const TabButton = (props) => {
 
    const { item, onPress, accessibilityState } = props;
    const focused = accessibilityState.selected;
    
    const viewRef = useRef(null);

    useEffect(() => {
      if (focused) {
        viewRef.current.animate(animate1);
      } else {
        viewRef.current.animate(animate2);
      }
    }, [focused])
    
    
    return (
      <TouchableWithoutFeedback onPress={onPress} activeOpacity={1} style={styles.container}>
      <Animatable.View ref={viewRef} duration={150} style={styles.container}>
        <View style={styles.btn}>
        {item.icon !== 'pluscircle' && (
            <Animatable.View  style={styles.circle}>
            {focused && <View style={styles.activeCircle} />}
            </Animatable.View>
        )}
          {item.icon === 'pluscircle' ? (
          <Icon type={item.type} name={item.icon} size={32} color={themeColors.fullscaleGreen} />
         )
          :
          (<Icon type={item.type} name={item.icon} color={focused ? themeColors.fullscaleGreen : themeColors.grey} />
          ) 
      }
            </View>
      </Animatable.View>
    </TouchableWithoutFeedback>
    )
  }

  export default function ParentScreen() {

     return (
      <Tab.Navigator
        screenOptions={{
          headerShown:false,
          tabBarStyle:  styles.tabBar,
          headerTitleAlign: 'center',
        }}
      >
        {TabArr.map((item, index) => {
          return (
            <Tab.Screen key={index} name={item.route} component={item.component}
            options={{
                tabBarShowLabel: false,
                tabBarButton: (props) => <TabButton {...props} item={item} />
              }}
            />
          )
        })}
      </Tab.Navigator>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',

    },
    tabBar: {
      height: constHeight,
      position: 'absolute',
      borderColor:themeColors.borderColorGray,
      borderWidth:1,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
    btn: {
      width: 40,
      height: 40,
      borderRadius: 25,
      borderWidth: 4,
      borderColor: themeColors.bg,
      backgroundColor: themeColors.bg,
      justifyContent: 'center',
      alignItems: 'center'
    },
    circle: {
      ...StyleSheet.absoluteFillObject, 
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      borderRadius: 25,
    },
    activeCircle: {
      position: 'absolute',
      bottom: 5, // Position the dot at the bottom of the button
      height: 5, // Adjust the size of the dot as needed
      width: 8, // Adjust the size of the dot as needed
      borderRadius: 4, // Make it a circle
      backgroundColor: themeColors.fullscaleGreen,
      top:-3 // Color of the dot
    },
     
  })