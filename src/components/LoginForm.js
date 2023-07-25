import react from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import DashboadScreen from "../screens/DashboardScreen";

export default function LoginForm({ navigation }) {
  return (
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
  );
}

const styles = StyleSheet.create({
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
