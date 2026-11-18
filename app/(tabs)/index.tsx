import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import SliderItem, { SliderNewsItem,} from '@/components/SliderItem';
import Categories from '@/components/Categories';
import NewsActions from '@/components/NewsActions';
import newsData from '@/constants/NewsData';

type NewsItem = SliderNewsItem;

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const allNews: NewsItem[] = Array.isArray(newsData)
    ? newsData
    : [];

  const trendingNews = allNews;

  const filteredNews = allNews.filter((item) => {
    if (selectedCategory === 'All') {
      return true;
    }

    return (
      item.category?.toLowerCase() ===
      selectedCategory.toLowerCase()
    );
  });

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
    
      <View style={styles.header}>
        <View style={styles.profileSection}>
          <Image
            source={{
              uri: 'https://i.pravatar.cc/150?img=47',
            }}
            style={styles.profileImage}
          />

          <View>
            <Text style={styles.welcomeText}>Welcome</Text>
            <Text style={styles.username}>Vaishnavi</Text>
          </View>
        </View>

      </View>

      
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Trending Right Now
          </Text>

          <Ionicons
            name="trending-up-outline"
            size={23}
            color="#222222"
          />
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.sliderContainer}
          nestedScrollEnabled
        >
          {trendingNews.map((item) => (
            <SliderItem
              key={item.id}
              item={item}
            />
          ))}
        </ScrollView>

        {trendingNews.length === 0 && (
          <Text style={styles.emptyText}>
            No trending news available.
          </Text>
        )}
      </View>

      
      <View style={styles.categorySection}>
        <Categories
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </View>

      
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Latest News
          </Text>

          <Text style={styles.newsCount}>
            {filteredNews.length} Articles
          </Text>
        </View>

        {filteredNews.length > 0 ? (
          filteredNews.map((item) => (
            <View
              key={item.id}
              style={styles.newsCard}
            >
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
                  <Text style={styles.newsCategory}>
                    {item.category}
                  </Text>

                  <Text style={styles.newsTitle}>
                    {item.title}
                  </Text>

                  <Text style={styles.newsDescription}>
                    {item.description}
                  </Text>
                </View>
              </TouchableOpacity>

          
              <View style={styles.actionsContainer}>
                <NewsActions id={item.id} />
              </View>
            </View>
          ))
        ) : (
          <View style={styles.emptyContainer}>
            <Ionicons
              name="newspaper-outline"
              size={40}
              color="#999999"
            />

            <Text style={styles.emptyText}>
              No news available in this category.
            </Text>
          </View>
        )}
      </View>

      <View style={{ height: 30 }} />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingTop: 55,
    paddingBottom: 20,
  },

  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  profileImage: {
    width: 48,
    height: 48,
    borderRadius: 25,
    backgroundColor: '#EEEEEE',
  },

  welcomeText: {
    fontSize: 13,
    color: '#888888',
  },

  username: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#222222',
    marginTop: 3,
  },


  section: {
    marginTop: 15,
    marginBottom: 15,
  },

  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    marginBottom: 15,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#222222',
  },

  sliderContainer: {
    paddingHorizontal: 18,
    paddingRight: 18,
  },

  categorySection: {
    marginTop: 5,
  },

  newsCount: {
    fontSize: 12,
    color: '#888888',
  },

  newsCard: {
    marginHorizontal: 16,
    marginBottom: 15,
    backgroundColor: '#F5F5F5',
    borderRadius: 14,
    overflow: 'hidden',
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

  newsCategory: {
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

  newsDescription: {
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
    alignItems: 'center',
    padding: 30,
  },

  emptyText: {
    fontSize: 13,
    color: '#888888',
    marginTop: 10,
    textAlign: 'center',
  },
});
