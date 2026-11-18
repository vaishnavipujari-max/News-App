import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNews } from '@/context/NewsContext';

type Props = {
  id: number;
};

export default function NewsActions({ id }: Props) {
  const { toggleLike, toggleSave, isLiked, isSaved } = useNews();

  const liked = isLiked(id);
  const saved = isSaved(id);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => toggleLike(id)}
      >
        <Ionicons
          name={liked ? 'heart' : 'heart-outline'}
          size={25}
          color={liked ? '#E63946' : '#555555'}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => toggleSave(id)}
      >
        <Ionicons
          name={saved ? 'bookmark' : 'bookmark-outline'}
          size={25}
          color={saved ? '#E63946' : '#555555'}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 10,
    gap: 20,
  },
  button: {
    padding: 8,
  },
});
