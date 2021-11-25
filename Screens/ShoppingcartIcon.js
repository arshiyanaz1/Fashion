import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { connect } from 'react-redux'

const ShoppingcartIcon = (props) => {
    return (


        <View style={{ flexDirection: 'row' }}>
            <AntDesign style={{ paddingHorizontal: 5, }} name='filter' size={25} onPress={() => navigation.navigate('Filter')} />
            <View style={{ padding: 5 }}>
                <View style={{
                    position: 'absolute', height: 25, width: 25, borderRadius: 15, backgroundColor: 'rgba(95,197,123,0.8)', right: 15, bottom: 15, alignItems: 'center', justifyContent: 'center', zIndex: 2000}}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>{/* {props.cartItems.length} */}</Text>
                </View>
                <AntDesign onPress={() => props.navigation.navigate('Cart')} name="shoppingcart" size={25} />
            </View>
        </View>


    )
}

const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconContainer: {
        paddingLeft: 20, paddingTop: 10, marginRight: 5
    }
});
export default connect()(ShoppingcartIcon)
