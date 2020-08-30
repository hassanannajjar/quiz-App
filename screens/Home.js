import React from "react";
import { StyleSheet, Image, View, Dimensions } from "react-native";
import Button from "../components/Button";
const { width, height } = Dimensions.get("window");
const Home = ({ navigation }) => {
  return (
    <View style={styles.parent}>
      <View style={styles.container}>
        <Button
          title="Start"
          onPress={() => {
            navigation.navigate("Quiz");
          }}
        />
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
      <Image
        source={require("../assets/splashh.png")}
        style={styles.backGround}
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
  backGround: {
    position: "absolute",
    width: width,
    height: height * 3,
    zIndex: -1,
  },
  parent: {
    width: width,
    height: height * 3,
  },
});
