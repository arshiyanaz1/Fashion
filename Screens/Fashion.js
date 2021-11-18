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
    Button
} from 'react-native';
import axios from 'axios';
import { Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

const Fashion = () => {
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


                <View style={styles.contentWrapperStyle}>
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

    const renderItemHor = ({ item }) => {
        return (
            <View style={styles.item}>
                <TouchableHighlight >
                    <Image
                        style={styles.itemPhoto}
                        source={{ uri: item.picture.large }}
                    />
                </TouchableHighlight>


                <View style={styles.contentWrapperStyle}>
                    <Text
                        style={{ flexWrap: 'wrap', fontSize: 10, paddingVertical: 3 }
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
        <>
            <StatusBar backgroundColor="#000" />
            <View>
                <FlatList
                    horizontal={true}
                    data={users}
                    renderItem={renderItemHor}
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
                /*  horizontal */
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
        </>
    );
};

const styles = StyleSheet.create({
    item: {
        aspectRatio: 1,
        width: '100%',
        flex: 1,
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
        width: 150,
        borderRadius: 5,
        height: 150,
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
