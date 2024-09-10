import React from 'react';
import { View, Text } from 'react-native';
import Main from './screen/Main';
import Profile from './screen/Profile';
import Fav from './screen/Fav';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
function MainTabs() {
    return (
        <Tab.Navigator
          initialRouteName="Main"
          screenOptions={({ route }) => ({
            tabBarIcon: () => {
              let iconName;
              if (route.name === 'Main') {
                iconName = '🏠';  
              } else if (route.name === 'Fav') {
                iconName = '❤️';  
              } else if (route.name === 'Profile') {
                iconName = '👤';  
              }

              return (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ fontSize: 20 }}>{iconName}</Text>
                </View>
              );
            },
            tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
            tabBarStyle: { backgroundColor: 'green', height: 200,zIndex:2 },  
          })}
        >
          <Tab.Screen name="Main" component={Main} />
          <Tab.Screen name="Fav" component={Fav} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}

export default MainTabs;

