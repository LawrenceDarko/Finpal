import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


const Investment = () => {
    const customStyle = require('../components/styles')

  return (
    <View style={[styles.container, customStyle.foreColor]}>
      <View style={styles.headerContainer}>
        <Text style={[styles.header, customStyle.commonTextColor]}>Invest in My Future</Text>
        {/* <Text style={[styles.subHead]}>LOWER THAN AVERAGE FOR YOUR AGE</Text> */}
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
        <View style={{width: '20%'}}>
            <Text style={[{color: '#619D9B', fontSize: 25, fontWeight: 'bold', marginRight: 5, transform: [{scaleY: 1.2 }]}]}>$50</Text>
        </View>
        <View style={{width: '56%'}}>
            <Text style={[customStyle.commonTextColor, {lineHeight: 18, marginBottom: 3}]}>invested since your last login</Text>
        </View>
        <View style={{width: '20%', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 35}}>😎</Text>
        </View>
      </View>
    </View>
  )
}

export default Investment

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
    
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4
    },

    subHead: {
        fontSize: 11,
        fontWeight: '500',
        textTransform: 'uppercase',
        color: '#619D9B',
        marginBottom: 15
    },
    owing: {
        textTransform: 'uppercase',
        fontSize: 11,
        fontWeight: '500',
        color: 'red',
        marginLeft: 10
    }

})