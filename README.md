# React Native Tutorial Overlay

A React Native layer component to build apps tutorials guide.

<img src="screenshot.jpg" alt="screenshot" width="300"/>

## ► Installation

First if you are using a bare React Native project you are going to need to install `react-native-svg` too

```jsx
npm install react-native-svg react-native-tutorial-overlay
```

If you are using expo you can just install `react-native-tutorial-overlay`

```
npm install react-native-tutorial-overlay
```

## ► Usage Example

```jsx
import TutorialOverlay from "react-native-tutorial-overlay";

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
```

## ► All Properties

| Prop                  | Default Value        | Type              | Description                                            |
| --------------------- | -------------------- | ----------------- | ------------------------------------------------------ |
| **`shape`**           | `circle`             | `string`          | shape of the hole                                      |
| **`x`**               | `0`                  | `number | string` | x position of the role                                 |
| **`y`**               | `0`                  | `number | string` | y position of the role                                 |
| **`width`**           | `100`                | `number | string` | width of rectangle (\* only for `rect` shape)          |
| **`height`**          | `100`                | `number | string` | height of rectangle (\* only for `rect` shape)         |
| **`radius`**          | `100`                | `number`          | radius of circle (\* only for `circle` shape)          |
| **`borderRadius`**    | `10`                 | `number`          | border radius of the hole (\* only for `square` shape) |
| **`backgroundColor`** | `rgba(0, 0, 0, 0.9)` | `string`          | background color of the overlay                        |


## ► Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## ► License

MIT
