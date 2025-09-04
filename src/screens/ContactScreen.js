import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';

const ContactScreen = () => {
  const contactInfo = [
    {
      title: 'General Secretariat',
      address: '200 Quai Charles de Gaulle\n69006 Lyon, France',
      phone: '+33 4 72 44 70 00',
      email: 'contact@interpol.int',
      icon: '🏢',
    },
    {
      title: 'Regional Bureau for Asia and the Pacific',
      address: 'Bangkok, Thailand',
      phone: '+66 2 205 4000',
      email: 'bangkok@interpol.int',
      icon: '🌏',
    },
    {
      title: 'Regional Bureau for the Americas',
      address: 'Buenos Aires, Argentina',
      phone: '+54 11 4809 2000',
      email: 'buenosaires@interpol.int',
      icon: '🌎',
    },
    {
      title: 'Regional Bureau for Africa',
      address: 'Abidjan, Côte d\'Ivoire',
      phone: '+225 20 30 40 50',
      email: 'abidjan@interpol.int',
      icon: '🌍',
    },
  ];

  const emergencyContacts = [
    {
      title: '24/7 Command and Coordination Centre',
      description: 'For urgent police assistance and coordination',
      phone: '+33 4 72 44 70 00',
      icon: '🚨',
    },
    {
      title: 'Cybercrime Reporting',
      description: 'Report cybercrime incidents',
      email: 'cybercrime@interpol.int',
      icon: '💻',
    },
    {
      title: 'Terrorism Hotline',
      description: 'Counter-terrorism intelligence',
      phone: '+33 4 72 44 70 00',
      icon: '🛡️',
    },
  ];

  const handlePhoneCall = (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`).catch(() => {
      Alert.alert('Error', 'Unable to make phone call');
    });
  };

  const handleEmail = (email) => {
    Linking.openURL(`mailto:${email}`).catch(() => {
      Alert.alert('Error', 'Unable to open email client');
    });
  };

  const handleWebsite = () => {
    Linking.openURL('https://www.interpol.int').catch(() => {
      Alert.alert('Error', 'Unable to open website');
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Contact INTERPOL</Text>
        <Text style={styles.subtitle}>Get in Touch with Global Law Enforcement</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Headquarters & Regional Offices</Text>
        <Text style={styles.sectionDescription}>
          INTERPOL operates from its General Secretariat in Lyon, France, and maintains 
          regional bureaus around the world to support member countries.
        </Text>
        
        {contactInfo.map((contact, index) => (
          <View key={index} style={styles.contactCard}>
            <View style={styles.contactHeader}>
              <Text style={styles.contactIcon}>{contact.icon}</Text>
              <Text style={styles.contactTitle}>{contact.title}</Text>
            </View>
            
            <View style={styles.contactDetails}>
              <Text style={styles.contactAddress}>{contact.address}</Text>
              
              <TouchableOpacity 
                style={styles.contactButton}
                onPress={() => handlePhoneCall(contact.phone)}
              >
                <Text style={styles.contactButtonText}>📞 {contact.phone}</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={styles.contactButton}
                onPress={() => handleEmail(contact.email)}
              >
                <Text style={styles.contactButtonText}>✉️ {contact.email}</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Emergency Contacts</Text>
        <Text style={styles.sectionDescription}>
          For urgent matters and emergency assistance, contact our 24/7 operations center.
        </Text>
        
        {emergencyContacts.map((contact, index) => (
          <View key={index} style={styles.emergencyCard}>
            <View style={styles.emergencyHeader}>
              <Text style={styles.emergencyIcon}>{contact.icon}</Text>
              <View style={styles.emergencyInfo}>
                <Text style={styles.emergencyTitle}>{contact.title}</Text>
                <Text style={styles.emergencyDescription}>{contact.description}</Text>
              </View>
            </View>
            
            {contact.phone && (
              <TouchableOpacity 
                style={styles.emergencyButton}
                onPress={() => handlePhoneCall(contact.phone)}
              >
                <Text style={styles.emergencyButtonText}>Call Now</Text>
              </TouchableOpacity>
            )}
            
            {contact.email && (
              <TouchableOpacity 
                style={styles.emergencyButton}
                onPress={() => handleEmail(contact.email)}
              >
                <Text style={styles.emergencyButtonText}>Send Email</Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Online Resources</Text>
        <Text style={styles.sectionDescription}>
          Access INTERPOL's online services and resources.
        </Text>
        
        <TouchableOpacity style={styles.websiteButton} onPress={handleWebsite}>
          <Text style={styles.websiteButtonText}>🌐 Visit Official Website</Text>
        </TouchableOpacity>
        
        <View style={styles.resourceList}>
          <Text style={styles.resourceItem}>• Wanted Persons Database</Text>
          <Text style={styles.resourceItem}>• Stolen Vehicle Database</Text>
          <Text style={styles.resourceItem}>• Stolen Travel Documents Database</Text>
          <Text style={styles.resourceItem}>• Training Materials</Text>
          <Text style={styles.resourceItem}>• Publications and Reports</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Media Inquiries</Text>
        <Text style={styles.description}>
          For media inquiries and press releases, please contact our Communications Office.
        </Text>
        <TouchableOpacity 
          style={styles.contactButton}
          onPress={() => handleEmail('media@interpol.int')}
        >
          <Text style={styles.contactButtonText}>✉️ media@interpol.int</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Connecting police worldwide for a safer world
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
  contactCard: {
    backgroundColor: '#f7fafc',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#1a365d',
  },
  contactHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  contactIcon: {
    fontSize: 24,
    marginRight: 15,
  },
  contactTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a365d',
    flex: 1,
  },
  contactDetails: {
    marginLeft: 39,
  },
  contactAddress: {
    fontSize: 14,
    color: '#4a5568',
    marginBottom: 10,
    lineHeight: 20,
  },
  contactButton: {
    backgroundColor: '#1a365d',
    padding: 10,
    borderRadius: 5,
    marginBottom: 8,
  },
  contactButtonText: {
    color: '#ffffff',
    fontSize: 14,
    textAlign: 'center',
  },
  emergencyCard: {
    backgroundColor: '#fff5f5',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#e53e3e',
  },
  emergencyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  emergencyIcon: {
    fontSize: 24,
    marginRight: 15,
  },
  emergencyInfo: {
    flex: 1,
  },
  emergencyTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a365d',
    marginBottom: 5,
  },
  emergencyDescription: {
    fontSize: 14,
    color: '#4a5568',
  },
  emergencyButton: {
    backgroundColor: '#e53e3e',
    padding: 10,
    borderRadius: 5,
    marginBottom: 8,
  },
  emergencyButtonText: {
    color: '#ffffff',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  websiteButton: {
    backgroundColor: '#1a365d',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  websiteButtonText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  resourceList: {
    marginTop: 10,
  },
  resourceItem: {
    fontSize: 14,
    color: '#4a5568',
    marginBottom: 8,
    lineHeight: 20,
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

export default ContactScreen;
