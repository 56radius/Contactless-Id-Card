// AddCashScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import axios from "axios";

const AddCashScreen = ({ navigation }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCVV] = useState("");
  const [amount, setAmount] = useState("");

  const handleAddCash = async () => {
    try {
      const apiKey = "FLWPUBK_TEST-f3149d7023356472d84285b779ea4bcd-X"; // Replace with your actual API key
      const baseUrl = "https://fsi.ng/api/v1/flutterwave/v3/transfers";
      const headers = {
        "Content-Type": "application/json",
        Authorization: apiKey,
      };

      const data = {
        account_bank: "044",
        account_number: "0690000040",
        amount: parseInt(amount), // Parse the amount to an integer
        narration: "Akhlm Pstmn Trnsfr xx007",
        currency: "NGN",
        reference: "akhlm-pstmnpyt-rfxx007_PMCKDU_1",
        callback_url:
          "https://webhook.site/b3e505b0-fe02-430e-a538-22bbbce8ce0d",
        debit_currency: "NGN",
      };

      const response = await axios.post(baseUrl, data, { headers });

      // Handle the API response
      if (response.data.status === "success") {
        // Transaction successful, handle navigation or other logic here
        console.log("Transaction successful:", response.data);
        alert("Transaction successful!");
      } else {
        // Transaction failed, handle error here
        console.log("Transaction failed:", response.data);
        alert("Transaction failed. Please try again later.");
      }
    } catch (error) {
      // Handle API call error
      console.log("API call error:", error.response);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <View style={styles.container}>
      {/* Card Number */}
      <TextInput
        style={styles.input}
        placeholder="Card Number"
        value={cardNumber}
        onChangeText={setCardNumber}
        keyboardType="numeric"
        maxLength={16}
      />

      {/* Expiration Date */}
      <TextInput
        style={styles.input}
        placeholder="Expiration Date (MM/YY)"
        value={expirationDate}
        onChangeText={setExpirationDate}
        keyboardType="numeric"
        maxLength={5}
      />

      {/* CVV */}
      <TextInput
        style={styles.input}
        placeholder="CVV"
        value={cvv}
        onChangeText={setCVV}
        keyboardType="numeric"
        maxLength={3}
      />

      {/* Amount */}
      <TextInput
        style={styles.input}
        placeholder="Amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />

      {/* Add Cash Button */}
      <TouchableOpacity style={styles.addButton} onPress={handleAddCash}>
        <Text style={styles.buttonText}>Add Cash</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  input: {
    width: "100%",
    height: 40,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: "#D9D9D9",
    borderRadius: 15,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default AddCashScreen;
