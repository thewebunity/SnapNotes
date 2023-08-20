import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Notes from './Notes';
import PYQ from './PYQ';
import Syllabus from './Syllabus'
import { HomeIcon, DocumentIcon, NewspaperIcon,UserIcon  } from 'react-native-heroicons/outline';
import Profile from './Profile';

function Bottom() {
    
    const Tab = createBottomTabNavigator();


  return (
    <Tab.Navigator initialRouteName='Home'  screenOptions={{
      tabBarInactiveTintColor:"#000",
      headerStyle: {
        backgroundColor: '#7540EE',
      },
      headerTitleStyle: {
        color: "#fff",
        fontSize: 16,
      },
      tabBarActiveTintColor:"#7540EE",
    }}

    >
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: () => (
          <HomeIcon color={"#7540EE"} size={26} />
        )
      }} />
      <Tab.Screen name="Notes" component={Notes} options={{
        tabBarIcon: () => (
          <DocumentIcon color={"#7540EE"} size={26} />
        )
      }} />
      <Tab.Screen name="PYQ" component={PYQ} options={{
        tabBarIcon: () => (
          <NewspaperIcon color={"#7540EE"} size={26} />
        )
      }} />
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarIcon: () => (
          <UserIcon color={"#7540EE"} size={26} />
        )
      }} />
    </Tab.Navigator>
  );
}

export default Bottom;