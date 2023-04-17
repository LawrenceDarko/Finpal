import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const AddHabit = () => {
  return (
    <View style={styles.container}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <MaterialIcons style={{marginRight: 3}} name="home" size={18} color="black" />
            <Text>Home</Text>
        </View>
        <View style={{width: '100%', height: '80%', justifyContent: 'center', alignItems: 'center'}}>
            <Ionicons name="add" size={45} color="black" />
        </View>
    </View>
  )
}

export default AddHabit

const styles = StyleSheet.create({
    container: {
        height:140,
        width: '46%',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#5A5A5A',
        marginHorizontal: 5,
        marginVertical: 8,
        padding: 10,
        backgroundColor: '#F5F5F5',
        opacity: 0.2
    },
})