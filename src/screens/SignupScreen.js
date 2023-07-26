import React from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function SignupScreen({ navigation }) {
  return (
    <LinearGradient
      style={styles.container}
      colors={["#9F9F9F", "#4E4E4E", "#000000"]}
    >
      <View style={{ flex: 0.7 }}>
        <Image
          style={{
            opacity: 0.5,
            width: 148,
            height: 148,
            position: "absolute",
            top: -39,
            alignSelf: "center",
          }}
          source={require("../.././assets/mtu.png")}
        />
        <Text style={{ color: "#fff", fontSize: 35 }}>
          This is Contactless ID
        </Text>
        <Text style={{ color: "#fff", fontSize: 12, fontWeight: "bold" }}>
          Welcome to our software, new user
        </Text>
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
