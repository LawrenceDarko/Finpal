import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import DoughnutChart from '../components/Charts/DoughnutChart'
import UpcomingBills from '../components/UpcomingBills'
import EarnedAndSpent from '../components/EarnedAndSpent'
import FinancialHabit from '../components/FinancialHabit'
import PayLoans from '../components/PayLoans'
import Investment from '../components/Investment'
import TransactionsHome from '../components/TransactionsHome'
import ExpensesByMonth from '../components/ExpensesByMonth'

const HomeScreen = () => {
  const customStyle = require('../components/styles')

  return (
    <ScrollView style={[styles.container, customStyle.bgColor]} showsVerticalScrollIndicator={false}>
      <View style={{margin: 15, display: 'flex', flex: 1}}>
        <View style={[styles.spending, customStyle.foreColor]}>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={[customStyle.commonTextColor, {fontWeight: 'bold', fontSize: 18}]}>My Spending for June</Text>
            <Text style={[customStyle.commonTextColor, {fontSize: 13, opacity: 0.6}]}>Welcome your budget is on track</Text>
          </View>
          
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <DoughnutChart />
            </View>
            <View></View>
          </View>
        </View>
        <UpcomingBills />
        <ExpensesByMonth />
        <EarnedAndSpent />
        <FinancialHabit />
        <Investment />
        <PayLoans />
        <TransactionsHome />
      </View>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#1C1F3C',
    // backgroundColor: '#23879F'
    marginBottom: 60
  },

  spending: {
    // borderWidth: 1,
    padding: 10,
    width: '100%',
    // borderColor: 'black',
    borderRadius: 10,
    // backgroundColor: '#2D325C',
    backgroundColor: '#336FA5',
    marginVertical: 6
  }
});