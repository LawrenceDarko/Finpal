import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ProgressBar, MD3Colors } from 'react-native-paper';


const EarnedAndSpent = () => {
  const customStyle = require('../components/styles')

  return (
    <View style={[styles.container, customStyle.foreColor]}>
        <View style={styles.head}>
            <Text style={[customStyle.commonTextColor, {fontSize: 18, fontWeight: 'bold'}]}>My Cashflow for June</Text>
        </View>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'flex-end'}}>
            <View style={{marginRight: 5, width: '65%'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={[styles.titles, customStyle.commonTextColor]}>EARNED</Text>
                    <View style={styles.amount}>
                        <Text style={styles.amountText}>$3,000 of $6,000</Text>
                    </View>
                </View>
                <ProgressBar style={{backgroundColor: '#F5F5F5', marginBottom: 17, borderRadius: 4}} progress={0.5} color='#53D4C9' />

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={[styles.titles, customStyle.commonTextColor]}>SPENT</Text>
                    <View style={styles.amount}>
                        <Text style={[styles.amountText, {color: '#3D6DEE'}]}>$2,106</Text>
                    </View>
                </View>
                <ProgressBar style={{backgroundColor: '#F5F5F5', borderRadius: 4}} progress={0.7} color='#3D6DEE' />
            </View>
            <View style={{display: 'flex', justifyContent: 'center'}}>
                <Text style={{color: '#000', fontWeight: 'bold', fontSize: 27}}>$24,578</Text>
                <Text style={styles.titles}>REMAINING</Text>
            </View>
        </View>
    </View>
  )
}

export default EarnedAndSpent

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
        backgroundColor: '#336FA5',
        marginVertical: 6,
        paddingBottom: 35

      },

      head: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30
      },

      titles: {
        // color: '#D4D4D4',
        fontWeight: 'bold',
        fontSize: 12,
        marginBottom: 4,
        opacity: 0.8,
        marginRight: 15
      },

      amount: {
        marginBottom: 5, 
        height: 19, 
        padding: 2, 
        paddingHorizontal: 5,
        backgroundColor: '#20254B', 
        opacity: 0.7, 
        borderRadius: 5
      },

      amountText: {
        color: '#53D4C9', 
        fontSize: 12, 
        fontWeight: 'bold'
      }
})