import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, AsyncStorage, FlatList } from "react-native";

const HighScores = () => {
  const [scores, setScores] = useState([]);

  const getData = async () => {
    const AllScores = await AsyncStorage.getItem("SCORE");
    return AllScores;
  };

  useEffect(() => {
    getData().then((Scores) => setScores(Scores.split(",")));
  }, []);
  return (
    <View style={styles.container}>
    <FlatList style={styles.flatList} showsVerticalScrollIndicator={false} data={scores} renderItem={({item}) => <Text style={styles.text}>{item}</Text>} keyExtractor={(item, index) => 'key'+index}
/>
    </View>
  );
};

export default HighScores;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#d06A50",
  },
  flatList:{
    width: "100%"
  },
  text: {
    margin: 10,
    textAlign: 'center',
    fontSize: 50,
  },
});
