import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export type SliderNewsItem = {
  id: number | string;
  title: string;
  description?: string;
  image: string;
  category: string;
  author?: string;
  date?: string;
};

type SliderItemProps = {
  item: SliderNewsItem;
};

const SliderItem = ({ item }: SliderItemProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.85}
      onPress={() => router.push(`/news/${item.id}` as any)}
    >
      <Image
        source={{ uri: item.image }}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.overlay} />

      <View style={styles.content}>
        <View style={styles.categoryContainer}>
          <Text style={styles.category}>
            {item.category}
          </Text>
        </View>

        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>

        {item.description ? (
          <Text style={styles.description} numberOfLines={2}>
            {item.description}
          </Text>
        ) : null}

        <View style={styles.readMoreContainer}>
          <Text style={styles.readMore}>
            Read Full Story
          </Text>

          <Ionicons
            name="arrow-forward"
            size={16}
            color="#FFFFFF"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SliderItem;

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 220,
    borderRadius: 16,
    overflow: 'hidden',
    marginRight: 15,
    backgroundColor: '#EEEEEE',
  },

  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },

  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.45)',
  },

  content: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 16,
  },

  categoryContainer: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255,255,255,0.9)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
    marginBottom: 9,
  },

  category: {
    color: '#222222',
    fontSize: 11,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  title: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 24,
  },

  description: {
    color: '#EEEEEE',
    fontSize: 12,
    marginTop: 6,
    lineHeight: 17,
  },

  readMoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    gap: 7,
  },

  readMore: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
});
