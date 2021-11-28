import React, { useEffect, useState } from 'react'
import { View,Alert, Text, StyleSheet, TouchableHighlight, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import { connect } from 'react-redux'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { is } from 'immer/dist/internal';


const CartScreen = ({ cartItems,addItemToCart,removeItem ,total,}) => {
    const [text, onChangeText] = React.useState("Useless Text");
    const [Textinput, onChangeTextinput] = React.useState();
    const [price,setPrice]=useState(0)


const increase=(item,key)=>{
   // Alert.alert('clicked')
    /* console.log('itemid',item.id)
    console.log('hh',index) */
}

useEffect(()=>{
/*    if(cartItems.length>0){
       var total=0
       cartItems.map((item,index)=>{
           total+=item.dob.age
       })
       if(total){      
             setPrice(total)
            console.log('price',price)
       }
   } */
})
    return (
        <ScrollView style={{height:'100%'}}>
            {cartItems.length>0?<>{
                cartItems.map((item, index) => {
                    return (
                        <View style={styles.itemWrapperStyle} key={index}>

                            <View style={[styles.contentWrapperStyle]}>
                                <Text
                                    style={
                                        styles.txtNameStyle
                                    }>{`${item.name.title} ${item.name.first} ${item.name.last}`}</Text>
                                <Text style={{ fontSize: 11, color: '#43675f', fontFamily: 'Open Sans', fontWeight: 'bold' }}>Full Set 1</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: 10 }}>

                                    <Text style={styles.txtEmailStyle}>{`${item.dob.age}`} AED </Text>
                                    <Text style={styles.priceMark}>
                                        72 AED
                                    </Text>

                                    <View style={{
                                        height: 50, width: '50%',
                                        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', paddingLeft: 5
                                    }}>
                                        <TouchableOpacity onPress={()=>removeItem(item)}>
                                            <AntDesign name="minus" type="AntDesign" size={15} style={styles.icon} />
                                        </TouchableOpacity>
                                        <Text>1</Text>
                                        <TouchableOpacity onPress={()=>addItemToCart(item)}>
                                            <AntDesign name="plus" type="AntDesign" size={15} style={styles.icon} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                            <TouchableHighlight style={styles.imageCont}>
                                <Image
                                    style={styles.itemImageStyle}
                                    source={{ uri: item.picture.large }}
                                />

                            </TouchableHighlight>


                        </View>
                    )
                })
            }

            <View style={{ paddingHorizontal: 16, borderTopColor: '#cecece', borderTopWidth: 1, borderBottomColor: '#cecece', borderBottomWidth: 1, borderRadius: 20, paddingVertical: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '50%', }}>
                    <AntDesign name="message1" type="AntDesign" size={15} style={styles.icon} />
                    <Text style={{ color: '#131414' }}>Add a note</Text>
                </View>
                <View>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeTextinput}
                        value={Textinput}
                        placeholder="Anythiong else we need to know"
                    />
                </View>
            </View>

            <View style={{ paddingHorizontal: 5 }}>
                <Text style={{ fontWeight: 'bold', color: '#303331',fontSize:16,paddingVertical:10,paddingLeft:10}}>
                    Payment Summary
                </Text>
                <View style={styles.row}>
                    <Text style={{color:'gray'}}>Total</Text>
                    <Text>{total}</Text>

                </View>
                <View style={styles.row}>
                    <Text style={{color:'gray'}}>Tax</Text>
                    <Text>0</Text>
                </View>
                <View style={styles.row}>
                    <Text style={{color:'gray'}}>Total Price</Text>
                    <Text>{total}</Text>
                </View>
            </View>
            
            <TouchableOpacity style={{width:'100%',alignItems:'center',justifyContent:'space-between',flexDirection:'column',backgroundColor:'#46a6f2',marginTop:10,paddingVertical:10}}>
                <Text style={{color:'#fff',fontSize:20}}>Check Out</Text>
            </TouchableOpacity></>:
            <View style={{flex:1,alignItems:'center',justifyContent:'center',}}>
            <Text >No items in Your Cart</Text></View>}
            
        </ScrollView>
    )
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cartItems,
        total:state.totalPrice,
       /*  qty:state.itemQty */
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product }),
        removeItem:(product) =>dispatch ({type:'REMOVE_FROM_CART',payload:product})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartScreen)

const styles = StyleSheet.create({
    itemWrapperStyle: {
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 16,
        paddingVertical: 16,
        alignItems: 'center',
        justifyContent: 'space-between',/* 
        borderColor:'red',
        borderWidth:1 */
    },
    row:{
        width:'40%',
        paddingHorizontal:5,
        paddingVertical:3,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },  
    icon: {
        paddingRight: 5,
        color: '#bebebe'
    },
    itemImageStyle: {
        width: 100,
        height: 80,
        borderRadius: 10

    },
    contentWrapperStyle: {
        width: '50%',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
    },
    txtNameStyle: {
        fontSize: 16,
        color: '#43675f',
        fontWeight: 'bold',
    },
    imageCont: {
        width: '50%',
        alignItems: 'flex-end',
        justifyContent: 'center',
        borderRadius: 5
    },
    txtEmailStyle: {
        color: '#43675f',
    },
    loaderStyle: {
        marginVertical: 16,
        alignItems: 'center',
    },
    priceMark: {
        textDecorationLine: 'line-through',
        textDecorationColor: '#cecece',
        textDecorationStyle: 'solid',
        paddingHorizontal: 15,
        color: '#bebebe'
    },
});
