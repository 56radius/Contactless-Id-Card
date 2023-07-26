import React from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
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

        {/* Registration Form */}
        {/* Full name input styling */}
        <View
          style={{
            flex: 0.9,
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "bold",
              marginVertical: 8,
              color: "#fff",
              left: -119,
            }}
          >
            Name
          </Text>

          {/* text input for full name*/}
          <View
            style={{
              width: "87%",
              height: 43,
              borderColor: "#fff",
              backgroundColor: "#fff",
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

        {/* Matriculation number */}
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            top: -30,
            marginVertical: 5,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "bold",
              marginVertical: 8,
              color: "#fff",
              left: -70,
            }}
          >
            Matriculation Number
          </Text>

          {/* text input for Matriculation number*/}
          <View
            style={{
              width: "87%",
              height: 43,
              borderColor: "#fff",
              backgroundColor: "#fff",
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

        {/* Department */}
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            top: -30,
            marginVertical: 0,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "bold",
              marginVertical: 8,
              color: "#fff",
              left: -100,
            }}
          >
            Department
          </Text>

          {/* text input for Department*/}
          <View
            style={{
              width: "87%",
              height: 43,
              borderColor: "#fff",
              backgroundColor: "#fff",
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

        {/* Level */}
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            top: -30,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "bold",
              marginVertical: 8,
              color: "#fff",
              left: -120,
            }}
          >
            Level
          </Text>

          {/* text input for Department*/}
          <View
            style={{
              width: "87%",
              height: 43,
              borderColor: "#fff",
              backgroundColor: "#fff",
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

        {/* Password */}
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            top: -30,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "bold",
              marginVertical: 8,
              color: "#fff",
              left: -110,
            }}
          >
            password
          </Text>

          {/* text input for Department*/}
          <View
            style={{
              width: "87%",
              height: 43,
              borderColor: "#fff",
              backgroundColor: "#fff",
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

        {/* Sign up Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Dashboard")}
        >
          <Text style={styles.buttonText}> Register </Text>
        </TouchableOpacity>
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

  button: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignSelf: "center",
    justifyContent: "center",
    position: "absolute",
    alignItems: "center",
    width: "35%",
    borderWidth: 1,
    top: 485,
  },

  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
});
