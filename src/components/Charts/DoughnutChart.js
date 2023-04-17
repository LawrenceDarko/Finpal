import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { PieChart } from "react-native-gifted-charts";
import {COLORS} from '../../constants/Constants'


const renderDot = color => {
  return (
    <View
      style={{
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: color,
        marginRight: 10,
      }}
    />
  );
};

const renderLegendComponent = () => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: 150,
            marginRight: 20,
          }}>
          {renderDot('#006DFF')}
          <View style={{flexDirection: 'column'}}>
            <Text style={{color: COLORS.dark}}>Need: 47%</Text>
            {/* <Text>$1,500/$2,000</Text> */}
          </View>
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', width: 120}}>
          {renderDot('#8F80F3')}
          <View style={{flexDirection: 'column'}}>
            <Text style={{color: COLORS.dark}}>Wants: 15%</Text>
            {/* <Text>$900/$1,000</Text> */}
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: 150,
            marginRight: 20,
          }}>
          {renderDot('#3BE9DE')}
          <View style={{flexDirection: 'column'}}>
            <Text style={{color: COLORS.dark}}>Saved: 40%</Text>
            {/* <Text>$1,500/$2,000</Text> */}
          </View>
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', width: 120}}>
          {renderDot('#FF7F97')}
          <View style={{flexDirection: 'column'}}>
            <Text style={{color: COLORS.dark}}>Poor: 3%</Text>
            {/* <Text>$1,500/$2,000</Text> */}
          </View>
        </View>
      </View>
    </>
  );
};

const DoughnutChart = () => {
    const pieData = [
    {value: 47, color: '#009FFF', gradientCenterColor: '#006DFF', focused: true},
    {value: 40, color: '#93FCF8', gradientCenterColor: '#3BE9DE'},
    {value: 16, color: '#BDB2FA', gradientCenterColor: '#8F80F3'},
    {value: 3, color: '#FFA5BA', gradientCenterColor: '#FF7F97'},
  ];


return (
  <View
    style={{
      // paddingVertical: 100,
      // backgroundColor: '#34448B',
      flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
    }}>
    <View
      style={{
        // margin: 20,
        padding: 10,
        borderRadius: 20,
        // backgroundColor: '#232B5D',
        backgroundColor: COLORS.foreColor
      }}>
      <Text style={{color: COLORS.common, fontSize: 16, fontWeight: 'bold'}}>
        {/* My Spending for June */}
      </Text>
      <View style={{padding: 5, alignItems: 'center'}}>
        <PieChart
          data={pieData}
          donut
          showGradient
          sectionAutoFocus
          radius={100}
          innerRadius={70}
          isAnimated
          // innerCircleColor={'#232B5D'}
          innerCircleColor={COLORS.foreColor}
          centerLabelComponent={() => {
            return (
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 14, color: COLORS.common}}>Budget Spent</Text>
                <Text
                  style={{fontSize: 37, color: COLORS.dark, fontWeight: 'bold'}}>
                  $4,200
                </Text>
                <Text style={{fontSize: 14, color: COLORS.common}}>of $5,400</Text>
              </View>
            );
          }}
        />
      </View>
      {renderLegendComponent()}
    </View>
  </View>);
}

export default DoughnutChart