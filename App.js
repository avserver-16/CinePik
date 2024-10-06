import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './source/screen/Login';
import Signup, { myName } from './source/screen/Signup';
import Home from './source/screen/Home';
import Main from './source/screen/Main';
import MainTabs from './source/MainTabs';
import Fav from './source/screen/Fav';
import Profile from './source/screen/Profile';
import { UserProvider } from './source/screen/UserContext';

const Stack = createNativeStackNavigator();

const App = () => {
  const [inputName, setInputName] = React.useState('');

  return (
    <UserProvider>

      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'> 
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}  />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Signup" options={{headerShown:false}}>
            {props => <Signup {...props} setInputName={setInputName} />}
          </Stack.Screen>
          <Stack.Screen name="Main" component={Main} options={{ headerShown: false }}  />
          <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
          <Stack.Screen name="Fav" component={Fav} options={{ headerShown: false }} />
          <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
      </UserProvider>

  );
}

export default App;


