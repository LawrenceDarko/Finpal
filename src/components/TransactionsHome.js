import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import TransactionItem from './TransactionItem'


const TransactionsHome = () => {

    const customStyle = require('../components/styles')

  return (
    <View style={[styles.container, customStyle.foreColor]}>
        <View style={styles.head}>
            <Text style={[customStyle.commonTextColor, {fontWeight: '600', fontSize: 16}]}>Recent Transactions</Text>
        </View>
        <View>
            <TransactionItem transactionAmount={20} transactionName={'Grocery Store'} transactionDate={'Jan 2, 2023'}/>
            <TransactionItem transactionAmount={43} transactionName={'Shopping'} transactionDate={'Dec 12, 2022'}/>
            <TransactionItem transactionAmount={71} transactionName={'Online Payment'} transactionDate={'April 13, 2023'}/>
        </View>
    </View>
  )
}

export default TransactionsHome

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        // borderWidth: 1,
        padding: 10,
        width: '100%',
        // borderColor: 'black',
        borderRadius: 10,
        // backgroundColor: '#2D325C',
        // backgroundColor: '#336FA5',
        marginVertical: 6,
        paddingBottom: 24

      },

      head: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15
      }
})