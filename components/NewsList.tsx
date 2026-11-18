import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';


export type NewsItem = {
  id: number | string;
  title: string;
  description: string;
  image: string;
  category: string;
  author?: string;
  date?: string;
};


type NewsListProps = {
  news: NewsItem[];
  horizontal?: boolean;
  showDescription?: boolean;
};

const NewsList = ({
  news,
  horizontal = false,
  showDescription = true,
}: NewsListProps) => {


  const renderNewsItem = ({ item }: { item: NewsItem }) => {
    return (
      <TouchableOpacity
        style={[
          styles.newsCard,
          horizontal && styles.horizontalCard,
        ]}
        activeOpacity={0.8}
        onPress={() => router.push(`/news/${item.id}` as any)}
      >
    
        <Image
          source={{ uri: item.image }}
          style={[
            styles.newsImage,
            horizontal && styles.horizontalImage,
          ]}
          resizeMode="cover"
        />

        
        <View style={styles.newsContent}>

        
          <Text style={styles.category}>
            {item.category}
          </Text>

          
          <Text
            style={styles.title}
            numberOfLines={2}
          >
            {item.title}
          </Text>

          
          {showDescription && (
            <Text
              style={styles.description}
              numberOfLines={2}
            >
              {item.description}
            </Text>
          )}

          
          <View style={styles.readMoreContainer}>
            <Text style={styles.readMore}>
              Read more
            </Text>

            <Ionicons
              name="arrow-forward"
              size={14}
              color="#333333"
            />
          </View>

        </View>
      </TouchableOpacity>
    );
  };

  return (
    
    <FlatList
      data={news}
      keyExtractor={(item) => String(item.id)}
      renderItem={renderNewsItem}
      horizontal={horizontal}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.listContainer}
      ListEmptyComponent={
        <View style={styles.emptyContainer}>
          <Ionicons
            name="newspaper-outline"
            size={45}
            color="#AAAAAA"
          />

          <Text style={styles.emptyTitle}>
            No News Available
          </Text>

          <Text style={styles.emptyDescription}>
            Please check back later.
          </Text>
        </View>
      }
    />
  );
};

export default NewsList;


const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: 20,
  },

  newsCard: {
    flexDirection: 'row',
    backgroundColor: '#F6F6F6',
    borderRadius: 14,
    marginBottom: 15,
    overflow: 'hidden',
    minHeight: 130,
  },

  horizontalCard: {
    width: 290,
    flexDirection: 'column',
    marginRight: 15,
    marginBottom: 10,
  },

  newsImage: {
    width: 115,
    height: 145,
    backgroundColor: '#E5E5E5',
  },

  horizontalImage: {
    width: '100%',
    height: 160,
  },

  newsContent: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
  },

  category: {
    fontSize: 11,
    fontWeight: '600',
    color: '#777777',
    textTransform: 'uppercase',
    marginBottom: 6,
  },

  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#222222',
    lineHeight: 20,
  },

  description: {
    fontSize: 12,
    color: '#777777',
    marginTop: 6,
    lineHeight: 17,
  },

  readMoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 9,
    gap: 5,
  },

  readMore: {
    fontSize: 12,
    color: '#333333',
    fontWeight: '600',
  },

  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 35,
  },

  emptyTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#333333',
    marginTop: 12,
  },

  emptyDescription: {
    fontSize: 13,
    color: '#888888',
    marginTop: 5,
  },
});
