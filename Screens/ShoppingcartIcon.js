import React from 'react'
import { View, Text, StyleSheet ,TouchableOpacity} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { connect } from 'react-redux'
import { useNavigation } from '@react-navigation/native';

const ShoppingcartIcon = ({ cartItems }) => {
    const navigation = useNavigation();
return(

        <View style={{ flexDirection: 'row' }}>
            <AntDesign style={{ paddingHorizontal: 5, }} name='filter' size={25}  onPress={() => navigation.navigate('Filter')} />
            <TouchableOpacity style={{ padding: 5 }}  onPress={() => navigation.navigate('Cart')}>
                <View style={{
                    position: 'absolute', height: 25, width: 25, borderRadius: 15, backgroundColor: 'rgba(95,197,123,0.8)', right: 15, bottom: 15, alignItems: 'center', justifyContent: 'center', zIndex: 2000}}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>{cartItems.length}</Text>
                </View>
                <AntDesign  name="shoppingcart" size={25} />
            </TouchableOpacity>
        </View>

)
    
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cartItems
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
export default connect(mapStateToProps)(ShoppingcartIcon)
