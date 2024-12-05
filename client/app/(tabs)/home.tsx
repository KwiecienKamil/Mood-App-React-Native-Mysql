import React, { Component } from "react";
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors } from "@/constants/Colors";

type State = {
  selectedMood: string; // Emoji character
  moodDescription: string; // Description of the selected mood
};

export class Home extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      selectedMood: "😊",
      moodDescription: "Happy",
    };
  }

  changeMood = (moodEmoji: string, moodDescription: string) => {
    this.setState({ selectedMood: moodEmoji, moodDescription });
  };

  render() {
    const { selectedMood, moodDescription } = this.state;

    const handleButtonClick = () => {
      Alert.alert("click");
    };

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}> Welcome back! </Text>
        <View style={styles.moodPicker}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 24,
              color: Colors.colors.secondary,
            }}
          >
            How are you feeling today?
          </Text>

          <View style={styles.mainMoodContainer}>
            <Text style={styles.mainMood}>{selectedMood}</Text>
            <Text style={styles.moodDescription}>{moodDescription}</Text>
          </View>

          <View style={styles.emojiPicker}>
            <TouchableOpacity
              onPress={() => this.changeMood("😡", "Angry")}
              style={styles.emojiContainer}
            >
              <Text style={styles.emoji}>😡</Text>
              <Text style={styles.emojiLabel}>Angry</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.changeMood("😢", "Sad")}
              style={styles.emojiContainer}
            >
              <Text style={styles.emoji}>😢</Text>
              <Text style={styles.emojiLabel}>Sad</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.changeMood("😐", "Neutral")}
              style={styles.emojiContainer}
            >
              <Text style={styles.emoji}>😐</Text>
              <Text style={styles.emojiLabel}>Neutral</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.changeMood("😊", "Happy")}
              style={styles.emojiContainer}
            >
              <Text style={styles.emoji}>😊</Text>
              <Text style={styles.emojiLabel}>Happy</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.changeMood("😄", "Great Mood")}
              style={styles.emojiContainer}
            >
              <Text style={styles.emoji}>😄</Text>
              <Text style={styles.emojiLabel}>Very Happy</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleButtonClick}>
            <Text style={styles.buttonText}>Set your mood</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 24,
    paddingHorizontal: 8,
    padding: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ad5389",
  },
  welcome: {
    color: Colors.colors.secondary,
    fontSize: 42,
    marginBottom: 6,
    textAlign: "center",
    fontWeight: "600",
  },
  moodPicker: {
    height: "60%",
  },
  mainMoodContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  mainMood: {
    fontSize: 150,
    textAlign: "center",
  },
  moodDescription: {
    fontSize: 18,
    color: Colors.colors.secondary,
    marginTop: 10,
    textAlign: "center",
  },
  emojiPicker: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
    width: "100%",
    paddingHorizontal: 16,
  },
  emojiContainer: {
    alignItems: "center",
  },
  emoji: {
    fontSize: 28,
  },
  emojiLabel: {
    fontSize: 14,
    color: Colors.colors.secondary,
    textAlign: "center",
    marginTop: 5,
  },
  button: {
    backgroundColor: "#FF6347", // Tomato color for the button
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "600",
  },
});
