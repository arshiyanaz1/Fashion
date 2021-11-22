import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import { StackNavigator } from 'react-navigation';
import { Dimensions } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { mapStyle } from '../constants/mapStyle';
import Geolocation from "react-native-geolocation-service";
import { check, request, PERMISSIONS, RESULTS } from "react-native-permissions"

const itemDetails = ({ route, navigation }) => {
    const { item } = route.params;
    const [location, setLocation] = useState(null)

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const handleLocationPermission = async () => { // 👈
        let permissionCheck = '';
        if (Platform.OS === 'android') {
            permissionCheck = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);

            if (
                permissionCheck === RESULTS.BLOCKED ||
                permissionCheck === RESULTS.DENIED
            ) {
                const permissionRequest = await request(
                    PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
                );
                permissionRequest === RESULTS.GRANTED
                    ? console.warn('Location permission granted.')
                    : console.warn('location permission denied.');
            }
        }
    };

    useEffect(() => {
        handleLocationPermission()
    }, [])

    useEffect(() => { // 👈
        Geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords
                setLocation({ latitude, longitude })
            },
            error => {
                console.log(error.code, error.message)
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
            
        )
        if(location){
            console.log('location',location)
        }
    }, [])

    return (
        /*  <ScrollView style={{flex:1,height:'100%'}}> */
        <ScrollView style={{ flex: 1, height: '100%', }}>
            <View >
                <Image
                    style={{ width: '100%', height: 210 }}
                    source={{ uri: item.picture.large }}>
                </Image>
                <View style={styles.price}>
                    <Text style={styles.priceMark} >
                        {item.dob.age}
                    </Text>
                    <Text style={{ color: 'white' }}>
                        {item.registered.age} AED
                    </Text>
                </View>
            </View>

            <View style={{ padding: 5 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 10 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                        {item.name.first}
                    </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 5 }}>
                        <AntDesign name="sharealt" type="AntDesign" size={20} style={styles.icon} />
                        <AntDesign name="hearto" type="AntDesign" size={20} style={styles.icon} />
                        <AntDesign name="warning" type="AntDesign" size={20} />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 10 }}>
                    <Text style={{ paddingRight: 5, fontSize: 15, color: 'gray' }}>{item.name.first}</Text>
                    <Text style={{ fontSize: 15, color: 'gray' }}>{item.name.last}</Text>
                </View>
                <TouchableOpacity style={{ backgroundColor: '#e7f3ff', marginHorizontal: 5, paddingHorizontal: 5 }}>
                    <Text style={{ color: '#e7a79d', paddingVertical: 10, fontWeight: 'bold', letterSpacing: 0.4 }}>{item.dob.age}% OFFER</Text>
                </TouchableOpacity>
            </View>

            <View style={{ width: '100%', marginTop: 10 }}>
                <Image resizeMode={'cover'}
                    style={{ width: '100%', height: 110 }}
                    source={require('../assets/img/finalSale.jpg')}>
                </Image>
            </View>

            <View style={{ flex: 1, borderRadius: 8, borderWidth: 1, margin: 10, }}>
                {location && (
                    <MapView
                        style={{ borderRadius: 15,overflow: 'hidden', borderWidth: 1, height: 250 }}
                        provider={PROVIDER_GOOGLE}
                        customMapStyle={mapStyle}
                        initialRegion={{
                            latitude: location.latitude,
                            longitude: location.longitude,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                        showsUserLocation={true}
                    />
                )}

            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    Container: {
        width: '100%',
    },
    price: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '23%',
        justifyContent: 'space-between',
        backgroundColor: '#4795d6',
        position: "absolute",
        bottom: 0,
        right: 0,
        paddingHorizontal: 10,
        paddingVertical: 3

    },
    priceMark: {
        textDecorationLine: 'line-through',
        textDecorationColor: '#cecece',
        textDecorationStyle: 'solid',
        color: 'white'
    },
    icon: {
        paddingRight: 20
    }
})
export default itemDetails
