import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TutorialOverlay from 'react-native-tutorial-overlay';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.taskContainer}>
        <Text style={styles.taskTitle}>#01 - Task</Text>
        <Text style={styles.taskDescription}>
          build your app first steps tutorial
        </Text>
      </View>
      <View style={styles.taskContainer}>
        <Text style={styles.taskTitle}>#02 - Task</Text>
        <Text style={styles.taskDescription}>finish task 01</Text>
      </View>

      <TutorialOverlay x="10" y="80" width="95%" height="120" shape="square">
        <View style={styles.tutorialContainer}>
          <Text style={styles.tutorialText}>Here you can check your tasks</Text>
        </View>
      </TutorialOverlay>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 90,
    paddingHorizontal: 20,
  },
  taskContainer: {
    height: 100,

    marginBottom: 20,
    padding: 20,

    backgroundColor: '#FF6B6B',
  },
  taskTitle: {
    fontSize: 24,
    color: '#fff',
  },
  taskDescription: {
    fontSize: 14,
    color: '#fff',
  },

  tutorialContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tutorialText: {
    color: 'white',
    fontSize: 20,
  },
});
