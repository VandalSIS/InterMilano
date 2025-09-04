import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const ServicesScreen = () => {
  const services = [
    {
      title: 'Red Notices',
      description: 'International wanted persons notices',
      icon: '🔴',
      details: 'Red Notices are requests to locate and provisionally arrest an individual pending extradition.',
    },
    {
      title: 'Blue Notices',
      description: 'Information requests about individuals',
      icon: '🔵',
      details: 'Blue Notices are used to collect additional information about a person\'s identity, location, or activities.',
    },
    {
      title: 'Green Notices',
      description: 'Warnings about criminal activities',
      icon: '🟢',
      details: 'Green Notices provide warnings and intelligence about persons who have committed criminal offenses.',
    },
    {
      title: 'Yellow Notices',
      description: 'Missing persons alerts',
      icon: '🟡',
      details: 'Yellow Notices are used to help locate missing persons, often minors, or to help identify persons unable to identify themselves.',
    },
    {
      title: 'Black Notices',
      description: 'Unidentified bodies information',
      icon: '⚫',
      details: 'Black Notices are used to seek information on unidentified bodies.',
    },
    {
      title: 'Purple Notices',
      description: 'Modus operandi information',
      icon: '🟣',
      details: 'Purple Notices seek or provide information on modus operandi, objects, devices, and concealment methods used by criminals.',
    },
  ];

  const specializedServices = [
    {
      title: 'Cybercrime',
      description: 'Combating cyber threats and digital crimes',
      icon: '💻',
    },
    {
      title: 'Terrorism',
      description: 'Counter-terrorism intelligence and support',
      icon: '🛡️',
    },
    {
      title: 'Organized Crime',
      description: 'Fighting transnational organized crime',
      icon: '⚖️',
    },
    {
      title: 'Financial Crime',
      description: 'Anti-money laundering and asset recovery',
      icon: '💰',
    },
    {
      title: 'Environmental Crime',
      description: 'Wildlife and environmental protection',
      icon: '🌍',
    },
    {
      title: 'Human Trafficking',
      description: 'Combatting human trafficking networks',
      icon: '👥',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Our Services</Text>
        <Text style={styles.subtitle}>Global Policing Solutions</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>INTERPOL Notices</Text>
        <Text style={styles.sectionDescription}>
          INTERPOL issues various types of notices to help law enforcement agencies worldwide 
          share critical information about crimes and criminals.
        </Text>
        
        {services.map((service, index) => (
          <View key={index} style={styles.serviceCard}>
            <View style={styles.serviceHeader}>
              <Text style={styles.serviceIcon}>{service.icon}</Text>
              <View style={styles.serviceInfo}>
                <Text style={styles.serviceTitle}>{service.title}</Text>
                <Text style={styles.serviceDescription}>{service.description}</Text>
              </View>
            </View>
            <Text style={styles.serviceDetails}>{service.details}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Specialized Crime Areas</Text>
        <Text style={styles.sectionDescription}>
          INTERPOL provides specialized support and expertise in key areas of transnational crime.
        </Text>
        
        <View style={styles.specializedGrid}>
          {specializedServices.map((service, index) => (
            <View key={index} style={styles.specializedCard}>
              <Text style={styles.specializedIcon}>{service.icon}</Text>
              <Text style={styles.specializedTitle}>{service.title}</Text>
              <Text style={styles.specializedDescription}>{service.description}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>I-24/7 Global Communication System</Text>
        <Text style={styles.description}>
          INTERPOL's secure global police communications system enables member countries to 
          exchange information in real-time, 24 hours a day, 365 days a year.
        </Text>
        <Text style={styles.description}>
          This system allows police forces worldwide to access INTERPOL's databases and 
          share critical information instantly, helping to prevent and solve crimes.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Training and Capacity Building</Text>
        <Text style={styles.description}>
          INTERPOL provides training programs and capacity-building initiatives to help 
          member countries enhance their law enforcement capabilities and stay ahead of 
          evolving criminal threats.
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Supporting law enforcement worldwide through innovative policing solutions
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
    marginBottom: 10,
  },
  sectionDescription: {
    fontSize: 16,
    color: '#4a5568',
    lineHeight: 24,
    marginBottom: 20,
  },
  serviceCard: {
    backgroundColor: '#f7fafc',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#1a365d',
  },
  serviceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  serviceIcon: {
    fontSize: 24,
    marginRight: 15,
  },
  serviceInfo: {
    flex: 1,
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a365d',
    marginBottom: 5,
  },
  serviceDescription: {
    fontSize: 14,
    color: '#718096',
  },
  serviceDetails: {
    fontSize: 14,
    color: '#4a5568',
    lineHeight: 20,
  },
  specializedGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  specializedCard: {
    width: '48%',
    backgroundColor: '#f7fafc',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  specializedIcon: {
    fontSize: 32,
    marginBottom: 10,
  },
  specializedTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1a365d',
    textAlign: 'center',
    marginBottom: 5,
  },
  specializedDescription: {
    fontSize: 12,
    color: '#718096',
    textAlign: 'center',
    lineHeight: 16,
  },
  description: {
    fontSize: 16,
    color: '#4a5568',
    lineHeight: 24,
    marginBottom: 15,
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

export default ServicesScreen;
