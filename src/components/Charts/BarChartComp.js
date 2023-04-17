import { View, Text } from 'react-native'
import React from 'react'
import { BarChart } from "react-native-gifted-charts";

const BarChartComp = () => {

  const barData = [
    {value: 230,label: 'Jan',frontColor: '#4ABFF4'},
    {value: 180,label: 'Feb',frontColor: '#79C3DB'},
    {value: 195,label: 'Mar',frontColor: '#28B2B3'},
    {value: 250,label: 'Apr',frontColor: '#4ADDBA'},
    {value: 320,label: 'May',frontColor: '#91E3E3'},
    {value: 230,label: 'Jun',frontColor: '#4ABFF4'},
    {value: 180,label: 'Jul',frontColor: '#79C3DB'},
    {value: 195,label: 'Aug',frontColor: '#28B2B3'},
    {value: 250,label: 'Sep',frontColor: '#4ADDBA'},
    {value: 320,label: 'Oct',frontColor: '#91E3E3'},
    {value: 250,label: 'Nov',frontColor: '#4ADDBA'},
    {value: 320,label: 'Dec',frontColor: '#91E3E3'},
    ];

    // const maxLength = 
    let maxBarValue = 0
    for(let i = 0; i < barData.length; i++){
      if (barData[i].value > maxBarValue){
          maxBarValue = barData[i].value
      }
    }

    // Round up to the next multiple of 10 if the maximum value is less than 100
    if (maxBarValue < 100) {
      maxBarValue = Math.ceil(maxBarValue / 10) * 10;
    } else {
      // Round up to the next multiple of 100 if the maximum value is 100 or greater
      maxBarValue = Math.ceil(maxBarValue / 100) * 100;
    }
    

  return (
    <View style={{flex: 1, paddingBottom: 15}}>
        <BarChart
          showFractionalValue
          showYAxisIndices
          noOfSections={4}
          maxValue={maxBarValue}
          data={barData}
          isAnimated
          />
    </View>
  )
}

export default BarChartComp