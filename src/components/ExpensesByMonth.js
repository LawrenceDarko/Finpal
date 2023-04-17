import { View, Text, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import { COLORS, SIZES } from '../constants/Constants'
import BarChartComp from './Charts/BarChartComp'
import { FontAwesome } from '@expo/vector-icons';
import {Calendar, LocaleConfig} from 'react-native-calendars';

const ExpensesByMonth = () => {

  const [compView, setCompView] = useState(true)


  const toggleView = () => {
    setCompView(!compView);
  }

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <View></View>
        <Text style={{ fontWeight: 'bold', fontSize: SIZES.semiLarge, color: COLORS.common }}>Expenses by Month</Text>
        <FontAwesome onPress={toggleView} name={compView ? "calendar" : "bar-chart"} size={20} color={COLORS.dark} />
      </View>
      <View style={{ flex: 1, overflow: 'hidden' }}>
        {compView ? <BarChartComp /> : <CalendarView />}
      </View>
    </View>
  )
}

const CalendarView = () => {
  const [selected, setSelected] = useState('');

  // useEffect(() => {
  //   console.warn(selected)
  // }, [selected])
  

  return (
    <View style>
        <Calendar
          onDayPress={day => {
            setSelected(day.dateString);
          }}
          markedDates={{
            [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
          }}
        />
    </View>
  )
}

export default ExpensesByMonth

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    padding: 10,
    width: '100%',
    borderRadius: 10,
    backgroundColor: COLORS.foreColor,
    marginVertical: 6,
    paddingBottom: 20
  },

  head: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    flexDirection: 'row'
  }
})
