import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { router, usePathname } from 'expo-router';

import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';

const tabIcons = {
  index: 'home-outline',
  discover: 'compass-outline',
  saved: 'bookmark-outline',
  settings: 'settings-outline',
} as const;

export default function TabBar({ state }: BottomTabBarProps) {
  const pathname = usePathname();

  const handleNavigation = (routeName: string) => {
    if (routeName === 'index') {
      router.navigate('/(tabs)');
    } else {
      router.navigate(`/(tabs)/${routeName}` as any);
    }
  };

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const isFocused =
          route.name === 'index'
            ? pathname === '/(tabs)' || pathname === '/'
            : pathname.endsWith(`/${route.name}`);

        const iconName =
          tabIcons[route.name as keyof typeof tabIcons] ||
          'ellipse-outline';

        return (
          <Pressable
            key={route.key}
            style={styles.tabButton}
            onPress={() => handleNavigation(route.name)}
            accessibilityRole="button"
            accessibilityState={{ selected: isFocused }}
          >
            <View
              style={[
                styles.iconContainer,
                isFocused && styles.activeIconContainer,
              ]}
            >
              <Ionicons
                name={iconName}
                size={24}
                color={isFocused ? '#E53935' : '#999999'}
              />
            </View>

            <Text
              style={[
                styles.label,
                isFocused && styles.activeLabel,
              ]}
            >
              {route.name === 'index'
                ? 'Home'
                : route.name.charAt(0).toUpperCase() +
                  route.name.slice(1)}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 75,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 5,
  },

  tabButton: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },

  iconContainer: {
    width: 45,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },

  activeIconContainer: {
    backgroundColor: '#FDECEC',
  },

  label: {
    fontSize: 11,
    fontWeight: '500',
    color: '#999999',
  },

  activeLabel: {
    color: '#E53935',
    fontWeight: '700',
  },
});
