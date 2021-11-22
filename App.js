

import React, { useEffect } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
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
import FilterScreen from './Screens/FilterScreen';
import HomeStack from './TabScreens/Home';
import itemDetails from './Screens/itemDetails';


const Stack = createNativeStackNavigator();
const App = () => {


  useEffect(() => {
    SplashScreen.hide();

     GoogleSignin.configure({
       webClientId: '424023256708-0metms5ge3p8sct6495uje5o8apvt19s.apps.googleusercontent.com',
     });

  }, [])


  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="HomeStack" component={HomeStack}    options={{       
            headerShown: false,
          }}/>

        <Stack.Screen name="Login" component={LoginWithGoogle} />
       {/*  <Stack.Screen    options={({navigation}) => ({
            headerRight: () => <AntDesign name='filter' size={25} onPress={() => navigation.navigate('Filter')} />
          })} name="Fashion" component={Fashion} /> */}
        <Stack.Screen options={{ headerShown: false }} name="CatSeeAll" component={CategorySeeall} />
        <Stack.Screen options={{ headerShown: false }} name="SubCategory" component={SubCategory} />
        <Stack.Screen name="Sets" component={SetSub} />
        <Stack.Screen options={{       
            headerShown: false,
          }} name="Item" component={itemDetails} />
        <Stack.Screen  name="Filter" component={FilterScreen} options={({navigation}) => ({
            headerRight: () => <AntDesign name='close' size={25} onPress={() => navigation.navigate('Home')} />
          })}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
};


export default App;
