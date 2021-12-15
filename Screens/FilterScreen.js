import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, Button, TouchableOpacity, Alert, StyleSheet, TextInput } from 'react-native'
import { API } from '../API/Emirates';
import { City } from '../API/City'
import axios from 'axios';
import AntDesign from 'react-native-vector-icons/AntDesign';



const FilterScreen = () => {
    const [selectCity, setSelectCity] = useState('API');
    const [emirate, setEmirate] = useState(API)
    useEffect(() => {
        console.log(selectCity)
        console.log(emirate)

    })

    const setCity = (data, index) => {
        /*   setSelectCity(()=>{ */
        return emirate.map(item =>
            item.id === index && setSelectCity(item.name)
        )
        /*   }) */
        console.log("selected city", selectCity)
    }

    return (
        <View style={{ padding: 5, flex: 1, height: '100%', }} >
            {selectCity === 'API' ? <View><ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{ flexDirection: 'row' }}>
                {emirate.map((data, index) => {
                    return (
                        <TouchableOpacity onPress={() => setCity(data, index)} style={{ flexDirection: 'row', paddingVertical: 8, paddingHorizontal: 5 }}>
                            <Text style={{ paddingHorizontal: 15, paddingVertical: 10, borderWidth: 1, borderColor: '#ededed', borderRadius: 5, backgroundColor: '#e7f3ff', color: '#6c8ca2' }} index={index}>{data.name}</Text>
                        </TouchableOpacity>
                    )
                }
                )}

            </ScrollView>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity onPress={() => console.log('clicked')} style={{ flexDirection: 'row', paddingVertical: 8, paddingHorizontal: 5 }}>
                        <Text style={{ paddingHorizontal: 15, paddingVertical: 10, borderWidth: 1, borderColor: '#ededed', borderRadius: 5, backgroundColor: '#e7f3ff', color: '#6c8ca2' }} >Clothes</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => console.log('clicked')} style={{ flexDirection: 'row', paddingVertical: 8, paddingHorizontal: 5 }}>
                        <Text style={{ paddingHorizontal: 15, paddingVertical: 10, borderWidth: 1, borderColor: '#ededed', borderRadius: 5, backgroundColor: '#e7f3ff', color: '#6c8ca2' }} >Clothes</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={() => console.log('clicked')} style={{
                    paddingVertical: 8, paddingHorizontal: 5, alignItems: 'center', justifyContent: 'center',
                }}>
                    <Text style={{ textAlign: 'center', paddingHorizontal: 15, paddingVertical: 10, borderWidth: 1, borderColor: '#ededed', borderRadius: 5, backgroundColor: '#e7f3ff', color: '#6c8ca2' }} >Show results</Text>
                </TouchableOpacity>
            </View>
                :
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                        <View style={{ borderWidth: 1, borderColor: '#ededed', borderRadius: 5, width: '70%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 15, paddingVertical: 10, backgroundColor: '#e7f3ff', color: '#6c8ca2' }}>
                            <Text style={{ textAlign: 'center', alignSelf: 'center', color: '#657eaf' }}>{selectCity}</Text>
                            <AntDesign name="delete" color='#657eaf' type="AntDesign" size={20} />

                        </View>
                        <TouchableOpacity onPress={() => { navigation.navigate('Sets') }}>
                            <Text style={{ padding: 15, color: '#657eaf', fontWeight: 'bold' }}>See All</Text>
                        </TouchableOpacity>


                    </View>
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{ flexDirection: 'row' }}>
                        {City.map((data, index) => {
                            return (

                                <TouchableOpacity onPress={() => console.log('city')} style={{ flexDirection: 'row', paddingVertical: 8, paddingHorizontal: 5 }}>
                                    <Text style={{ borderWidth: 1, borderColor: '#ededed', borderRadius: 5, paddingHorizontal: 15, paddingVertical: 10, backgroundColor: '#e7f3ff', color: '#6c8ca2' }} index={index}>{data.name}</Text>
                                </TouchableOpacity>



                            )
                        }
                        )}
                    </ScrollView>

                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <TouchableOpacity onPress={() => console.log('clicked')} style={{ flexDirection: 'row', paddingVertical: 8, paddingHorizontal: 5 }}>
                            <Text style={{ paddingHorizontal: 15, paddingVertical: 10, borderWidth: 1, borderColor: '#ededed', borderRadius: 5, backgroundColor: '#e7f3ff', color: '#6c8ca2' }} >Clothes</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => console.log('clicked')} style={{ flexDirection: 'row', paddingVertical: 8, paddingHorizontal: 5 }}>
                            <Text style={{ paddingHorizontal: 15, paddingVertical: 10, borderWidth: 1, borderColor: '#ededed', borderRadius: 5, backgroundColor: '#e7f3ff', color: '#6c8ca2' }} >Clothes</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <Text style={{ paddingVertical: 10, fontWeight: 'bold' }}>Price</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                            <TextInput
                                style={{ backgroundColor: '#e7f3ff', height: 40, width: '50%', borderWidth: 1, borderColor: '#ededed', borderRightColor: '#dedede', borderRightWidth: 1 }}
                                placeholder="FROM"
                                onChangeText={text => setText(text)}
                            />
                            <TextInput
                                style={{ backgroundColor: '#e7f3ff', height: 40, width: '50%', borderWidth: 1, borderColor: '#ededed' }}
                                placeholder="TO"
                                onChangeText={text => setText(text)}
                            />
                        </View>
                    </View>


                    <TouchableOpacity onPress={() => console.log('clicked')} style={{
                        paddingVertical: 8, paddingHorizontal: 5, alignItems: 'center', justifyContent: 'center',
                    }}>
                        <Text style={{ textAlign: 'center', paddingHorizontal: 15, paddingVertical: 10, borderWidth: 1, borderColor: '#ededed', borderRadius: 5, backgroundColor: '#e7f3ff', color: '#6c8ca2' }} >Show results</Text>
                    </TouchableOpacity>
                </View>

            }
        </View>
    )
}

const styles = StyleSheet.create({

})

export default FilterScreen
