import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card1}><Text style={styles.handwritten}>Uno</Text></View> 
      <View style={styles.card2}><Text style={styles.handwritten}>Octa</Text></View>
      <View style={styles.card3}><Text style={styles.handwritten}>Hexa</Text></View>
      <View style={styles.card4}><Text style={styles.handwritten}>Quad</Text></View>
    </View>
  );
  // "handwritten" should be same for each text. it will provide a uniform view
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
  },
  handwritten:{
    fontFamily: 'PatrickHand-Regular',
    
    fontSize: 20,
    textShadowColor: '#000',
    shadowColor: '#000',
  }, 
  //I created 'card' for styling. currently it's same. In future you can update it for each card
  card1: {
    backgroundColor: '#0000FF',
    borderColor: '#dee2e6',
    borderWidth: 1,
    borderRadius: 4,
    padding: 50, //You can change afterward same in every container
    margin: 10,
    width: '40%',  // Adjust width to fit two cards per row left 10% for each side
    alignItems: 'center',
  },
  card2: {
    backgroundColor: '#0000FF',
    borderColor: '#dee2e6',
    borderWidth: 1,
    borderRadius: 4,
    padding: 50,
    margin: 10,
    width: '40%',  // Adjust width to fit two cards per row left 10% for each side
    alignItems: 'center',
  },
  card3: {
    backgroundColor: '#0000FF',
    borderColor: '#dee2e6',
    borderWidth: 1,
    borderRadius: 4,
    padding: 50,
    margin: 10,
    width: '40%', //   Adjust width to fit two cards per row left 10% for each side
    alignItems: 'center',
  },
  card4: {
    backgroundColor: '#0000FF',
    borderColor: '#dee2e6',
    borderWidth: 1,
    borderRadius: 4,
    padding: 50,  
    margin: 10,
    width: '40%', // Adjust width to fit two cards per row left 10% for each side
    alignItems: 'center',
  },
});

export default App;
