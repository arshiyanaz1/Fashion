import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  Image,
  View,
  Text,
  Button,
  TouchableOpacity,
  I18nManager
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import '../i18n/index'
import { useTranslation } from 'react-i18next';
import RNRestart from 'react-native-restart';


const Home = ({ navigation }) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [country, setCountry] = useState('');
  const { t, i18n } = useTranslation();
  const [authenticated, setAutheticated] = useState(false);



  useEffect(() => {
    _retrieveData().then(() => {
      country === 'ar' ? i18n.changeLanguage('ar') : i18n.changeLanguage('en')
    }).then(() => {
      I18nManager.forceRTL(i18n.language === 'ar');
      /*  RNRestart.Restart(); */
    })
  }, [country])

  useEffect(()=>{
    if(user){
      signout();
    }
  },[user])

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('selectedLang');
      if (value !== null) {
        // We have data!!
        setCountry(JSON.parse(value))
      }
    } catch (error) {
      // Error retrieving data
    }
  };


  async function onGoogleButtonPress() {
    // Get the users ID token

    try {
      const { idToken } = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      const userdata = auth().currentUser;
      if(userdata){
          setUser(userdata)
      }
      console.log('gooooooooo', googleCredential)
      // Sign-in the user with the credential
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.log({ error })
    }

  }

  async function onFacebookButtonPress() {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }
    const userdata = auth().currentUser;
    if(userdata){
        setUser(userdata)
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);

  }

  const signout = () =>{
    const user = auth().currentUser;
  }

  //const user = auth().currentUser;

  return (

    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/img/hanger.jpg')}

      />

      <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Text>{user && user.displayName}</Text>
        <Text>{user && user.email}</Text>
        {user&&<Button title="Signout" onPress={() => signout()} />}
      </View>

      
      <TouchableOpacity onPress={() => onFacebookButtonPress().then(() => console.log('signed in with facebook'))} style={{ marginTop: '50%', marginBottom: 10, padding: 2, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderRadius: 10, backgroundColor: 'blue', width: '90%' }}>
        <Icon name="facebook" size={20} color="#fff" style={{ padding: 5 }} />
        <Text style={{ alignSelf: 'center', justifyContent: 'center', width: '70%', color: '#fff' }}> {t('Continue_with_Facebook')}</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
        style={{ padding: 2, flexDirection: 'row', alignItems: 'center', marginBottom: 10, justifyContent: 'space-between', borderRadius: 10, backgroundColor: 'white', width: '90%' }}>
        <Icon name="google" size={20} color="#000" style={{ padding: 5 }} />
        <Text style={{ alignSelf: 'center', justifyContent: 'center', width: '70%', color: '#000' }}> {t('Login_with_Google')}</Text>
      </TouchableOpacity>
      <Text></Text>
      <Button
        title={t('Skip')}
        type="clear"
        onPress={() => navigation.navigate('HomeStack')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tinyLogo: {
    width: 200,
    height: 150,
  },
});

export default Home
