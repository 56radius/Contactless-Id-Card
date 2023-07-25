import React from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function SignupScreen({ navigation }) {
  return (
    <LinearGradient
      style={styles.container}
      colors={["#9F9F9F", "#4E4E4E", "#000000"]}
    >
      <View>
        <Text> hehe </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
