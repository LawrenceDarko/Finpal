import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { COLORS } from '../constants/Constants'
import TransHistoryItem from '../components/TransHistoryItem';
import { ScrollView } from 'react-native';

const TransactionsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{height: '38%',}}>
        <View style={{marginBottom: 30}}>
          <Text style={{color: COLORS.orderCardColor}}>Welcome to your payment account. View and withdraw your earnings</Text>
        </View>
        <View style={styles.orderdetailscard}>
          <Text style={{color: COLORS.orderDetailsCard}}>Kaana Wallet Balance</Text>
          <Text style={{color: COLORS.orderDetailsCard, fontSize: 19, fontWeight: '500', marginTop: -20}}>GHS 0.00</Text>
          <View style={styles.widthraw}>
            <FontAwesome style={{marginRight: 5}} name="money" size={24} color="white" />
            <Text style={{color: COLORS.orderDetailsCard, fontSize: 17, letterSpacing: 1}}>Withdraw</Text>
          </View>
        </View>
      </View>

      <>
        {/* <View style={styles.transactionArea}>
          <View style={{justifyContent: 'center', alignItems: 'center', marginTop: -100}}>
            <Image source={require('../../assets/images/arrow.png')}/>
            <Text style={{color: COLORS.orderCardColor, fontSize: 17, marginTop: 20}}>No transaction to display</Text>
          </View>
        </View> */}

        <View style={styles.transactionAreaTwo}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>Recent transactions</Text>
          <ScrollView style={styles.transactionHistory} showsVerticalScrollIndicator={false}>
            <TransHistoryItem />
            <TransHistoryItem deposit={true} />
            <TransHistoryItem deposit={true} />
            <TransHistoryItem deposit={false} />
            <TransHistoryItem deposit={false} />
            <TransHistoryItem deposit={true} />
            <TransHistoryItem deposit={true} />
            <TransHistoryItem deposit={true} />
          </ScrollView>
        </View>
      </>
      
    </View>
  )
}

export default TransactionsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },

  orderdetailscard: {
    height: 180,
    width: '100%',
    backgroundColor: '#132F3F',
    marginBottom: 20,
    borderRadius: 10,
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 35
  },
  widthraw: {
    backgroundColor: '#4A5D68',
    height: 35,
    width: 150,
    borderRadius: 5,
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    alignItems: 'center',
    flexDirection: 'row',
    // position: 'relative',
  },
  transactionArea: {
    // borderWidth: 1,
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  transactionAreaTwo: {
    height: '60%',
  },
  transactionHistory: {
    height: '100%',
    // borderWidth: 1,
    marginTop: 10
  },
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