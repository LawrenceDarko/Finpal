import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import BillListComp from './BillListComp'



const UpcomingBills = () => {

  const customStyle = require('../components/styles')

  return (
    <View style={[styles.container, customStyle.foreColor]}>
        <View style={styles.head}>
            <Text style={[customStyle.commonTextColor, {fontWeight: 'bold', fontSize: 18, marginBottom: 15}]}>Upcoming bills</Text>
            <Text style={[customStyle.commonTextColor, {fontSize: 13, opacity: 0.8}]}>Total bills due in the Next 30 days <Text style={{color: 'red'}}>$1,546.00</Text></Text>
        </View>
        <View>
            <BillListComp date={'JUN 1'} purpose={'Rent'} amount={'1,000.00'} status={'Mark paid'} bgColor={'#EB5597'}/>
            <BillListComp date={'JUN 15'} purpose={'LADWP'} amount={'34.00'} status={'Pay now'}/>
            <BillListComp date={'AUG 30'} purpose={'State farm'} amount={'108.00'} status={'Pay now'}/>

        </View>
    </View>
  )
}

export default UpcomingBills

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
        paddingBottom: 35

      },

      head: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15
      }
})