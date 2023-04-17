import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import FinHabitComp from './FinHabitComp'
import AddHabit from './AddHabit'


const FinancialHabit = () => {
  const customStyle = require('../components/styles')
  return (
    <View style={[styles.container, customStyle.foreColor]}>
        <View style={styles.head}>
            <Text style={[customStyle.commonTextColor, {fontWeight: '600', fontSize: 16}]}>Improving Financial Habits</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap'}}>
            <FinHabitComp percentage={70}/>
            <FinHabitComp percentage={50}/>
            <FinHabitComp percentage={30}/>
            {/* <FinHabitComp /> */}
            <AddHabit />
        </View>
    </View>
  )
}

export default FinancialHabit

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
        paddingBottom: 20

      },

      head: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15
      }
})