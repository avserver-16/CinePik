import React from 'react';
import { View } from 'react-native';
import Main from './screen/Main';
import Profile from './screen/Profile';
import Fav from './screen/Fav';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

const MainTabs = ({ }) => {
    return (
        <Tab.Navigator
        initialRouteName="Main"
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ color }) => {
                    let iconName;
                    if (route.name === 'Main') {
                        iconName='home'
                    }
                    else if (route.name === 'Fav') {
                        iconName='heart';
                    }
                    else if (route.name === 'Profile') {
                        return <Feather name='user' type="font-awesome" size={25} color={color}></Feather>
                    }
                
                    return <View 
                    style={{ borderRightWidth: 0.6, 
                        borderRightColor: '#A8A8A8', 
                        justifyContent: 'center', 
                    alignItems: 'center', 
                    width: 140 }}>
                            <Feather name={iconName} type="font-awesome" size={25} color={color}></Feather>
                        </View>
                },
                tabBarActiveTintColor: '#FFBC00',
                tabBarInactiveTintColor: '#A8A8A8',
                tabBarStyle: {
                    position: 'absolute',
                    borderTopWidth: 0,
                    height: 70, // Adjust height if necessary
                    paddingBottom: 15,
                    paddingTop: 15,
                    paddingHorizontal: 0,
                    bottom: 0,
                    left: 12,
                    right: 0,
                    backgroundColor: 'black',
                    overflow: 'hidden', 
                    marginBottom:10,
                    borderRadius:100,
                    width:370// Ensure content does not overflow
                },
                tabBarShowLabel: false,
            })}
        >
          <Tab.Screen name="Main" component={Main} />
          <Tab.Screen name="Fav" component={Fav} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}

export default MainTabs;

