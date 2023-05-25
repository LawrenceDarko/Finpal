import { View, Text, Image } from 'react-native'
import React from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
// import { COLORS, SIZES } from '../constants/Constants'
import { useNavigation } from '@react-navigation/native'

const CustomDrawerTwo = (props) => {
    const navigation = useNavigation();
  return (
    <DrawerContentScrollView style={{flex: 1, backgroundColor: '#122E3E', paddingVertical: 20}}>
      <View style={{width: '100%', height: 60, marginBottom: 30}}>
        <View style={{flex: 1, flexDirection: 'row', padding: 10, alignItems: 'center'}}>
            <Image source={require('../../assets/images/profile.png')} style={{height: 60, width: 60, marginRight: 10}} />
            <View>
                <Text style={{color: COLORS.light, fontSize: SIZES.medium, fontWeight: 'bold'}}>Lawrence Darko</Text>
                <Text onPress={()=>navigation.navigate('Orders')} style={{color: COLORS.light}}>View Profile</Text>
            </View>
        </View>
      </View>
      <DrawerItemList {...props}/>
    </DrawerContentScrollView>
  )
}

export default CustomDrawerTwo