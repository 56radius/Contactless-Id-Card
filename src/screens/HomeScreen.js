import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  ScrollView,
  SafeAreaView,
  Button,
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
      <View style={styles.bottomView}></View>
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
});
