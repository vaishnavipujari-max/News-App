import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { Stack, router, useLocalSearchParams } from 'expo-router';

import NewsActions from '@/components/NewsActions';
import newsData from '@/constants/NewsData';

export default function SearchScreen() {
  const params = useLocalSearchParams<{
    query?: string;
    category?: string;
    country?: string;
  }>();

  const query = Array.isArray(params.query)
    ? params.query[0]
    : params.query || '';

  const category = Array.isArray(params.category)
    ? params.category[0]
    : params.category || 'All';

  const country = Array.isArray(params.country)
    ? params.country[0]
    : params.country || 'All';

  const results = newsData.filter((item) => {
    const matchesSearch =
      query.trim() === '' ||
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase());

    const matchesCategory =
      category === 'All' ||
      item.category.toLowerCase() === category.toLowerCase();

    const matchesCountry =
      country === 'All' ||
      item.country.toLowerCase() === country.toLowerCase();

    return matchesSearch && matchesCategory && matchesCountry;
  });

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: 'Search Results',
          headerShown: true,
          headerTintColor: '#E63946',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Ionicons
            name="arrow-back"
            size={23}
            color="#222222"
          />
        </TouchableOpacity>

        <View style={styles.headerContent}>
          <Text style={styles.heading}>
            Search Results
          </Text>

          <Text style={styles.subtitle}>
            {results.length} articles found
          </Text>
        </View>
      </View>

      
      <View style={styles.filterContainer}>
        <Text style={styles.filterText}>
          Category: {category}
        </Text>

        <Text style={styles.filterText}>
          Country: {country}
        </Text>

        {query.length > 0 && (
          <Text style={styles.filterText}>
            Search: {query}
          </Text>
        )}
      </View>

    
      {results.length > 0 ? (
        <FlatList
          data={results}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <View style={styles.newsCard}>
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
          )}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Ionicons
            name="search-outline"
            size={60}
            color="#BBBBBB"
          />

          <Text style={styles.emptyTitle}>
            No News Found
          </Text>

          <Text style={styles.emptyText}>
            Try searching with another keyword or changing your filters.
          </Text>

          <TouchableOpacity
            style={styles.backToDiscover}
            onPress={() => router.back()}
          >
            <Text style={styles.backToDiscoverText}>
              Back to Discover
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
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingTop: 55,
    paddingBottom: 15,
  },

  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F2F2F2',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerContent: {
    marginLeft: 12,
  },

  heading: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#222222',
  },

  subtitle: {
    fontSize: 12,
    color: '#888888',
    marginTop: 4,
  },

  filterContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 18,
    gap: 8,
    marginBottom: 15,
  },

  filterText: {
    backgroundColor: '#F3F3F3',
    color: '#555555',
    fontSize: 11,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 15,
  },

  list: {
    paddingHorizontal: 16,
    paddingBottom: 30,
  },

  newsCard: {
    backgroundColor: '#F5F5F5',
    borderRadius: 14,
    marginBottom: 16,
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },

  emptyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222222',
    marginTop: 15,
  },

  emptyText: {
    fontSize: 13,
    color: '#888888',
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 20,
  },

  backToDiscover: {
    backgroundColor: '#E63946',
    paddingHorizontal: 22,
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 20,
  },

  backToDiscoverText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
