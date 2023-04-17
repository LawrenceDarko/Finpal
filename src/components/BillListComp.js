import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';

const BillListComp = ({date, purpose, amount, status, bgColor}) => {

  const customStyle = require('../components/styles')

    const [fontsLoaded] = useFonts({
        'Inter-Light': require('../../assets/fonts/Inter-Light.ttf'),
        'Roboto-Light': require('../../assets/fonts/Roboto-Light.ttf'),
        'Inter-SemiBoldItalic': 'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
      });

    if (!fontsLoaded) {
    return null;
    }

  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
            <View style={{marginRight: 10, backgroundColor: bgColor? bgColor :'#1C1F3C', borderRadius: 10, paddingHorizontal: 5}}><Text style={[styles.textColor, {opacity: 1, fontSize: 13, letterSpacing: 1.5, fontWeight: 'bold'}]}>{date}</Text></View>
            <View><Text style={[customStyle.commonTextColor, {opacity: 1, fontWeight: 'bold'}]}>{purpose}</Text></View>
        </View>

        <View style={{flexDirection: 'row'}}>
            <View style={{marginRight: 10}}><Text style={[customStyle.commonTextColor, {fontSize: 13, fontWeight: 'bold', color: '#4a6b60'}]}>{amount}</Text></View>
            <View style={{marginRight: 10, backgroundColor: '#3E6FE9', borderRadius: 10, paddingHorizontal: 5}}><Text style={[styles.textColor, {fontSize: 13, fontWeight: 'bold'}]}>{status}</Text></View>
        </View>
      </View>
      <View style={{width: '100%', borderBottomWidth: 1, borderBottomColor: '#999999', opacity: 0.2}}></View>
    </View>
  )
}

export default BillListComp

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingBottom: 10,
        paddingTop: 10
        // borderBottomWidth: 1,
        // borderBottomColor: '#999999',
        
    },

    textColor: {
        color: '#E9E9E9'
    }
})