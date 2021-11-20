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
    ScrollView

} from 'react-native';
import axios from 'axios';
import { Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { NavigationContainer } from '@react-navigation/native';



const Fashion = ({navigation}) => {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);


    const dimensions = Dimensions.get('window');
    const imageHeight = Math.round(dimensions.width * 9 / 16);
    const imageWidth = dimensions.width;

    const getUsers = () => {
        setIsLoading(true);
        axios
            .get(`https://randomuser.me/api/?page=${currentPage}&results=10`)
            .then(res => {
                //setUsers(res.data.results);
                setUsers([...users, ...res.data.results]);
                setIsLoading(false);
                console.log(res)
            });
    };

    const renderItem = ({ item }) => {
        return (
            <View style={styles.itemWrapperStyle}>
                <TouchableHighlight style={styles.imageCont}>
                    <Image
                        style={styles.itemImageStyle}
                        source={{ uri: item.picture.large }}
                    />

                </TouchableHighlight>


                <View style={[styles.contentWrapperStyle], { width: '100%' }}>
                    <Text
                        style={
                            styles.txtNameStyle
                        }>{`${item.name.title} ${item.name.first} ${item.name.last}`}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={styles.txtEmailStyle}>{`${item.dob.age}`}</Text>
                        <Text style={styles.txtBtn}>
                            {`${item.dob.age}`}
                        </Text>
                    </View>
                </View>
            </View>


        );
    };

    const renderItemHorShoes = ({ item }) => {
        return (
            <View style={styles.item}>
                <View style={styles.imageCont} >
                    <Image
                        style={{
                            width: 200,
                            borderRadius: 10,
                            height: 130,
                        }}
                        source={{ uri: item.picture.large }}
                    />

                    <AntDesign name="hearto" type="AntDesign" size={20} style={styles.heart} />
                    <TouchableHighlight style={styles.plus} >
                        <AntDesign name="plus" size={20} color="#fff" style={{ paddingTop: 4, paddingLeft: 5 }} />

                    </TouchableHighlight>
                </View>


                <View style={[styles.contentWrapperStyle], { flexDirection: 'row', paddingTop: 10 }}>

                    <View style={styles.LogoTextCont}>
                        <Text style={{
                            color: '#43675f',
                            fontFamily: 'Helvetica',
                            fontWeight: 'bold'
                        }}>Lacoste Shoes</Text>
                        <View style={styles.priceCont}>
                            <Text style={styles.green} >{`${item.dob.age}`} AED</Text>
                            <Text style={styles.priceMark}>72</Text>
                            <Text style={styles.offerBtn}>{`${item.dob.age}`} Off</Text>
                        </View>
                    </View>
                </View>
            </View>


        );
    };

    const renderItemHorOffer = ({ item }) => {
        return (
            <View style={styles.item}>
                <View style={styles.imageCont} >
                    <Image
                        style={{
                            width: 300,
                            borderRadius: 10,
                            height: 200,
                        }}
                        source={{ uri: item.picture.large }}
                    />
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between', position: "absolute",
                        bottom: 30,
                        left: 10,
                    }}>
                    <Text
                        style={{color:'white'}
                        }>{`${item.name.title} ${item.name.first} ${item.name.last}`}</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between', position: "absolute",
                        bottom: 10,
                        left: 10,
                        
                    }}>
                        <Text style={{ color: 'white' }} >{`${item.dob.age}`}</Text>
                        <Text style={{
                            textDecorationLine: 'line-through',
                            textDecorationColor: '#fff',
                            textDecorationStyle: 'solid',
                            paddingHorizontal: 15,
                            color:'#fff'
                        }}>72</Text>
                    </View>
                    <TouchableOpacity style={{
                        position: "absolute",
                        bottom: 10,
                        right: 10,
                        color: "white",
                        borderRadius: 50,
                    }} >
                        <Text style={{
                            backgroundColor: 'transparent',
                            color: '#fff',
                            borderRadius: 5,
                            paddingVertical: 8,
                            paddingHorizontal: 12,
                            fontWeight: 'bold',
                            fontSize: 12, borderWidth: 1, borderRadius: 5, borderColor: '#dedede'
                        }}>Add To Cart</Text>

                    </TouchableOpacity>
                </View>

            </View>


        );
    };

    const renderItemHorSet = ({ item }) => {
        return (
            <View style={styles.item}>
                <View style={styles.imageCont} >
                    <Image
                        style={styles.itemPhoto}
                        source={{ uri: item.picture.large }}
                    />

                    <Icon name="heart" size={25} color="red" style={styles.heart} />
                    <TouchableHighlight style={styles.plus} >
                        <AntDesign name="plus" size={25} color="#fff" style={styles.icon} />

                    </TouchableHighlight>
                </View>


                <View style={[styles.contentWrapperStyle], { flexDirection: 'row', paddingTop: 15 }}>
                    <Image
                        style={styles.logo}
                        source={{ uri: item.picture.large }}
                    />

                    <View style={styles.LogoTextCont}>
                        <Text style={styles.PriceHeading}>Lacoste</Text>
                        <Text style={{ fontSize: 11, color: '#bebebe', fontFamily: 'Open Sans', fontWeight: 'bold' }}>Full Set 1</Text>
                        <View style={styles.priceCont}>
                            <Text style={styles.green} >{`${item.dob.age}`}</Text>
                            <Text style={styles.priceMark}>72</Text>
                            <Text style={styles.offerBtn}>{`${item.dob.age}`} Off</Text>
                        </View>
                    </View>
                </View>
            </View>


        );
    };

    const renderItemHorCat = ({ item }) => {
        return (

            <View style={styles.item}>

                <TouchableOpacity style={{
                    borderRadius: 20,
                    width: '100%',
                }} >
                    <ImageBackground
                        style={{
                            width: 150,
                            height: 100,
                        }}
                        imageStyle={{ borderRadius: 10 }}
                        source={{ uri: item.picture.large }}
                    ><View style={styles.overlay} /></ImageBackground>
                    <Text style={{
                        position: 'absolute', letterSpacing: 1,
                        top: 75,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 13, fontWeight: 'bold', textAlign: 'center'
                    }}>{item.name.first}</Text>
                </TouchableOpacity>

            </View>

        );
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

    useEffect(() => {
        getUsers();
    }, [currentPage]);

    return (
        <ScrollView>
            <StatusBar backgroundColor="#000" />

            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{ padding: 15, color: '#bebebe', fontWeight: 'bold' }}>Shoes</Text>
                <TouchableOpacity onPress={()=>{navigation.navigate('Sets')}}>
                    <Text style={{ padding: 15, color: '#657eaf', fontWeight: 'bold' }}>See All</Text>
                </TouchableOpacity>
            </View>
         

            <View>
                <FlatList
                    horizontal={true}
                    data={users}
                    renderItem={renderItemHorShoes}
                    keyExtractor={(item, index) => {
                        index;
                    }}
                    ListFooterComponent={renderLoader}
                    onEndReached={loadMoreItem}
                    onEndReachedThreshold={0}
                    showsHorizontalScrollIndicator={false}
                />
            </View>

            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{ padding: 15, color: '#bebebe', fontWeight: 'bold' }}>Offers</Text>
                <TouchableOpacity>
                    <Text style={{ padding: 15, color: '#657eaf', fontWeight: 'bold' }}>See All</Text>
                </TouchableOpacity>
            </View>

            <View>
                <FlatList
                    horizontal={true}
                    data={users}
                    renderItem={renderItemHorOffer}
                    keyExtractor={(item, index) => {
                        index;
                    }}
                    ListFooterComponent={renderLoader}
                    onEndReached={loadMoreItem}
                    onEndReachedThreshold={0}
                    showsHorizontalScrollIndicator={false}
                />
            </View>

            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{ padding: 15, color: '#bebebe', fontWeight: 'bold' }}>Category</Text>
                <TouchableOpacity  onPress={() => navigation.navigate('CatSeeAll')}>
                    <Text style={{ padding: 15, color: '#657eaf', fontWeight: 'bold' }}>See All</Text>
                </TouchableOpacity>
            </View>

            <View>
                <FlatList
                    horizontal={true}
                    data={users}
                    renderItem={renderItemHorCat}
                    keyExtractor={(item, index) => {
                        index;
                    }}
                    ListFooterComponent={renderLoader}
                    onEndReached={loadMoreItem}
                    onEndReachedThreshold={0}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{ padding: 15, color: '#bebebe', fontWeight: 'bold' }}>Sets</Text>
                <TouchableOpacity onPress={()=>{navigation.navigate('Sets')}}>
                    <Text style={{ padding: 15, color: '#657eaf', fontWeight: 'bold' }}>See All</Text>
                </TouchableOpacity>
            </View>

            <View>
                <FlatList
                    horizontal={true}
                    data={users}
                    renderItem={renderItemHorSet}
                    keyExtractor={(item, index) => {
                        index;
                    }}
                    ListFooterComponent={renderLoader}
                    onEndReached={loadMoreItem}
                    onEndReachedThreshold={0}
                    showsHorizontalScrollIndicator={false}
                />
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
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    item: {
        aspectRatio: 1,
        width: '100%',
        flex: 1,
    },
    imageCont: {
        width: '100%',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: 'gray',
        opacity: 0.8,
        borderRadius: 10
    },
    plus: {
        /*    margin: 5, */
        position: "absolute",
        bottom: -10,
        right: 10,
        width: 30,
        height: 30,
        color: "white",
        backgroundColor: '#04af05',
        borderRadius: 50,
    },
    icon:
        { paddingTop: 3, paddingLeft: 3 }
    ,
    heart: {
        position: "absolute",
        top: 10,
        right: 10,
        width: 30,
        height: 30,
    },
    LogoTextCont: {
        paddingLeft: 10,
    },
    PriceHeading: {
        color: '#bebebe',
        fontFamily: 'Helvetica',
        fontWeight: 'bold'
    },
    logo: {
        width: 35,
        height: 35,
        borderColor: '#dedede',
        borderWidth: 1,
        overflow: 'hidden',
        shadowColor: '#dedede',
        shadowRadius: 10,
        shadowOpacity: 1,
        padding: 3,
        borderRadius: 5
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
    item: {
        borderRadius: 5,
        margin: 10,
        height: '30%',
        paddingVertical: 5
    },
    itemPhoto: {
        width: 220,
        borderRadius: 10,
        height: 180,
    },
    imageCont: {
        borderRadius: 5,
        width: '100%',
    },
    itemImageStyle: {
        width: '100%', height: 150, borderRadius: 5
    },
    contentWrapperStyle: {
        justifyContent: 'space-around',

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
});

export default Fashion;
