import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './source/screen/Login';
import Signup from './source/screen/Signup';
import Home from './source/screen/Home';
import Main from './source/screen/Main';
import MainTabs from './source/MainTabs';

const Stack = createNativeStackNavigator();
const App = () => {
return (
 <NavigationContainer>   
    <Stack.Navigator initialRouteName='Home'> 
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}  />
      <Stack.Screen name="Login" component={Login}  options={{ headerShown: false }} />
      <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }}  />
      <Stack.Screen name="Main" component={Main} options={{ headerShown: false }}  />
      <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
</Stack.Navigator>
</NavigationContainer>
  );
}
export default App

