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
  Foundation,
} from "@expo/vector-icons";
import {
  Image,
  Settings,
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
} from "react-native";
import ProfileScreen from "./ProfileScreen";
import TransactionPin from "../components/TransactionPin";
import { LinearGradient } from "expo-linear-gradient";
import { useRoute } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

/* Home Screen */
function HomeScreen({ navigation }) {
  const route = useRoute();
  const { remainingBalance } = route.params || { remainingBalance: 20400 }; // Replace 30400 with your actual initial balance
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

        <View style={styles.Container}>
          {/* Background Image */}
          <Image
            source={require("../.././assets/backgroundcard.png")}
            style={styles.cardImage}
            resizeMode="cover"
          />

          {/* Remaining Balance */}
          <View style={styles.balanceContainer}>
            <Text style={styles.balanceText}>Remaining Balance</Text>
            <Text style={styles.balanceAmount}>#{remainingBalance}</Text>
          </View>

          {/* Card Holder */}
          <Text style={styles.cardHolder}>David Ufot</Text>
          <Text
            style={{
              fontSize: 12,
              color: "black",
              position: "absolute",
              top: 120,
              left: 30,
            }}
          >
            Student, Computer Science
          </Text>
        </View>

        {/* Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("AddCash")}
        >
          <Text style={styles.buttonText}> Add Cash </Text>
        </TouchableOpacity>

        {/* Manage Card */}
        <TouchableOpacity
          style={{
            backgroundColor: "#D9D9D9",
            borderRadius: 15,
            paddingVertical: 12,
            paddingHorizontal: 24,
            position: "absolute",
            top: 270,
            left: 190,
            alignItems: "center",
          }}
          onPress={() => navigation.navigate("")}
        >
          <Text style={{ color: "black", fontSize: 12, fontWeight: "bold" }}>
            Manage Card
          </Text>
        </TouchableOpacity>
      </LinearGradient>

      {/* Recent transactions */}
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
          Recent Transactions
        </Text>

        {/* Creating the stylng of the transactions */}
        <View style={styles.thirdContainer}>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              position: "relative",
              left: -40,
            }}
          >
            <View
              style={{
                height: 29,
                borderRadius: 15,
                width: "15%",
                left: 20,
                alignItems: "center",
                backgroundColor: "#464646",
              }}
            >
              <Foundation name="dollar" size={30} color="#fff" />
            </View>

            <Text style={{ top: 5 }}> You funded Your Card </Text>
          </View>

          <Text style={{ fontSize: 13, top: 5, left: -24 }}> 10:15am </Text>

          <Text style={{ color: "green", top: 5 }}> +#3000</Text>
        </View>
      </LinearGradient>
    </ScrollView>
  );
}

/* Search Screen */
function TransactionScreen() {
  return <TransactionPin />;
}

/* Card Screen */
function CardsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to Card screen</Text>
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
        name="Cards"
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
  Container: {
    width: 300,
    height: 180,
    padding: 20,
    borderRadius: 12,
    justifyContent: "flex-end",
    marginTop: 15,
  },

  balanceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  balanceText: {
    fontSize: 12,
    color: "black",
    position: "absolute",
    left: 155,
    top: -140,
    bottom: 0,
  },
  balanceAmount: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    position: "absolute",
    left: 180,
    top: -125,
  },
  cardHolder: {
    fontSize: 16,
    color: "black",
    position: "absolute",
    top: 100,
    left: 30,
  },

  cardImage: {
    borderWidth: 0.5,
    borderColor: "#A8A8A8",
    borderRadius: 10,
    backgroundColor: "#fff",
  },

  button: {
    backgroundColor: "#D9D9D9",
    borderRadius: 15,
    paddingVertical: 12,
    paddingHorizontal: 24,
    position: "absolute",
    top: 270,
    left: 55,
    alignItems: "center",
  },

  buttonText: {
    color: "black",
    fontSize: 12,
    fontWeight: "bold",
  },

  thirdContainer: {
    flex: 0.7,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
