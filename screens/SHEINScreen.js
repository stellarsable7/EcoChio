import * as React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { Icon, Rating } from 'react-native-elements';
import { ProgressBar } from 'react-native-paper';

export default function SHEINScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image style={styles.logo} />
      <Text style={styles.title}>SHEIN</Text>
      <Rating imageSize={20} readonly startingValue={4} style={styles.rating} />
      <TouchableOpacity style={styles.alt} onPress={() => navigation.navigate("Alternatives")}>
        <Text style={styles.alt}>Learn More</Text>
      </TouchableOpacity>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Sustainability: 0/5</Text>
        <Icon name="info" size={16} style={styles.infoIcon} />
      </View>
      <ProgressBar progress={0.8} color="#869E61" style={styles.progressBar} />
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Price Range: 1/5</Text>
      </View>
      <ProgressBar progress={0.6} color="#869E61" style={styles.progressBar} />
      <Text style={styles.description}>
        SHEIN is a online shopping platform known for its affordable clothing. It faces controversy over its sustainability and ethical issues.
        {'\n\n'}
        Sustainability issues:
        1. focuses on rapid production and frequent release of new designs
        2. affordability and constant new arrivals encourage consumers to frequently buy and discard clothes
        3. generates a high volume of textile waste due to short lifespan of trendy, inexpensive, low quality clothing
        leading to significant environmental waste and carbon emissions.
        {'\n\n'}
        Ethical issues:
        1. unsafe working conditions for workers
        2. low wages
        3. poor labour practices
      </Text>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFCEB',
  },
  backButton: {
    alignSelf: 'flex-start',
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 8,
  },
  rating: {
    alignSelf: 'center',
    marginVertical: 8,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  infoText: {
    fontSize: 16,
  },
  infoIcon: {
    marginLeft: 8,
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
    marginVertical: 8,
  },
  description: {
    fontSize: 14,
    marginVertical: 8,
  },
  link: {
    color: '#869E61',
    textDecorationLine: 'underline',
  },
});