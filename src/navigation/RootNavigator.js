import React, {useState, useEffect} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screen imports
import HomeScreen from '../screens/HomeScreen';
import TransactionsScreen from '../screens/TransactionsScreen';
import BudgetScreen from '../screens/BudgetScreen';
import ReportsScreen from '../screens/ReportsScreen';

// Expo icons
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const Stack = createNativeStackNavigator();
const DashboardStack = createNativeStackNavigator();
const TransactionStack = createNativeStackNavigator();
const BudgetStack = createNativeStackNavigator();
const ReportsStack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();



const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen  name="HomeList" component={HomeTabs} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}

const DashboardStackNavigator = () => { 
    return(
      <DashboardStack.Navigator screenOptions={{headerStyle: {backgroundColor: '#2D325C', backgroundColor: '#23605b'}, headerTintColor: 'white'}}>
        <Stack.Screen  name="Overview" component={HomeScreen}  options={{headerShown: true}}/>
      </DashboardStack.Navigator>
    )
   }

const TransactionStackNavigator = () => { 
    return(
      <TransactionStack.Navigator>
        <Stack.Screen  name="Transaction" component={TransactionsScreen} options={{headerShown: true}}/>
      </TransactionStack.Navigator>
    )
   }

const BudgetStackNavigator = () => { 
    return(
      <BudgetStack.Navigator>
        <Stack.Screen  name="Budgets" component={BudgetScreen} options={{headerShown: true}}/>
      </BudgetStack.Navigator>
    )
   }

const ReportsStackNavigator = () => { 
    return(
      <ReportsStack.Navigator>
        <Stack.Screen  name="Report" component={ReportsScreen} options={{headerShown: true}}/>
      </ReportsStack.Navigator>
    )
   }



const HomeTabs = ({focused}) => { 
    return (
    <Tab.Navigator  screenOptions ={{ "tabBarStyle": {backgroundColor: '#F9FBFC', color: '#737882', borderTopWidth: 0, position: 'absolute', bottom: 10, left: 10, right: 10, borderRadius: 20, padding: 10, height: 68, paddingBottom: 10}, }}>
      <Tab.Screen
        name="Dashboard" 
        component={DashboardStackNavigator} 
        options={{headerShown: false, tabBarIcon: ({focused}) => ( <Entypo name="home" size={24} color={focused ? '#4a6b60' : '#737882'} />)}}
        />
      <Tab.Screen 
        name="Transactions" 
        component={TransactionStackNavigator} 
        options={{headerShown: false,  tabBarIcon: ({focused}) => ( <FontAwesome name="money" size={24} color={focused ? '#4a6b60' : '#737882'} />)}}
        />
      <Tab.Screen 
        name="Budget" 
        component={BudgetStackNavigator} 
        options={{headerShown: false, tabBarIcon: ({focused}) => ( <Ionicons name="list-outline" size={24} color={focused ? '#4a6b60' : '#737882'} />)}}
        />
      <Tab.Screen 
        name="Reports" 
        component={ReportsStackNavigator} 
        options={{headerShown: false, tabBarIcon: ({focused}) => ( <AntDesign name="filetext1" size={24} color={focused ? '#4a6b60' : '#737882'} />)}}
        />
    </Tab.Navigator>
    )
 }

export default RootNavigator