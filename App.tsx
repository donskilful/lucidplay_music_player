import { View, StyleSheet } from 'react-native';
import React from 'react';
import Home from './src/screens/Home/Home';

const App = () => {
  return (
    <View style={style.container}>
      <Home />
    </View>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
