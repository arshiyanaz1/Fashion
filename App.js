

import React, { useEffect } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SplashScreen from 'react-native-splash-screen'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home';
import LoginWithGoogle from './Screens/LoginWithGoogle';
import CategorySeeall from './Screens/CategorySeeall';
import Fashion from './Screens/Fashion';
import SubCategory from './Screens/SubCategory';
import SetSub from './Screens/SetSub';


const Stack = createNativeStackNavigator();
const App = () => {


  useEffect(() => {
    SplashScreen.hide();

    /*  GoogleSignin.configure({
       webClientId: '424023256708-0metms5ge3p8sct6495uje5o8apvt19s.apps.googleusercontent.com',
     }); */

  }, [])

  const FilterIcon = () => {
    return (
           <Image
        style={{ width: 30, height: 30 }}
        source={require('./assets/img/filter.png')}
      />

    );
  }

  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={LoginWithGoogle} />
        <Stack.Screen options={{
          headerRight: props => <FilterIcon {...props} />
        }} name="Fashion" component={Fashion} />
        <Stack.Screen options={{ headerShown: false }} name="CatSeeAll" component={CategorySeeall} />
        <Stack.Screen options={{ headerShown: false }} name="SubCategory" component={SubCategory} />
        <Stack.Screen name="Sets" component={SetSub} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};


export default App;
