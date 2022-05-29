import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Home from './Home';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} hidden />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" headerMode="screen">
          <Stack.Screen name="Home" options={{headerShown: false}}>
            {props => <Home userName="Sports Fan" {...props} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
