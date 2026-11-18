import React, { useEffect } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,             
  interpolate,
} from 'react-native-reanimated';

import { Colors } from '@/constants/Colors';

type Props = {
  onPress: () => void;
  onLongPress: () => void;
  isFocused: boolean;
  routeName: string;
  label: string;
};

const tabIcons: Record<string, keyof typeof Ionicons.glyphMap> = {
  index: 'home-outline',
  discover: 'compass-outline',
  saved: 'bookmark-outline',
  settings: 'settings-outline',
};

const TabBarButton = ({
  onPress,
  onLongPress,
  isFocused,
  routeName,
  label,
}: Props) => {
  const animation = useSharedValue(isFocused ? 1 : 0);

  useEffect(() => {
    animation.value = withSpring(
      isFocused ? 1 : 0,
      {
        damping: 12,
        stiffness: 150,
      }
    );
  }, [isFocused]);

  const animatedIconStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(
          animation.value,
          [0, 1],
          [1, 1.2]
        ),
      },
    ],
  }));

  const animatedLabelStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      animation.value,
      [0, 1],
      [0.7, 1]
    ),
  }));

  const iconName = tabIcons[routeName] ?? 'ellipse-outline';

  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}
    >
      <Animated.View style={animatedIconStyle}>
        <Ionicons
          name={iconName}
          size={24}
          color={isFocused ? Colors.primary : Colors.gray}
        />
      </Animated.View>

      <Animated.Text
        style={[
          styles.label,
          {
            color: isFocused ? Colors.primary : Colors.gray,
          },
          animatedLabelStyle,
        ]}
        numberOfLines={1}
      >
        {label}
      </Animated.Text>
    </Pressable>
  );
};

export default TabBarButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },

  label: {
    fontSize: 11,
    fontWeight: '600',
  },
});
