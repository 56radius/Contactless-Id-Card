import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  AntDesign,
  Zocial,
  Ionicons,
  Feather,
  FontAwesome5,
  Fontisto,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import {
  Image,
  Settings,
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import ProfileScreen from "./ProfileScreen";
import { LinearGradient } from "expo-linear-gradient";

const Tab = createBottomTabNavigator();

/* Home Screen */
function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          flex: 0.2,
          margin: 20,
          paddingTop: 30,
        }}
      >
        <View style={{}}>
          <Text style={{ fontSize: 27 }}> Hello, David </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Ionicons
            style={{ position: "relative", left: -15 }}
            name="notifications"
            size={37}
            color="black"
          />
          <FontAwesome5
            name="user-circle"
            size={37}
            color="black"
            onPress={() => navigation.navigate("Profile")}
          />
        </View>
      </View>

      {/* Linear Gradient for the background for the cash and the add cash */}
      <LinearGradient
        colors={["#D9D9D9", "#999999"]}
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: "90%",
          height: 350,
          margin: 22,
          borderRadius: 20,
        }}
      >
        <Text
          style={{
            position: "absolute",
            top: 20,
            left: 10,
            bottom: 0,
            right: 0,
            fontSize: 20,
          }}
        >
          Your Card
        </Text>

        <View style={styles.container}>
          {/* Remaining Balance */}
          <View style={styles.balanceContainer}>
            <Text style={styles.balanceText}>Remaining Balance</Text>
            <Text style={styles.balanceAmount}>#30,400</Text>
          </View>

          {/* Card Holder */}
          <Text style={styles.cardHolder}>David Ufot</Text>
          <Text style={{ fontSize: 12, color: "#fff" }}>
            Student, Computer Science
          </Text>
        </View>
      </LinearGradient>
    </ScrollView>
  );
}

/* Search Screen */
function TransactionScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to Transaction screen</Text>
    </View>
  );
}

/* Post Screen */
function CardsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to Post screen</Text>
    </View>
  );
}

/* Profile Screen */
function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text> Hello Welcome To Setting screen </Text>
    </View>
  );
}

function Dashboard() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Ionicons name="ios-home-outline" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Transaction"
        component={TransactionScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Fontisto name="arrow-swap" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Post"
        component={CardsScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="credit-card-multiple-outline"
              size={24}
              color="black"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: () => <Feather name="settings" size={24} color="black" />,
        }}
      />
    </Tab.Navigator>
  );
}

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 180,
    padding: 20,
    borderRadius: 12,
    backgroundColor: "#4E4E4E",
    justifyContent: "flex-end",
    marginTop: -60,
  },

  balanceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  balanceText: {
    fontSize: 12,
    color: "#FFFFFF",
    position: "absolute",
    left: 155,
    top: -97,
    bottom: 0,
  },
  balanceAmount: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    position: "absolute",
    left: 180,
    top: -80,
  },
  cardHolder: {
    fontSize: 16,
    color: "white",
  },
});
