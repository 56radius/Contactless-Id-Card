import React from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  Touchable,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Background from "./Background";
import Btn from "./Btn";
import { darkGreen } from "./constants";
import Field from "./Field";

export default function LoginScreen({ navigation, props }) {
  return (
    <ScrollView>
      <Background>
        <View style={{ alignItems: "center", width: 420 }}>
          <Text
            style={{
              color: "white",
              fontSize: 64,
              fontWeight: "bold",
              marginVertical: 20,
            }}
          >
            Login
          </Text>
          <View
            style={{
              backgroundColor: "white",
              height: 600,
              width: 460,
              borderTopLeftRadius: 200,
              borderTopRightRadius: 200,
              paddingTop: 100,
              alignItems: "center",
            }}
          >
            <Text
              style={{ fontSize: 40, color: darkGreen, fontWeight: "bold" }}
            >
              Welcome Back
            </Text>
            <Text
              style={{
                color: "grey",
                fontSize: 19,
                fontWeight: "bold",
                marginBottom: 20,
              }}
            >
              Login to your account
            </Text>
            <Field
              placeholder="Email / Username"
              keyboardType={"email-address"}
            />
            <Field placeholder="Password" secureTextEntry={true} />
            <View
              style={{
                alignItems: "flex-end",
                width: "78%",
                paddingRight: 16,
                marginBottom: 200,
              }}
            >
              <Text
                style={{ color: darkGreen, fontWeight: "bold", fontSize: 16 }}
              >
                Forgot Password ?
              </Text>
            </View>
            <Btn
              textColor="white"
              bgColor={darkGreen}
              btnLabel="Login"
              Press={() => alert("Logged In")}
            />
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                Don't have an account ?{" "}
              </Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Signup")}
              >
                <Text
                  style={{ color: darkGreen, fontWeight: "bold", fontSize: 16 }}
                >
                  Signup
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Background>
    </ScrollView>
  );
}
