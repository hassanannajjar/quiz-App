import React, {useState} from "react";
import { StyleSheet, Image, View, Dimensions, Modal, Text } from "react-native";
import Button from "../components/Button";
const { width, height } = Dimensions.get("window");
const Home = ({ navigation }) => {
  const [modalVisible, setVisible] = useState(false);
  return (
    <View style={styles.parent}>
      <View style={styles.container}>
      <Modal animationType='slide' transparent={true} visible={modalVisible}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Created By : Hassan Al Najjar</Text>
            <Text style={styles.modalText}>
              Email : hassan.an.najjar@gmail.com{' '}
            </Text>
            <Text style={styles.modalText}>Whatsapp : +970-599512662 </Text>

            <Button title='Close' onPress={() => setVisible(!modalVisible)} />
          </View>
      </Modal>
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
          onPress={() => setVisible(true)} />
      </View>
      <Image
        source={require("../assets/splash.png")}
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
  modalView: {
    margin: 20,
    marginTop: '50%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
