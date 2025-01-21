import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';

function LandingPage() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Welcome to UKSHATI TECHNOLOGIES</Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>UNO</Text>
        
          <Text style={styles.cardContent}>Single Pump can be used in residental area.</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'black',
    marginBottom: 20,
  },
  card: {
    width: '80%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'green',
    shadowColor: '#EF5354s',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    alignItems: 'center',

  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardContent: {
    fontSize: 16,
    color: 'Black',
  },
});

export default LandingPage;