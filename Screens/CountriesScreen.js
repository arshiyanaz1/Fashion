import React, { useEffect, useState } from 'react'
import {
    Button, View,
    Text,
    FlatList,
    Image,
    StyleSheet,
    ActivityIndicator,
    StatusBar,
    AsyncStorageStatic,
    ScrollView,
    TouchableOpacity
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as cartitemActions from '../reduxConfig/actions/cartitemAction'
import { connect } from 'react-redux';
import PushNotification from "react-native-push-notification";
import {Countries} from '../API/Countries'




const CountriesScreen = ({ navigation,  }) => {

    const _selectCountry = async (data) => {
        try {
            console.log('selected_country',data.name)
            await AsyncStorage.setItem('selectedCountry', JSON.stringify(data.name));
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
      /*   if(country){
            console.log('selected',country)
        } */
        createChannels()
    }, [])

    const createChannels = () => {
        PushNotification.createChannel(
            {
                channelId: "test-channel",
                channelName: "Test Channel",
            }
        )
    }

    const renderItem = ({ item,key }) => {
        return (
            <TouchableOpacity style={styles.itemWrapperStyle} onPress={() => _selectCountry(item)} key={key}>
                <Text style={styles.itemImageStyle}>{item.code}</Text>
                <View style={styles.contentWrapperStyle}>
                    <Text
                        style={
                            styles.txtNameStyle
                        }>{item.name}</Text>
                    <Text style={styles.txtEmailStyle}></Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={{ flex: 1 }}>
            <View>
                <FlatList
                    data={Countries}
                    renderItem={renderItem}
                    keyExtractor={(item, id) => {
                        id;
                    }}
                    onEndReachedThreshold={0}
                />
            </View>

            <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', position: 'absolute', bottom: 0, top: '93%', }}>
                <Button
                    title="Next"
                    type="clear"
                    style={{ marginRight: 10 }}
                    onPress={() => navigation.navigate('Language')}
                />
                <Button
                    title="Cancel"
                    type="clear"
                    onPress={() => loadCountry()}
                />
            </View>

        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        country: state.country.data
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loadCountry: () => dispatch(cartitemActions.loadCountries())
    }
}
const styles = StyleSheet.create({
    list: {
        width: '100%',
    },
    item: {
        aspectRatio: 1,
        width: '100%',
        flex: 1,
    },
    itemWrapperStyle: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    itemImageStyle: {
        width: 50,
        height: 50,
        marginRight: 16,
    },
    contentWrapperStyle: {
        justifyContent: 'space-around',
    },
    txtNameStyle: {
        fontSize: 16,
    },
    txtEmailStyle: {
        color: '#777',
    },
    loaderStyle: {
        marginVertical: 16,
        alignItems: 'center',
    },
});
export default connect(mapStateToProps, mapDispatchToProps)(CountriesScreen)