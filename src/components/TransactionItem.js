import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { List, Divider } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';

const TransactionItem = ({transactionName, transactionDate, transactionAmount}) => {
    const customStyle = require('../components/styles')
  return (
    <View>
        <List.Item
            title={props => <Text style={[customStyle.commonTextColor, {fontSize: 17, fontWeight: '500'}]}>{transactionName}</Text>}
            description={props => <Text style={[customStyle.commonTextColor, {fontSize: 13}]} {...props}>{transactionDate}</Text>}
            left={props => <View style={styles.transactionIcon}><AntDesign name="eye" size={24} color="#499FC6" /></View>}
            right={props => <View style={{justifyContent: 'center', alignItems: 'center'}}><Text style={{fontSize: 17, color: 'red'}}>-${transactionAmount}</Text></View>}
        />
        <Divider style={{backgroundColor: '#CBCBCB'}}/>
    </View>
  )
}

export default TransactionItem

const styles = StyleSheet.create({
    transactionIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E9F3F8',
        height: 45,
        width: 45,
        borderRadius: 100
    }
})