import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={styles.container}>


      <View style={styles.profileSection}>

    
        <Image
           source={require('@/assets/images/Profile_picture.jpeg')}
           style={styles.profileImage}
           />

    
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>
            Welcome
          </Text>

          <Text style={styles.username}>
            Vaishnavi
          </Text>
        </View>

    
        <TouchableOpacity
          style={styles.notificationButton}
          activeOpacity={0.7}
        >
          <Ionicons
            name="notifications-outline"
            size={24}
            color="#222"
          />

          <View style={styles.notificationDot} />
        </TouchableOpacity>

      </View>


      <View style={styles.searchContainer}>

    <Ionicons
          name="search-outline"
          size={22}
          color="#888"
        />

        <TextInput
          style={styles.searchInput}
          placeholder="Search news, topics..."
          placeholderTextColor="#999"
        />

        <TouchableOpacity activeOpacity={0.7}>
          <Ionicons
            name="options-outline"
            size={22}
            color="#222"
          />
        </TouchableOpacity>

      </View>

    </View>
  );
};

export default Header;

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 25,
    paddingTop: 50,
    paddingBottom: 10,
  },

  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 22,
  },

  profileImage: {
    width: 55,
    height: 55,
    borderRadius: 25,
    resizeMode: 'cover',
  },

  welcomeContainer: {
    flex: 1,
    marginLeft: 13,
  },

  welcomeText: {
    fontSize: 15,
    color: '#888',
  },

  username: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#222',
    marginTop: 4,
  },

  notificationButton: {
    width: 45,
    height: 45,
    borderRadius: 14,
    backgroundColor: '#F3F3F3',
    justifyContent: 'center',
    alignItems: 'center',
  },

  notificationDot: {
    position: 'absolute',
    top: 9,
    right: 10,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF3B30',
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    height: 52,
    borderRadius: 12,
    paddingHorizontal: 20,
  },

  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    color: '#222',
  },

});
