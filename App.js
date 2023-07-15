import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/loginScreen";
import SignupScreen from "./src/screens/SignupScreen";

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

        {/* Login */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "Login" }}
        />

        {/* Sign up */}
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{ title: "Sign up" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
