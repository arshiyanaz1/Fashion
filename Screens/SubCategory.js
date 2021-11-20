import React from 'react'
import { View, Text, StyleSheet, TextInput,TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const SubCategory = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Clothes</Text>
            <View style={styles.searchSection}>
                <AntDesign style={styles.searchIcon} name="search1" size={20} color="#000" />
                <TextInput
                    style={styles.input}
                    placeholder="Search"
                    onChangeText={(searchString) => { this.setState({ searchString }) }}
                    underlineColorAndroid="transparent"
                />
            </View>
            <View style={{flexDirection:'column',borderWidth:1,borderRadius:10,borderColor:'#cecece',marginTop:10}}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Sets')}} style={{flexDirection:'row',alignItems:'center',borderBottomColor:'#cecece',borderBottomWidth:1,padding:4}}>
                    <FontAwesome5 style={styles.searchIcon} name="tshirt" size={20} color="#000" />
                    <Text style={{paddingLeft:10}}>T-Shirt</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row',alignItems:'center',borderBottomColor:'#cecece',borderBottomWidth:1,padding:4}}>
                    <FontAwesome5 style={styles.searchIcon} name="tshirt" size={20} color="#000" />
                    <Text style={{paddingLeft:10}}>Dress</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row',alignItems:'center',borderBottomColor:'#cecece',borderBottomWidth:1,padding:4}}>
                    <MaterialCommunityIcons style={styles.searchIcon} name="shoe-heel" size={20} color="#000" />
                    <Text style={{paddingLeft:10}}>Shoes</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 5,
        paddingVertical: 10
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 16,
        paddingVertical: 15,
        letterSpacing: 0.5
    },
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 5, borderWidth: 2,
        borderColor: '#cecece'

    },
    searchIcon: {
        padding: 8,
        borderRadius: 5

    },
    input: {
        flex: 1,
        paddingTop: 8,
        paddingRight: 10,
        paddingBottom: 8,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
        borderRadius: 5
    },
})
export default SubCategory
