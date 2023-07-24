import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import DashboadScreen from "./DashboardScreen";
import LoginForm from "../components/LoginForm";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.mainView}>
      <LinearGradient
        colors={["#9F9F9F", "#4E4E4E", "#000000"]}
        style={styles.topView}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 35,
            fontWeight: "bold",
            position: "relative",
            top: 200,
            left: 40,
            marginVertical: 20,
          }}
        >
          Welcome back
          {"\n"}
          <Text style={{ fontSize: 10 }}>
            Please enter your details carefully to continue
          </Text>
        </Text>

        {/* mountain top university image */}
        <Image
          source={require("../.././assets/mtu.png")}
          style={{
            height: "15%",
            width: "20%",
            position: "relative",
            top: 100,
            left: -20,
          }}
        />
      </LinearGradient>
      {/* Components of the Bottom View where it will contain  */}
      <LoginForm />

      {/* First Timer button */}
      <TouchableOpacity
        style={{
          backgroundColor: "black",
          borderRadius: 8,
          paddingVertical: 12,
          paddingHorizontal: 24,
          marginTop: 20,
          position: "absolute",
          top: 590,
          left: 135,
          alignItems: "center",
          width: "35%",
          borderWidth: 1,
        }}
        onPress={() => navigation.navigate("Signup")}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          First Timer
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  topView: {
    width: "100%",
    height: "70%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
