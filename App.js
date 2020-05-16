import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';


function Donate() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Donate</Text>
    </View>
  );
}

function PMCares() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>PM Cares</Text>
    </View>
  );
}

function Contact() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>LandLine and other contact details</Text>
    </View>
  );
}


const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Donate"
      activeColor="white"
      labelStyle={{ fontSize: 12 }}
      barStyle={{backgroundColor:'black'}}
    >
      <Tab.Screen
        
        name="Donate"
        component={Donate}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="PMCares"
        component={PMCares}
        options={{
          tabBarLabel: 'PM Cares',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="gift" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          tabBarLabel: 'Contact Us',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}



export default function App() {
  return (
    
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
    
  );
}
