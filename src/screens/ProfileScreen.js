import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Name */}
      <View style={{ marginLeft: -245, marginTop: 100 }}>
        <Text
          style={{
            fontSize: 12,
            fontWeight: "bold",
            marginVertical: 3,
          }}
        >
          Name
        </Text>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#616161", fontSize: 20 }}>David I. Ufot</Text>
        </View>
      </View>

      {/* Department */}
      <View style={{ marginLeft: -60, marginTop: 14 }}>
        <Text
          style={{
            fontSize: 12,
            fontWeight: "bold",
            marginVertical: 5,
          }}
        >
          Department
        </Text>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#616161", fontSize: 18 }}>
            Computer Science and mathematics
          </Text>
        </View>
      </View>

      {/* Programme */}
      <View style={{ marginLeft: -160, marginTop: 14 }}>
        <Text
          style={{
            fontSize: 12,
            fontWeight: "bold",
            marginVertical: 8,
          }}
        >
          Programme
        </Text>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#616161", fontSize: 17 }}>
            (Bsc.) Computer Science
          </Text>
        </View>
      </View>

      {/* Level */}
      <View style={{ marginLeft: -320, marginTop: 14 }}>
        <Text
          style={{
            fontSize: 12,
            fontWeight: "bold",
            marginVertical: 5,
          }}
        >
          Level
        </Text>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#616161", fontSize: 17 }}>300</Text>
        </View>
      </View>

      {/* Blood Type */}
      <View style={{ marginLeft: -285, marginTop: 14 }}>
        <Text
          style={{
            fontSize: 12,
            fontWeight: "bold",
            marginVertical: 8,
          }}
        >
          Blood Type
        </Text>
        <View
          style={{
            width: "60%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#616161", fontSize: 18 }}> O+</Text>
        </View>
      </View>

      {/* Blood Genotype */}
      <View style={{ marginLeft: -253, marginTop: 14 }}>
        <Text
          style={{
            fontSize: 12,
            fontWeight: "bold",
            marginVertical: 8,
          }}
        >
          Blood Genotype
        </Text>
        <View
          style={{
            width: "60%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#616161" }}>AA</Text>
        </View>
      </View>

      {/* Hall of Residence */}
      <View style={{ marginLeft: -253, marginTop: 14 }}>
        <Text
          style={{
            fontSize: 12,
            fontWeight: "bold",
            marginVertical: 8,
          }}
        >
          Hall of Residence
        </Text>
        <View
          style={{
            width: "60%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#616161" }}>New Daniel Hall</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    justifyContent: "center",
    alignItems: "center",
  },
});
