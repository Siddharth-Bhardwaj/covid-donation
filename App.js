import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Reset from "./components/Reset";
import Home from "./components/Home";
import PMCares from "./components/PMCares";
import Contact from "./components/Contact";
import Profile from "./components/Profile";

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Donate"
      activeColor="white"
      labelStyle={{ fontSize: 12 }}
      barStyle={{ backgroundColor: "#3267fa" }}
    >
      <Tab.Screen
        name="Donate"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="PMCares"
        component={PMCares}
        options={{
          tabBarLabel: "PM Cares",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="gift" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          tabBarLabel: "Contact Us",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="phone" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "", headerTransparent: "true" }}
        ></Stack.Screen>
        <Stack.Screen
          name="Sign Up"
          component={SignUp}
          options={{ title: "", headerTransparent: "true" }}
        ></Stack.Screen>
        <Stack.Screen
          name="Reset"
          component={Reset}
          options={{ title: "", headerTransparent: "true" }}
        ></Stack.Screen>
        <Stack.Screen
          name="Dashboard"
          component={MyTabs}
          options={{ title: "Home" }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
