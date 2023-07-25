import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import DashboardScreen from "./src/screens/DashboardScreen";
import SignupScreen from "./src/screens/SignupScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import AddCashScreen from "./src/screens/AddCashScreen";

const Stack = createNativeStackNavigator();

export default function App(navigation) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* stack Home Screen */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            title: "HOME/LOGIN",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />

        {/* Dashboard */}
        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{ title: "Dashboard", headerShown: false }}
        />

        {/* Sign up */}
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{ title: "Sign up", headerShown: false }}
        />

        {/* Profile */}
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: "Your Information",
            headerTransparent: true,
            headerBackTitle: null,
          }}
        />

        {/* Add Cash Screen */}
        <Stack.Screen
          name="AddCash"
          component={AddCashScreen}
          options={{
            title: "Add Cash",
            headerTransparent: true,
            headerBackTitle: null,
          }}
        />

        {/* Manage Card Screen */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
