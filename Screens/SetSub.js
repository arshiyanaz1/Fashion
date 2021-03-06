import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    FlatList,
    Image,
    StyleSheet,
    ActivityIndicator,
    StatusBar,
    TouchableHighlight,
    Button,
    ImageBackground,
    TouchableOpacity,
    ScrollView,
    Dimensions

} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { connect } from 'react-redux';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const SetSub = ({ navigation, cartItems,total }) => {

    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);


    const getUsers = () => {
        setIsLoading(true);
        axios
            .get(`https://randomuser.me/api/?page=${currentPage}&results=10`)
            .then(res => {
                //setUsers(res.data.results);
                setUsers([...users, ...res.data.results]);
                setIsLoading(false);
                //console.log(res)
            });
    };

    const renderLoader = () => {
        return isLoading ? (
            <View style={styles.loaderStyle}>
                <ActivityIndicator size="large" color="#aaa" />
            </View>
        ) : null;
    };

    const loadMoreItem = () => {
        setCurrentPage(currentPage + 1);
    };

    const getItem = (item) => {
        // console.log('item',item)
    }

    useEffect(() => {
        getUsers();
    }, [currentPage]);

    const renderItem = ({ item }) => {
        return (

            <TouchableOpacity style={styles.itemWrapperStyle} onPress={() => { getItem(item), navigation.navigate('Item', { item }) }}>
                <View>
                    <Image
                        style={styles.itemImageStyle}
                        source={{ uri: item.picture.large }}
                    />
                    <AntDesign name="hearto" type="AntDesign" size={15} style={styles.heart} />
                </View>


                <View style={[styles.contentWrapperStyle], { flexDirection: 'row', paddingTop: 10 }}>

                    <View style={styles.LogoTextCont} >
                        <Text style={{
                            color: '#43675f',
                            fontFamily: 'Helvetica',
                            fontWeight: 'bold'
                        }}>{`${item.name.first}`} {`${item.name.last}`}</Text>
                        <View style={styles.priceCont}>
                            <Text style={styles.green} >{`${item.registered.age}`} AED</Text>
                            <Text style={styles.priceMark}>{`${item.dob.age}`}</Text>
                            <Text style={styles.offerBtn}>{`${item.dob.age}`} Off</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>


        );
    };


    return (
        <View>
            {cartItems.length > 0 &&
                <TouchableHighlight underlayColor="#2196f3" onPress={() => navigation.navigate('Cart')} style={{ flex: 1, flexDirection: 'row', position: 'absolute', height: 30, left: (windowWidth / 2) - 183, width: '90%', borderRadius: 4, backgroundColor: '#E7F3FF', alignself: 'center',/*  top: windowHeight - 180 */top: windowHeight - 180, alignItems: 'center', zIndex: 2000, justifyContent: 'space-around' }}>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10 }}>
                        <Text style={{ borderColor: '#bebebe', borderWidth: 1, paddingHorizontal: 3, borderRadius: 25, textAlign: 'center', color: '#393b3d' }}>{cartItems.length} </Text>
                        <Text style={{ alignSelf: 'center', color: '#393b3d', paddingHorizontal: 10 }}>Total: {total} </Text>
                    </View>
                </TouchableHighlight>
            }
            <View style={styles.Container}>
                <Image resizeMode={'cover'}
                    style={{ width: '100%', height: 110 }}
                    source={require('../assets/img/finalSale.jpg')}>
                </Image>
            </View>


            <FlatList
                data={users}
                renderItem={renderItem}
                keyExtractor={(item, index) => {
                    index.toString();
                }}
                ListFooterComponent={renderLoader}
                onEndReached={loadMoreItem}
                onEndReachedThreshold={0}
                numColumns={2}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        width: '100%',
    },
    LogoTextCont: {
        paddingLeft: 10,
    },
    green: {
        color: 'green'
    },
    priceCont: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    priceMark: {
        textDecorationLine: 'line-through',
        textDecorationColor: '#cecece',
        textDecorationStyle: 'solid',
        paddingHorizontal: 15,
        color: '#bebebe'
    },
    heart: {
        position: "absolute",
        top: 10,
        right: 10,
        width: 30,
        height: 30,
    },
    offerBtn: {
        backgroundColor: 'red',
        color: 'white',
        borderRadius: 5,
        paddingHorizontal: 10,
        height: 15,
        fontSize: 10
    },
    itemWrapperStyle: {
        flexWrap: 'wrap',
        flexDirection: 'column',
        paddingHorizontal: 16,
        paddingVertical: 16,
        width: '50%',
    },
    imageCont: {
        borderRadius: 5,
        width: '100%',
    },
    itemImageStyle: {
        width: '100%', height: 150, borderRadius: 5
    },
    txtNameStyle: {
        fontSize: 12,
        paddingVertical: 5,
        fontWeight: 'bold',
        fontWeight: 'bold'
    },
    txtEmailStyle: {
        color: '#777',
        fontSize: 10,
        fontWeight: 'bold'
    },
    txtBtn: {
        fontSize: 10,
        backgroundColor: 'red',
        color: '#fff',
        paddingHorizontal: 16,
        paddingVertical: 3,
        borderRadius: 5,
        fontWeight: 'bold',
        borderColor: '#CECECE',
        borderWidth: 1
    },
    loaderStyle: {
        marginVertical: 16,
        alignItems: 'center',
    },

})

const mapStateToProps = (state) => {
    return {
        cartItems: state.cartItems,
        total:state.totalPrice
    }
}
export default connect(mapStateToProps)(SetSub)
