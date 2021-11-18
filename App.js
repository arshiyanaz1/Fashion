

import React, { useEffect } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SplashScreen from 'react-native-splash-screen'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home';
import LoginWithGoogle from './Screens/LoginWithGoogle';
import Fashion from './Screens/Fashion';


const Stack = createNativeStackNavigator();
const App = () => {


  useEffect(() => {
    SplashScreen.hide();

    /*  GoogleSignin.configure({
       webClientId: '424023256708-0metms5ge3p8sct6495uje5o8apvt19s.apps.googleusercontent.com',
     }); */

  }, [])

  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={LoginWithGoogle} />
        <Stack.Screen name="Fashion" component={Fashion} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};


export default App;
