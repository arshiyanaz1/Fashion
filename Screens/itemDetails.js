import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, ScrollView,TouchableOpacity,Dimensions,TouchableHighlight } from 'react-native'
import { StackNavigator } from 'react-navigation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { mapStyle } from '../constants/mapStyle';
import Geolocation from "react-native-geolocation-service";
import { check, request, PERMISSIONS, RESULTS } from "react-native-permissions"
import { connect } from 'react-redux';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const itemDetails = ({ navigation,route, addItemToCart,cartItems,removeItem ,total}) => {
    const { item } = route.params;
    const [location, setLocation] = useState(null)
    const [Item, setItem] = useState(item)
    

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

    const getItem=(items)=>{
        console.log('it',items)
    }
    useEffect(() => { // 👈
        Geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords
                setLocation({ latitude, longitude })
               // console.log('position', position)
            },
            error => {
                console.log(error.code, error.message)
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }

        )
     /*    if (location) {
            console.log('location', location)
        } */
    }, [])

    return (
        <>
              {cartItems.length > 0 &&
                <TouchableHighlight underlayColor="#2196f3" onPress={() => navigation.navigate('Cart')} style={{ flex: 1, flexDirection: 'row', position: 'absolute', height: 30, left: (windowWidth / 2) - 183, width: '90%', borderRadius: 4, backgroundColor: '#E7F3FF', alignself: 'center',/*  top: windowHeight - 180 */top: windowHeight - 180, alignItems: 'center', zIndex: 2000, justifyContent: 'space-around' }}>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',paddingHorizontal:10 }}>
                    <Text style={{ borderColor: '#bebebe', borderWidth: 1, /* paddingHorizontal: 3, */ borderRadius: 25, textAlign: 'center', color: '#393b3d' }}>{cartItems.length} </Text>
                    <Text style={{ alignSelf: 'center', color: '#393b3d', paddingHorizontal: 10 }}>Total: {total}  </Text>
                </View>
            </TouchableHighlight>
            }
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
                            style={{ borderRadius: 15, overflow: 'hidden', borderWidth: 1, height: 250 }}
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


            <View style={{flexDirection:'row',width:'100%',paddingHorizontal:10,alignItems:'center',justifyContent:'space-between',borderTopWidth:1,borderTopColor:'gray'}}>
                <View style={{
                    height: 50,width:'40%',
                    flexDirection:'row',alignItems:'center',justifyContent:'space-evenly',}}>
                    <TouchableOpacity onPress={()=>removeItem(Item)}>
                        <AntDesign name="minus" type="AntDesign" size={15} style={styles.icon} />
                    </TouchableOpacity>
                    <Text>0</Text>
                    <TouchableOpacity onPress={()=>addItemToCart(Item)}>
                        <AntDesign name="plus" type="AntDesign" size={15} style={styles.icon} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={()=>addItemToCart(Item)} style={{width:'100%',backgroundColor:'#e7f3ff',padding:10,borderRadius:5}}>
                    <Text style={{alignSelf:'flex-start',color:'#2966bd',fontWeight:'bold',fontSize:16}}>Start add items to cart</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product }),
        removeItem:(product) =>dispatch ({type:'REMOVE_FROM_CART',payload:product})

    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cartItems,
        total:state.totalPrice
    }
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
       /*  paddingRight: 20 */
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(itemDetails)
