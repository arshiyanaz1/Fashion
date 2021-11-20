import React ,{useEffect} from 'react'
import {
    StyleSheet,
    Image,
    View,
    Text,
    Button,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const Home = ({ navigation }) => {

    async function onGoogleButtonPress() {
        console.log('clicked')
        // Get the users ID token

        try {
            const { idToken } = await GoogleSignin.signIn();

            // Create a Google credential with the token
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);

            // Sign-in the user with the credential
            return auth().signInWithCredential(googleCredential);
        } catch (error) {
            console.log({ error })
        }
    }

    
    return (

        <View style={styles.container}>
            <Image
                style={styles.tinyLogo}
                source={require('../assets/img/hanger.jpg')}
            />
            <TouchableOpacity style={{ marginTop: '70%', marginBottom: 10, padding: 2, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderRadius: 10, backgroundColor: 'blue', width: '90%' }}>
                <Icon name="facebook" size={20} color="#fff" style={{ padding: 5 }} />
                <Text style={{ alignSelf: 'center', justifyContent: 'center', width: '70%', color: '#fff' }}> Continue with Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
                style={{ padding: 2, flexDirection: 'row', alignItems: 'center', marginBottom: 10, justifyContent: 'space-between', borderRadius: 10, backgroundColor: 'white', width: '90%' }}>
                <Icon name="google" size={20} color="#000" style={{ padding: 5 }} />
                <Text style={{ alignSelf: 'center', justifyContent: 'center', width: '70%', color: '#000' }}> Login with Google</Text>
            </TouchableOpacity>
                <Button
                    title="Skip"
                    type="clear"
                    onPress={() => navigation.navigate('Fashion')}
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
