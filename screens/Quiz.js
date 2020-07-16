import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import Button from "../components/Button";
import questions from "../data/questions";
const Quiz = ({ navigation }) => {
  const totalCount = questions.length;
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

  const NextQuestion = () => {
    const nextIndex = activeQuestionIndex + 1;
    if (nextIndex >= totalCount) {
      return navigation.popToTop();
    }
    setActiveQuestionIndex(nextIndex);
  };

  const Answer = (correct) => {
    if (correct) {
      NextQuestion();
    } else {
      alert("you lose");
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{questions[activeQuestionIndex].question}</Text>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safearea}>
        <View style={styles.buttonContainer}>
          {questions[activeQuestionIndex].answers.map(
            ({ id, text, correct }) => {
              return (
                <Button key={id} title={text} onPress={() => Answer(correct)} />
              );
            }
          )}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#429",
    flex: 1,
  },
  text: {
    color: "#fff",
    fontSize: 25,
    textAlign: "center",
    fontWeight: "600",
    marginTop: "20%",
  },
  safearea: {
    flex: 1,
    marginTop: 40,
    justifyContent: "space-between",
  },
  buttonContainer: {
    justifyContent: "space-evenly",
    alignItems: "center",
    alignContent: "center",
  },
  score: {
    position: "absolute",
    top: 5,
    fontSize: 30,
    left: 30,
  },
});
