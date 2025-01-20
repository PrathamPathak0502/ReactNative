import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, StyleSheet, Alert, Platform } from 'react-native';
import LandingPage from './components/LandingPage';


const App = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Dynamically set the API URL based on the platform (Android emulator or physical device)
  const getApiUrl = () => {
    if (Platform.OS === 'android') {
      // Use '10.0.2.2' for Android emulator
      return 'http://10.0.2.2:3001/api/login';
    } else {
      // For physical devices, use the local machine's IP address
      return 'http://<your-ip-address>:3001/api/login';  // Replace <your-ip-address> with your actual local IP
    }
  };

  const handleLogin = () => {
    fetch(getApiUrl(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, password }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          Alert.alert('Login successful');
        } else {
          Alert.alert('Invalid credentials');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        Alert.alert('Error logging in');
      });
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
        <Button title="Login" onPress={handleLogin} color={isDarkMode ? 'white' : 'black'} />
        <Button title="Toggle Dark Mode" onPress={toggleDarkMode} color={isDarkMode ? 'white' : 'black'} />
      </View>
      <LandingPage />

    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    width: '80%',
  },
});

const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
  },
});

const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    color: 'black',
  },
});

export default App;
