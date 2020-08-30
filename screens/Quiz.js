import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Image,
  Dimensions,
  AsyncStorage,
  Alert,
} from "react-native";
import Button from "../components/Button";
import questions from "./allQuestion";
const { width, height } = Dimensions.get("window");
const Quiz = ({ navigation }) => {
  const [interval, setIntervall] = useState();
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [life, setLife] = useState(3);
  const [errorAnswer, setErrorAnswer] = useState();
  const [correctAnswer, setCorrectAnswer] = useState();
  const [disable, setDisable] = useState(false);
  const [timer, setTimer] = useState(20);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((number) => number - 1);
    }, 1000);
    setIntervall(interval);
    return () => clearInterval(interval);
  }, [activeQuestionIndex]);

  useEffect(() => {
    if (timer < 1) {
      clearInterval(interval);
      Answer();
    }
  }, [timer]);

  const NextQuestion = () => {
    setTimer(20);
    setActiveQuestionIndex(Math.floor(Math.random() * questions.length));
  };

  const Answer = async (correct) => {
    setDisable(true);
    if (correct) {
      setScore(score + 1);
      NextQuestion();
    } else if (life > 0) {
      setLife(life - 1);
      setCorrectAnswer(styles.correctAnswer);
      setErrorAnswer(styles.errorAnswer);
      setTimeout(() => {
        NextQuestion();
        setCorrectAnswer();
        setErrorAnswer();
      }, 20);
    } else {
      clearInterval(interval);
      await AsyncStorage.setItem("SCORE", `${score}`);
      setCorrectAnswer(styles.correctAnswer);
      setErrorAnswer(styles.errorAnswer);
      setTimeout(async () => {
        Alert.alert("", "you Lose are you want repeat?", [
          {
            text: "yes",
            onPress: () => {
              setLife(3);
              NextQuestion();
            },
          },
          {
            text: "No",
            onPress: () => {
              navigation.navigate("Home");
            },
          },
        ]);
        setCorrectAnswer();
        setErrorAnswer();
      }, 20);
    }
    setDisable(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topPar}>
        <Text style={styles.score}>{score}</Text>
        <Text style={styles.timer}>{timer}</Text>
        <View style={styles.life}>
          <Image
            source={
              life >= 3
                ? require("../assets/life.png")
                : require("../assets/dead.png")
            }
          />
          <Image
            source={
              life >= 2
                ? require("../assets/life.png")
                : require("../assets/dead.png")
            }
          />
          <Image
            source={
              life >= 1
                ? require("../assets/life.png")
                : require("../assets/dead.png")
            }
          />
        </View>
      </View>
      <Text style={styles.text}>{questions[activeQuestionIndex].question}</Text>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safearea}>
        <View style={styles.buttonContainer}>
          {questions[activeQuestionIndex].answers.map(
            ({ id, text, correct }) => {
              return (
                <Button
                  style={correct ? correctAnswer : errorAnswer}
                  key={id}
                  title={text}
                  onPress={
                    disable
                      ? () => {}
                      : (element) => Answer(correct, id, element)
                  }
                />
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
    marginTop: "15%",
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
  topPar: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    width: width,
    height: height * 0.06,
    backgroundColor: "#52aa",
  },
  score: {
    fontSize: 30,
    color: "white",
    flex: 1,
  },
  life: {
    flexDirection: "row",
    justifyContent: "flex-end",
    flex: 1,
  },
  timer: {
    fontSize: 30,
    color: "white",
  },
  errorAnswer: {
    backgroundColor: "red",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    width: "46%",
    marginTop: 20,
  },
  correctAnswer: {
    backgroundColor: "green",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    width: "46%",
    marginTop: 20,
  },
});
