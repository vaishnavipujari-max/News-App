import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

import newsData from '@/constants/NewsData';
import NewsActions from '@/components/NewsActions';

const categories = [
  'All',
  'Technology',
  'Sports',
  'Business',
  'Health',
  'Education',
  'Science',
  'Entertainment',
  'World',
];

const countries = [
  'All',
  'India',
  'USA',
  'UK',
  'Canada',
  'Australia',
  'Japan',
  'Germany',
  'France',
];

export default function DiscoverScreen() {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [showResults, setShowResults] = useState(false);

  const filteredNews = newsData.filter((item) => {
    const matchesSearch =
      searchText.trim() === '' ||
      item.title.toLowerCase().includes(searchText.toLowerCase()) ||
      item.description.toLowerCase().includes(searchText.toLowerCase());

    const matchesCategory =
      selectedCategory === 'All' ||
      item.category.toLowerCase() === selectedCategory.toLowerCase();

    const matchesCountry =
      selectedCountry === 'All' ||
      item.country.toLowerCase() === selectedCountry.toLowerCase();

    return matchesSearch && matchesCategory && matchesCountry;
  });

  const handleSearch = () => {
    setShowResults(true);
  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.heading}>Discover</Text>
        <Text style={styles.subtitle}>
          Find the news that matters to you
        </Text>
      </View>

      {/* Search Input */}
      <View style={styles.searchContainer}>
        <Ionicons
          name="search-outline"
          size={22}
          color="#888888"
        />

        <TextInput
          style={styles.searchInput}
          placeholder="Search news..."
          placeholderTextColor="#999999"
          value={searchText}
          onChangeText={(text) => {
            setSearchText(text);
            setShowResults(false);
          }}
        />

        {searchText.length > 0 && (
          <TouchableOpacity
            onPress={() => {
              setSearchText('');
              setShowResults(false);
            }}
          >
            <Ionicons
              name="close-circle"
              size={21}
              color="#999999"
            />
          </TouchableOpacity>
        )}
      </View>

      {/* Categories */}
      <Text style={styles.sectionTitle}>Categories</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalList}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category &&
                styles.selectedButton,
            ]}
            onPress={() => {
              setSelectedCategory(category);
              setShowResults(false);
            }}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category &&
                  styles.selectedText,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Countries */}
      <Text style={styles.sectionTitle}>Select Country</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalList}
      >
        {countries.map((country) => (
          <TouchableOpacity
            key={country}
            style={[
              styles.countryButton,
              selectedCountry === country &&
                styles.selectedButton,
            ]}
            onPress={() => {
              setSelectedCountry(country);
              setShowResults(false);
            }}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCountry === country &&
                  styles.selectedText,
              ]}
            >
              {country}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Search Button */}
      <TouchableOpacity
        style={styles.searchButton}
        onPress={handleSearch}
      >
        <Ionicons
          name="search"
          size={19}
          color="#FFFFFF"
        />

        <Text style={styles.searchButtonText}>
          Search News
        </Text>
      </TouchableOpacity>

      {/* Search Results */}
      {showResults && (
        <View style={styles.resultsContainer}>
          <Text style={styles.resultsTitle}>
            Search Results ({filteredNews.length})
          </Text>

          {filteredNews.length > 0 ? (
            filteredNews.map((item) => (
              <View
                key={item.id}
                style={styles.newsCard}
              >
                <TouchableOpacity
                  style={styles.articleButton}
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

                    <Text style={styles.countryText}>
                      {item.country}
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
                size={45}
                color="#AAAAAA"
              />

              <Text style={styles.emptyTitle}>
                No News Found
              </Text>

              <Text style={styles.emptyText}>
                Try another keyword, category or country.
              </Text>
            </View>
          )}
        </View>
      )}

      <View style={{ height: 35 }} />
    </ScrollView>
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

  heading: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#222222',
  },

  subtitle: {
    fontSize: 13,
    color: '#888888',
    marginTop: 5,
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
    marginHorizontal: 18,
    paddingHorizontal: 14,
    height: 52,
    borderRadius: 12,
  },

  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#222222',
    marginLeft: 10,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222222',
    marginTop: 25,
    marginBottom: 13,
    marginHorizontal: 18,
  },

  horizontalList: {
    paddingHorizontal: 18,
    gap: 10,
  },

  categoryButton: {
    paddingHorizontal: 17,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#F2F2F2',
  },

  countryButton: {
    paddingHorizontal: 17,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#F2F2F2',
  },

  selectedButton: {
    backgroundColor: '#E63946',
  },

  categoryText: {
    fontSize: 13,
    color: '#555555',
    fontWeight: '500',
  },

  selectedText: {
    color: '#FFFFFF',
  },

  searchButton: {
    flexDirection: 'row',
    backgroundColor: '#E63946',
    marginHorizontal: 18,
    marginTop: 25,
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 9,
  },

  searchButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },

  resultsContainer: {
    marginTop: 25,
  },

  resultsTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#222222',
    marginHorizontal: 18,
    marginBottom: 15,
  },

  newsCard: {
    marginHorizontal: 16,
    marginBottom: 16,
    backgroundColor: '#F5F5F5',
    borderRadius: 14,
    overflow: 'hidden',
  },

  articleButton: {
    flexDirection: 'row',
    minHeight: 135,
  },

  newsImage: {
    width: 110,
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

  countryText: {
    fontSize: 11,
    color: '#999999',
    marginTop: 6,
  },

  actionsContainer: {
    paddingHorizontal: 12,
    paddingBottom: 5,
    borderTopWidth: 1,
    borderTopColor: '#EAEAEA',
  },

  emptyContainer: {
    alignItems: 'center',
    padding: 35,
  },

  emptyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginTop: 12,
  },

  emptyText: {
    fontSize: 13,
    color: '#888888',
    marginTop: 7,
    textAlign: 'center',
  },
});
