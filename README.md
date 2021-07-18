# react-native-tutorial-overlay

A React Native layer component to build app tutorials

## Installation

```sh
npm install react-native-tutorial-overlay
```

## Usage

```js
import TutorialOverlay from "react-native-tutorial-overlay";

export default function App() {

  return (
    <TutorialOverlay shape="circle" x="200" y="300">
      <Text style={{ color: 'white' }}>Text guide inside layer</Text>
    </TutorialOverlay>
  );
}
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
