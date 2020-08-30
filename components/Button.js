import React from "react";
import { TouchableHighlight, Text, StyleSheet } from "react-native";

const Button = ({ title, onPress = () => {}, style = styles.button }) => (
  <TouchableHighlight onPress={onPress} style={style}>
    <Text style={styles.title}>{title}</Text>
  </TouchableHighlight>
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
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
});

export default Button;
