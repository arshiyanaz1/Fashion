import React from 'react'
import { View, Text,Button } from 'react-native'
import { connect } from 'react-redux'
import * as cartitemActions from '../reduxConfig/actions/cartitemAction'


const Notifications = ({clearcart}) => {
    return (
        <View>
                 <Button
                    title="Clear cart"
                    type="clear"
                    style={{ marginRight: 10 }}
                    onPress={() => clearcart()}
                />
        </View>
    )
}

const mapDispatchToProps=(dispatch)=>{
    return{
        clearcart:()=>dispatch(cartitemActions.clearCart())
    }
}
export default connect(null,mapDispatchToProps)(Notifications);
