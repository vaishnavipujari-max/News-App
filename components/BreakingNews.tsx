import { useState } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { NewsDataType } from '@/app/types';
import { router } from 'expo-router';

import Animated, {
  useAnimatedRef,
  useSharedValue,
} from 'react-native-reanimated';

type Props = {
  newsList: Array<NewsDataType>;
};

const BreakingNews = ({ newsList }: Props) => {
  const [data, setData] = useState(newsList);
  const [paginationIndex, setPaginationIndex] = useState(0);
  const scrollX = useSharedValue(0);
  const ref = useAnimatedRef<Animated.FlatList<any>>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Breaking News</Text>

      <View style={styles.sliderWrapper}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => String(item.id ?? index)}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => router.push(`/news/${item.id}` as any)}
            >
              <Image
                source={{ uri: item.image }}
                style={styles.image}
              />

              <View style={styles.overlay}>
                <Text style={styles.category}>
                  {item.category}
                </Text>

                <Text style={styles.title} numberOfLines={2}>
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />
      </View>
    </View>
  );
};

export default BreakingNews;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },

  sliderWrapper: {
    marginTop: 10,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 15,
  },

  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111',
  },

  seeAll: {
    fontSize: 14,
    color: '#E53935',
    fontWeight: '600',
  },

  card: {
    width: 280,
    height: 190,
    marginLeft: 20,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#ddd',
  },

  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },

  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 15,
    backgroundColor: 'rgba(0,0,0,0.35)',
  },

  category: {
    color: '#fff',
    backgroundColor: '#E53935',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    fontSize: 11,
    marginBottom: 8,
  },

  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
