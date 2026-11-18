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

import newsData from '@/constants/NewsData';
import { useNews } from '@/context/NewsContext';
import NewsActions from '@/components/NewsActions';

export default function SavedScreen() {
  const { savedIds } = useNews();

  // Get only the articles that have been bookmarked
  const savedNews = newsData.filter((item) =>
    savedIds.includes(item.id)
  );

  return (
    <View style={styles.container}>

      
      <View style={styles.header}>
        <Text style={styles.title}>Saved News</Text>

        <Text style={styles.subtitle}>
          {savedNews.length} Saved Articles
        </Text>
      </View>

      
      {savedNews.length > 0 ? (
        <FlatList
          data={savedNews}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <View style={styles.newsCard}>

              <TouchableOpacity
                style={styles.articleButton}
                activeOpacity={0.8}
                onPress={() =>
                  router.push(`/news/${item.id}` as any)
                }
              >
                <Image
                  source={{ uri: item.image }}
                  style={styles.newsImage}
                  resizeMode="cover"
                />

                <View style={styles.newsContent}>
                  <Text style={styles.category}>
                    {item.category}
                  </Text>

                  <Text style={styles.newsTitle}>
                    {item.title}
                  </Text>

                  <Text style={styles.description}>
                    {item.description}
                  </Text>
                </View>
              </TouchableOpacity>

            
              <View style={styles.actionsContainer}>
                <NewsActions id={item.id} />
              </View>

            </View>
          )}
        />
      ) : (

      
        <View style={styles.emptyContainer}>
          <Ionicons
            name="bookmark-outline"
            size={65}
            color="#BBBBBB"
          />

          <Text style={styles.emptyTitle}>
            No Saved News Yet
          </Text>

          <Text style={styles.emptyText}>
            Articles you bookmark will appear here.
          </Text>

          <TouchableOpacity
            style={styles.exploreButton}
            onPress={() => router.push('/(tabs)/discover')}
          >
            <Text style={styles.exploreButtonText}>
              Explore News
            </Text>
          </TouchableOpacity>
        </View>

      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#222222',
  },

  subtitle: {
    fontSize: 13,
    color: '#888888',
    marginTop: 6,
  },

  list: {
    paddingHorizontal: 16,
    paddingBottom: 30,
  },

  newsCard: {
    backgroundColor: '#F5F5F5',
    borderRadius: 14,
    overflow: 'hidden',
    marginBottom: 16,
  },

  articleButton: {
    flexDirection: 'row',
    minHeight: 135,
  },

  newsImage: {
    width: 115,
    height: 150,
    backgroundColor: '#EEEEEE',
  },

  newsContent: {
    flex: 1,
    padding: 11,
    justifyContent: 'center',
  },

  category: {
    fontSize: 11,
    color: '#E63946',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 5,
  },

  newsTitle: {
    fontSize: 14,
    color: '#222222',
    fontWeight: 'bold',
    lineHeight: 19,
  },

  description: {
    fontSize: 12,
    color: '#777777',
    marginTop: 5,
    lineHeight: 17,
  },

  actionsContainer: {
    paddingHorizontal: 12,
    paddingBottom: 5,
    borderTopWidth: 1,
    borderTopColor: '#EAEAEA',
  },

  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },

  emptyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222222',
    marginTop: 18,
  },

  emptyText: {
    fontSize: 14,
    color: '#888888',
    marginTop: 8,
    textAlign: 'center',
  },

  exploreButton: {
    backgroundColor: '#E63946',
    paddingHorizontal: 25,
    paddingVertical: 13,
    borderRadius: 10,
    marginTop: 22,
  },

  exploreButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
