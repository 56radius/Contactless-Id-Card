import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function TransactionPin() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 20,
        }}
      >
        Please Enter a transaction Pin
      </Text>

      {/* Pin code for the transaction pin */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
  },
});
