<<<<<<< HEAD
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
=======
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
>>>>>>> 9f79f39 (Initial commit)
  },
});

export default App;
