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
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

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
      {/* Bottom View where it will contain  */}
      <View style={styles.bottomView}>
        {/* matriculation number */}
        <View style={{ marginTop: 82, position: "relative", left: 80 }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "bold",
              marginVertical: 8,
            }}
          >
            Matriculation Number
          </Text>

          {/* text input for matric no */}
          <View
            style={{
              width: "60%",
              height: 43,
              borderColor: "black",
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 22,
            }}
          >
            <TextInput
              style={{
                width: "100%",
              }}
            />
          </View>
        </View>

        {/* password */}
        <View style={{ marginTop: 12, position: "relative", left: 80 }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "bold",
              marginVertical: 8,
            }}
          >
            Password
          </Text>

          {/* text input for password */}
          <View
            style={{
              width: "60%",
              height: 43,
              borderColor: "black",
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 22,
            }}
          >
            <TextInput
              style={{
                width: "100%",
              }}
            />
          </View>
        </View>

        {/* login button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Dashboard")}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

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

  bottomView: {
    width: "100%",
    height: "70%",
    position: "relative",
    marginTop: -180,
    backgroundColor: "#fff",
    borderTopLeftRadius: 1000,
    borderTopRightRadius: 1000,
  },

  button: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginTop: 20,
    position: "absolute",
    top: 250,
    left: 135,
    alignItems: "center",
    width: "35%",
    borderWidth: 1,
  },

  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
});
