import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

const Tech: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Company Logo</Text>
        <Image
          source={{ uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gogreendrip.com%2FGoGreen%2FGoGreen%2Fabout.php&psig=AOvVaw2NIWNVbPVDdoMTAe1-oDwl&ust=1737452613571000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNiuhcmBhIsDFQAAAAAdAAAAABAE' }}
          style={styles.image}
          alt="Ukshati Tech"
        />
        <Text style={styles.description}>A IoT based Solution</Text>
        <Text style={styles.description}>Single Pump can be used in residential area.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 4,
  },
});

export default Tech;