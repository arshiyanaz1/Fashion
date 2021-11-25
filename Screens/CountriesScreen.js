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
    TouchableOpacity} from 'react-native'
import { Countries } from '../API/Countries'
import AsyncStorage from '@react-native-async-storage/async-storage';



const CountriesScreen = ({ navigation }) => {

    const _selectCountry= async (data)=>{
        try {
            await AsyncStorage.setItem('selectedCountry', JSON.stringify(data.name));
          } catch (err) {
            console.log(err);
          }
    }
    useEffect(()=>{
        /* _storeData() */
    },[])

    
    return (
        <View>
            <ScrollView style={{ /* flex: 1, */ height: '80%',marginBottom:10}}>
                {Countries.map((data, index) => {
                    return (
                        <TouchableOpacity style={styles.itemWrapperStyle} onPress={()=>_selectCountry(data)} key={Math.random().toString(36).substr(2, 9)}>
                            {/*   <Image
                        style={styles.itemImageStyle}
                        source={{uri: item.picture.large}}
                      /> */}
                            <Text style={styles.itemImageStyle}>{data.code}</Text>
                            <View style={styles.contentWrapperStyle}>
                                <Text
                                    style={
                                        styles.txtNameStyle
                                    }>{data.name}</Text>
                                <Text style={styles.txtEmailStyle}></Text>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                <Button
                    title="Next"
                    type="clear"
                    onPress={() => navigation.navigate('Language')}
                />
                <Button
                    title="Cancel"
                    type="clear"
                    onPress={() => navigation.navigate('Home')}
                />
            </View>

        </View>
    )
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
export default CountriesScreen