import React, { useEffect } from 'react';
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
    /*    GoogleSignin.configure({
         webClientId: API.webClientId,
       }); */
  }, [])


  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackScreen />
      </NavigationContainer>
    </Provider>
  );
};


export default App;
