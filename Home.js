import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Button from "./components/Button";
const { width, height } = Dimensions.get("window");
const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title="Start" />
      <Button
        title="High Scores"
        onPress={() => {
          navigation.navigate("HighScores");
        }}
      />
      <Button
        title="About"
        onPress={() => {
          navigation.navigate("About");
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    height: height * 0.5,
    marginTop: height * 0.2,
  },
});
