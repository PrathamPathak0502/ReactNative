import React, { useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet, Button } from 'react-native';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <SafeAreaView style={isDarkMode ? darkStyles.container : lightStyles.container}>
      <View>
        <Text style={isDarkMode ? darkStyles.text : lightStyles.text}>Hello Pratham</Text>
        <Button title="DARK MODE" onPress={toggleTheme} />
      </View>
    </SafeAreaView>
  );
}

const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
    color: 'black',
    backgroundColor: 'yellow',
    padding: 10,
  },
});

const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  text: {
    fontSize: 20,
    color: 'white',
    backgroundColor: 'gray',
    padding: 10,
  },
});

export default App;