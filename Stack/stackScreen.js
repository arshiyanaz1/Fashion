import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import HomeStack from '../TabScreens/HomeStack';
import LoginWithGoogle from '../Screens/LoginWithGoogle';
import CategorySeeall from '../Screens/CategorySeeall';
import SetSub from '../Screens/SetSub';
import SubCategory from '../Screens/SubCategory';
import FilterScreen from '../Screens/FilterScreen';
import itemDetails from '../Screens/itemDetails';
import CountriesScreen from '../Screens/CountriesScreen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LanguageScreen from '../Screens/Language';
import CartScreen from '../Screens/CartScreen';


const Stack = createNativeStackNavigator();


const StackScreen = () => {
    return (
        <Stack.Navigator>
        <Stack.Screen name="Select Country" component={CountriesScreen} />
        <Stack.Screen name="Language" options={{       
            headerTitle:'Select Language'
            
          }}component={LanguageScreen} />

        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="HomeStack" component={HomeStack}    options={{       
            headerShown: false,
            
          }}/>

        <Stack.Screen name="Login" component={LoginWithGoogle} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen options={{ headerShown: false }} name="CatSeeAll" component={CategorySeeall} />
        <Stack.Screen options={{ headerShown: false }} name="SubCategory" component={SubCategory} />
        <Stack.Screen name="Sets" component={SetSub} />
        <Stack.Screen options={{       
            headerShown: false,
          }} name="Item" component={itemDetails} />
        <Stack.Screen  name="Filter" component={FilterScreen} options={({navigation}) => ({
            headerRight: () => <AntDesign name='close' size={25} onPress={() => navigation.navigate('Home')} />
          })}/>
      </Stack.Navigator>
    )
}

export default StackScreen
