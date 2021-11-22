import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Notifications from './Notifications';
import Profile from './Profile';
import Fashion from '../Screens/Fashion';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo'

const Tab = createBottomTabNavigator();


const HomeStack = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Fashion" component={Fashion} options={({ navigation }) => ({
                tabBarLabel: 'Home',
                headerRight: () => <AntDesign name='filter' size={25} onPress={() => navigation.navigate('Filter')} />, tabBarIcon: ({ focused }) => (
                    <Ionicons name="home" size={25} color={focused ? 'blue' : 'black'} />
                )
            })} />
            <Tab.Screen name="Notifications" component={Notifications} options={{
                activeTintColor: 'blue',
                tabBarBadge: 3,
                tabBarIcon: ({ focused }) => (
                    <Ionicons name="notifications" size={25} color={focused ? 'blue' : 'black'} />
                )
            }} />
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarIcon: ({ focused }) => (
                    <Entypo name="user" size={25} color={focused ? 'blue' : 'black'} />
                )
            }} />
        </Tab.Navigator>
    );
}

export default HomeStack
