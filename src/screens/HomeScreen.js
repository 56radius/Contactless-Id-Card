import React, { useLayoutEffect, useState } from "react";
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

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.mainView}>
      <View style={styles.topView}>
        <Text
          style={{
            color: "#fff",
            fontSize: 20,
            fontFamily: "SF Pro Display",
            fontWeight: "bold",
            marginTop: 150,
            marginVertical: 20,
          }}
        >
          Welcome back
        </Text>
        {/* mountain top university image */}
        <Image
          source={require("../.././assets/mtu.png")}
          style={{
            height: "20%",
            width: "30%",
            position: "relative",
            top: 130,
          }}
        />
      </View>

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
    backgroundColor: "blue",
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
