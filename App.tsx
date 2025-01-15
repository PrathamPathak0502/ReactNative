import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>Hello</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
});

export default App;