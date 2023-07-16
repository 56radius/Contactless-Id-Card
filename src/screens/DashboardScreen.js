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
import { Image, Settings, Text, View } from "react-native";
import ProfileScreen from "./ProfileScreen";

const Tab = createBottomTabNavigator();

/* Home Screen */
function HomeScreen() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flex: 0.2,
        margin: 30,
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
        <Ionicons name="notifications" size={37} color="black" />
        <FontAwesome5
          name="user-circle"
          size={37}
          color="black"
          onPress={() => navigation.navigate("Profile")}
        />
      </View>
    </View>
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
