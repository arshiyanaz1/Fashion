import React,{useState,useEffect} from 'react'
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import { Lang } from '../API/Language'
import AsyncStorage from '@react-native-async-storage/async-storage';
import '../i18n/index'
import { useTranslation } from 'react-i18next';

const LanguageScreen = ({navigation}) => {
    const {i18n}=useTranslation();

    const _selectLang= async (data)=>{
       try {
        await AsyncStorage.setItem('selectedLang', JSON.stringify(data.code));
      } catch (err) {
        console.log(err);
      }
    /*     i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar') */

    }


    useEffect(()=>{

    })
    return (
        <View>
            {Lang.map((data,index)=>{
                return(
                    <TouchableOpacity style={styles.itemWrapperStyle} onPress={()=>_selectLang(data)} key={Math.random().toString(36).substr(2, 9)}>
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
                    </View>
                </TouchableOpacity>                
                )
            })}

            <TouchableOpacity style={{backgroundColor:'blue',padding:5,borderRadius:5}} onPress={()=>navigation.navigate('Home')}>
                <Text>Next</Text>
            </TouchableOpacity>
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
export default LanguageScreen
