import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

const CategorySeeall = ({ navigation }) => {
    return (
        <View style={{
            flexDirection: 'row',paddingVertical:5}}>
            <TouchableOpacity onPress={()=>{navigation.navigate('SubCategory')}} style={{

                width: '30%',
                borderColor: '#dedede',
                borderWidth: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }} >
                <Image
                    style={{
                        width: 100,
                        height: 100,
                    }}
                    source={require('../assets/img/hanger.jpg')}
                />
                <Text style={{
                    alignItems: 'center', justifyContent: 'center', color: '#000', fontSize: 13, fontWeight: 'bold', textAlign: 'center',paddingTop:3
                }}>Clothes</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{

                width: '30%',
                borderColor: '#dedede',
                borderWidth: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }} >
                <Image
                    style={{
                        width: 100,
                        height: 100,
                    }}
                    source={require('../assets/img/hanger.jpg')}
                />
                <Text style={{
                    alignItems: 'center', justifyContent: 'center', color: '#000', fontSize: 13, fontWeight: 'bold', textAlign: 'center',paddingTop:3
                }}>Clothes</Text>
            </TouchableOpacity>
        </View> 
    )
}

export default CategorySeeall
