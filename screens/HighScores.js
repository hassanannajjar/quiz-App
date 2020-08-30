import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, AsyncStorage } from "react-native";

const HighScores = () => {
  const [scores, setScores] = useState("No Scores");

  const getData = async () => {
    const AllScores = await AsyncStorage.getItem("SCORE");
    return AllScores;
  };

  useEffect(() => {
    getData().then((Scores) => setScores(Scores));
  }, []);
  return (
    <View>
      <Text style={styles.text}> {scores}</Text>
    </View>
  );
};

export default HighScores;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 20,
  },
});
