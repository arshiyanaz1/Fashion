import React, { useEffect } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import StackScreen from './Stack/stackScreen';
import reduxStore from './reduxConfig/store/index';
import './i18n/index'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const App = () => {

  const { store, persistor } = reduxStore();

  useEffect(() => {
    SplashScreen.hide();

    /*    GoogleSignin.configure({
         webClientId: API.webClientId,
       }); */
  }, [])


  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <StackScreen />
        </NavigationContainer>
      </PersistGate>
   
    </Provider>
  );
};


export default App;


/* import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import StackScreen from './Stack/stackScreen';
import store from './store/index';
import './i18n/index'



const App = () => {


  useEffect(() => {
    SplashScreen.hide();
  }, [])


  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackScreen />
      </NavigationContainer>
    </Provider>
  );
};


export default App; */