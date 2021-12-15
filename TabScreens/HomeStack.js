import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Notifications from './Notifications';
import Profile from './Profile';
import Fashion from '../Screens/Fashion';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo'
import { useTranslation } from 'react-i18next';
import ShoppingcartIcon from '../Screens/ShoppingcartIcon';


const Tab = createBottomTabNavigator();


const HomeStack = () => {

    const {t}=useTranslation();
    return (
        <Tab.Navigator> 
            <Tab.Screen name="Fashion" component={Fashion} options={({ navigation }) => ({
                tabBarLabel: t('Home'),
                headerRight: () =><ShoppingcartIcon/>, tabBarIcon: ({ focused }) => (
                    <Ionicons name="home" size={25} color={focused ? 'blue' : 'black'} />
                )
            })} />
            <Tab.Screen name={t("Notifications")} component={Notifications} options={{
                activeTintColor: 'blue',
                /* tabBarLabel: t('Notifications'), */
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
