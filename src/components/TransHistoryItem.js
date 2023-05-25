import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/Constants'
import { Ionicons } from '@expo/vector-icons';


const TransHistoryItem = ({deposit}) => {
    return (
        <View style={styles.historyItem}>
            <View style={{flexDirection: 'row'}}>
            {/* <Image source={require('../../assets/images/arrowfirst.png')}/> */}
            <View style={{height: 40, width: 40, borderRadius: 20, backgroundColor: deposit? "#E2EEE5" : '#F7E7DD', justifyContent: 'center', alignItems: 'center'}}>
                {!deposit? (<Ionicons name="md-paper-plane-outline" size={22} color={deposit? "#2FA94E" : "#FF6600"} />) :
                    (<Ionicons name="ios-add" size={24} color={deposit? "#2FA94E" : "#FF6600"} />)
                }
            </View>
            <View style={{marginLeft: 15}}>
                <Text>Wallet withdrawal</Text>
                <Text style={{fontSize: 13, color: COLORS.orderCardColor}}>Nov 28, 2021</Text>
            </View>
            </View>
            <Text style={{color: deposit? "#2FA94E" : '#FF6600'}}>{deposit? "+" : "-"}3000.00</Text>
        </View>
    )
}

export default TransHistoryItem

const styles = StyleSheet.create({
    historyItem: {
        // borderWidth: 1,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.orderDetailsCard,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})