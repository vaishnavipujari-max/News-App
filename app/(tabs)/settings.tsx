import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
  Image,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function SettingsScreen() {
  const { top: safeTop } = useSafeAreaInsets();

  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const SettingItem = ({
    icon,
    title,
    subtitle,
    onPress,
  }: {
    icon: keyof typeof Ionicons.glyphMap;
    title: string;
    subtitle?: string;
    onPress?: () => void;
  }) => {
    return (
      <TouchableOpacity
        style={styles.settingItem}
        onPress={onPress}
        activeOpacity={0.7}
      >
        <View style={styles.iconContainer}>
          <Ionicons name={icon} size={21} color="#333333" />
        </View>

        <View style={styles.settingText}>
          <Text style={styles.settingTitle}>{title}</Text>

          {subtitle ? (
            <Text style={styles.settingSubtitle}>{subtitle}</Text>
          ) : null}
        </View>

        <Ionicons
          name="chevron-forward"
          size={19}
          color="#999999"
        />
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        paddingTop: safeTop + 20,
        paddingBottom: 40,
      }}
      showsVerticalScrollIndicator={false}
    >
      
      <Text style={styles.heading}>Settings</Text>

      <Text style={styles.description}>
        Manage your account and preferences
      </Text>

      
      <TouchableOpacity style={styles.profileCard} activeOpacity={0.7}>
        <Image
          source={{
            uri: 'https://i.pravatar.cc/150?img=47',
          }}
          style={styles.profileImage}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Vaishnavi</Text>
          <Text style={styles.profileEmail}>
            abc@email.com
          </Text>
          <Text style={styles.editProfile}>Edit Profile</Text>
        </View>

        <Ionicons
          name="chevron-forward"
          size={20}
          color="#777777"
        />
      </TouchableOpacity>

    
      <Text style={styles.sectionTitle}>Preferences</Text>

      <View style={styles.sectionCard}>
      
        <View style={styles.settingItem}>
          <View style={styles.iconContainer}>
            <Ionicons
              name="notifications-outline"
              size={21}
              color="#333333"
            />
          </View>

          <View style={styles.settingText}>
            <Text style={styles.settingTitle}>Notifications</Text>
            <Text style={styles.settingSubtitle}>
              Receive latest news updates
            </Text>
          </View>

          <Switch
            value={notifications}
            onValueChange={setNotifications}
            trackColor={{
              false: '#D5D5D5',
              true: '#333333',
            }}
            thumbColor="#FFFFFF"
          />
        </View>

        <View style={styles.separator} />

        
        <View style={styles.settingItem}>
          <View style={styles.iconContainer}>
            <Ionicons
              name="moon-outline"
              size={21}
              color="#333333"
            />
          </View>

          <View style={styles.settingText}>
            <Text style={styles.settingTitle}>Dark Mode</Text>
            <Text style={styles.settingSubtitle}>
              Change app appearance
            </Text>
          </View>

          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
            trackColor={{
              false: '#D5D5D5',
              true: '#333333',
            }}
            thumbColor="#FFFFFF"
          />
        </View>
      </View>

      
      <Text style={styles.sectionTitle}>Account</Text>

      <View style={styles.sectionCard}>
        <SettingItem
          icon="person-outline"
          title="Edit Profile"
        />

        <View style={styles.separator} />

        <SettingItem
          icon="lock-closed-outline"
          title="Change Password"
        />

        <View style={styles.separator} />

        <SettingItem
          icon="language-outline"
          title="Language"
          subtitle="English"
        />
      </View>

    
      <Text style={styles.sectionTitle}>Support</Text>

      <View style={styles.sectionCard}>
        <SettingItem
          icon="help-circle-outline"
          title="Help Center"
        />

        <View style={styles.separator} />

        <SettingItem
          icon="shield-checkmark-outline"
          title="Privacy Policy"
        />

        <View style={styles.separator} />

        <SettingItem
          icon="document-text-outline"
          title="Terms and Conditions"
        />

        <View style={styles.separator} />

        <SettingItem
          icon="information-circle-outline"
          title="About App"
          subtitle="Version 1.0.0"
        />
      </View>

    
      <TouchableOpacity
        style={styles.logoutButton}
        activeOpacity={0.7}
      >
        <Ionicons
          name="log-out-outline"
          size={21}
          color="#333333"
        />

        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>

      <Text style={styles.version}>
        NEWS APP  •  VERSION 1.0.0
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
  },

  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111111',
  },

  description: {
    fontSize: 14,
    color: '#888888',
    marginTop: 6,
    marginBottom: 25,
  },

  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    padding: 16,
    borderRadius: 15,
    marginBottom: 28,
  },

  profileImage: {
    width: 58,
    height: 58,
    borderRadius: 29,
  },

  profileInfo: {
    flex: 1,
    marginLeft: 14,
  },

  profileName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#222222',
  },

  profileEmail: {
    fontSize: 13,
    color: '#888888',
    marginTop: 4,
  },

  editProfile: {
    fontSize: 12,
    color: '#555555',
    marginTop: 5,
    fontWeight: '600',
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222222',
    marginBottom: 12,
  },

  sectionCard: {
    backgroundColor: '#F7F7F7',
    borderRadius: 15,
    paddingHorizontal: 14,
    marginBottom: 25,
  },

  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },

  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 11,
    backgroundColor: '#EAEAEA',
    alignItems: 'center',
    justifyContent: 'center',
  },

  settingText: {
    flex: 1,
    marginLeft: 13,
  },

  settingTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222222',
  },

  settingSubtitle: {
    fontSize: 12,
    color: '#888888',
    marginTop: 4,
  },

  separator: {
    height: 1,
    backgroundColor: '#E5E5E5',
  },

  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EEEEEE',
    padding: 16,
    borderRadius: 13,
    marginTop: 2,
  },

  logoutText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333333',
    marginLeft: 9,
  },

  version: {
    textAlign: 'center',
    color: '#AAAAAA',
    fontSize: 11,
    marginTop: 22,
  },
});
