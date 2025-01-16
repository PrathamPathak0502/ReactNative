import React, { useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet, TextInput, Button } from 'react-native';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <SafeAreaView style={isDarkMode ? darkStyles.container : lightStyles.container}>
      <View style={styles.content}>
        <Text style={isDarkMode ? darkStyles.text : lightStyles.text}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="User ID"
          placeholderTextColor={isDarkMode ? 'white' : 'gray'}
          value={userId}
          onChangeText={setUserId}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={isDarkMode ? 'white' : 'gray'}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Login" onPress={() => {}} color={isDarkMode ? 'white' : 'black'} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Colour change" onPress={toggleTheme} color={isDarkMode ? 'white' : 'black'} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: 'black',
  },
  buttonContainer: {
    padding: 20,
    backgroundColor: 'grey',
  },
});

const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
    color: 'black',
    marginBottom: 20,
  },
});

const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
  text: {
    fontSize: 20,
    color: 'white', 
    marginBottom: 20,
  },
});

export default App;