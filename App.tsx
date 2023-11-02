import { View, StyleSheet, StatusBar } from 'react-native';
import React from 'react';
import Home from './src/screens/Home/Home';

const App = () => {
  return (
    <View style={style.container}>
      <StatusBar barStyle={'light-content'} />
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
