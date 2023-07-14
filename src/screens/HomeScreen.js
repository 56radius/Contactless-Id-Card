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

import {
  MaterialCommunityIcons,
  AntDesign,
  Ionicons,
  FontAwesome5,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <LinearGradient style={{}} colors={["#9F9F9F", "#4E4E4E", "#000000"]}>
        <View style={styles.TopView}></View>
      </LinearGradient>
      <View style={styles.BottomView}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    marginTop: 40,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  TopView: {
    width: "100%",
    height: "40%",
  },

  BottomView: {
    width: "100%",
    height: "75%",
  },
});
