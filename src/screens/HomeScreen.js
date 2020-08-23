import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, ImagePropTypes } from "react-native";
import WakeUpAt from '../components/WakeUpAt'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>sleepyti.me</Text>
      <WakeUpAt/>

    </View>

  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#001f3f',
    color: '#7FDBFF',
    height: 1000
    
  },
  title: {
    fontSize: 20,
    color: '#7FDBFF',
    textAlign: 'center'
  },
  colouring: {
    color: '#7FDBFF'
  },
});

export default HomeScreen;
