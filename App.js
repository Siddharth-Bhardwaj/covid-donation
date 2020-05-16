import React from 'react';
import { StyleSheet, Text, View , Button ,AsyncStorage} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './components/Login'
import { exp } from 'react-native-reanimated';
import axios from 'axios'


function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="About" onPress={()=>{
        navigation.navigate('About')
      }}></Button>
    </View>
  );
}

function About({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>About</Text>
      <Button title="Home" onPress={()=>{
        navigation.navigate('Home')
      }}></Button>
    </View>
  )
}


const Stack = createStackNavigator();



function App () { 
  
//var token = await AsyncStorage.getItem('UserToken');
  var isSignediN = false
  if(isSignediN==true)
  {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
          <Stack.Screen name="About" component={About}></Stack.Screen>
      </Stack.Navigator>
      </NavigationContainer>
  );
  }
  else
  {
    return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Home" component={Login}></Stack.Screen>
      </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;

