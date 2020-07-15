import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({ title, onPress = () => {} }) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#1a15ff",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    width: "46%",
    marginTop: 20,
  },
  title: {
    color: "#7aefa7",
    fontSize: 20,
    textAlign: "center",
  },
});

export default Button;
