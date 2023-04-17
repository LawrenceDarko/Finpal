import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { PieChart } from "react-native-gifted-charts";


const FinHabitComp = ({percentage}) => {

  const customStyle = require('../components/styles')
  const pieData = [
    {value: percentage, color: '#177AD5'},
    {value: 100-percentage, color: 'lightgray'}
];

  return (
    <View style={styles.container}>
      <View style={{marginBottom: 15}}>
        <Text style={[customStyle.commonTextColor, {fontWeight: 'bold'}]}>LYFT savings</Text>
        <Text style={[customStyle.commonTextColor, {fontSize: 10, opacity: 0.7}]}>Waste Management</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <View style={{flex: 1}}>
          {/* <Image source={require('../../assets/images/pie.png')} style={styles.ImageContainer} /> */}
          <PieChart
                donut
                innerRadius={26}
                radius={30}
                data={pieData}
                centerLabelComponent={() => {
                return <Text style={{fontSize: 14}}>{percentage}%</Text>;
                }}
            />
        </View>
        <View>
          <Text style={{fontWeight: 'bold', color: '#E64D09', fontSize: 13}}>$60/$100</Text>
          <Text style={[customStyle.commonTextColor, {fontSize: 11}]}>12 days left</Text>
        </View>
      </View>
    </View>
  )
}

export default FinHabitComp

const styles = StyleSheet.create({
    container: {
        height: 140,
        width: '46%',
        borderRadius: 8,
        borderWidth: 1,
        // borderColor: '#caa994',
        borderColor: '#acece3',
        marginHorizontal: 5,
        marginVertical: 8,
        padding: 10
        // opacity: 0.3
    },

    ImageContainer: {
      display: 'flex',
      height: 60,
      width: 60,
      // justifyContent: 'flex-end',
      // borderWidth: 1,
      resizeMode: 'cover',
      // borderRadius: 20

  },
})