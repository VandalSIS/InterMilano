import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const AboutScreen = () => {
  const keyFacts = [
    'Founded in 1923 in Vienna, Austria',
    'Headquarters in Lyon, France since 1989',
    '195 member countries worldwide',
    'Over 1,000 staff members globally',
    'Operates 24/7, 365 days a year',
  ];

  const coreValues = [
    {
      title: 'Neutrality',
      description: 'INTERPOL remains politically neutral and does not intervene in political, military, religious, or racial matters.',
    },
    {
      title: 'Cooperation',
      description: 'We facilitate international police cooperation to combat transnational crime.',
    },
    {
      title: 'Innovation',
      description: 'We use cutting-edge technology and innovative approaches to support law enforcement.',
    },
    {
      title: 'Transparency',
      description: 'We maintain transparency in our operations while respecting the confidentiality of ongoing investigations.',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>About INTERPOL</Text>
        <Text style={styles.subtitle}>Connecting Police for a Safer World</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Our Mission</Text>
        <Text style={styles.description}>
          INTERPOL is the world's largest international police organization, with 195 member countries. 
          Our role is to enable police around the world to work together to make the world a safer place.
        </Text>
        <Text style={styles.description}>
          We provide a range of expertise and capabilities to support three main areas of transnational crime: 
          terrorism, cybercrime, and organized crime.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Key Facts</Text>
        {keyFacts.map((fact, index) => (
          <View key={index} style={styles.factItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.factText}>{fact}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Our Core Values</Text>
        {coreValues.map((value, index) => (
          <View key={index} style={styles.valueCard}>
            <Text style={styles.valueTitle}>{value.title}</Text>
            <Text style={styles.valueDescription}>{value.description}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Governance</Text>
        <Text style={styles.description}>
          INTERPOL is governed by a General Assembly, which meets annually and is composed of delegates 
          appointed by the governments of member countries. The Executive Committee, elected by the 
          General Assembly, supervises the execution of the decisions of the General Assembly.
        </Text>
        <Text style={styles.description}>
          The General Secretariat, headed by the Secretary General, is responsible for the day-to-day 
          work of fighting international crime.
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          "Making the world safer through international police cooperation"
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#1a365d',
    padding: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#e2e8f0',
    textAlign: 'center',
  },
  section: {
    backgroundColor: '#ffffff',
    margin: 15,
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a365d',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: '#4a5568',
    lineHeight: 24,
    marginBottom: 15,
  },
  factItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  bullet: {
    fontSize: 16,
    color: '#1a365d',
    marginRight: 10,
    marginTop: 2,
  },
  factText: {
    fontSize: 16,
    color: '#4a5568',
    flex: 1,
    lineHeight: 22,
  },
  valueCard: {
    backgroundColor: '#f7fafc',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#1a365d',
  },
  valueTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a365d',
    marginBottom: 8,
  },
  valueDescription: {
    fontSize: 14,
    color: '#4a5568',
    lineHeight: 20,
  },
  footer: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#1a365d',
    marginTop: 20,
  },
  footerText: {
    color: '#e2e8f0',
    fontSize: 14,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

export default AboutScreen;
