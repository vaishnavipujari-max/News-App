import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import {
  useLocalSearchParams,
  router,
  Stack,
} from 'expo-router';

import { Ionicons } from '@expo/vector-icons';

import newsData from '@/constants/NewsData';

const NewsDetailsScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const article = newsData.find(
    (item) => item.id === Number(id)
  );

  if (!article) {
    return (
      <View style={styles.notFound}>
        <Text style={styles.notFoundText}>
          News article not found
        </Text>

        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <StatusBar barStyle="dark-content" />

      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >
      
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: article.image }}
            style={styles.image}
            resizeMode="cover"
          />

          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons
              name="arrow-back"
              size={24}
              color="#FFFFFF"
            />
          </TouchableOpacity>
        </View>

      
        <View style={styles.imageDescriptionContainer}>
          <Text style={styles.imageDescriptionTitle}>
            Image Description
          </Text>

          <Text style={styles.imageDescription}>
            {article.imageDescription}
          </Text>
        </View>

        
        <View style={styles.content}>

          <Text style={styles.category}>
            {article.category}
          </Text>

          <Text style={styles.title}>
            {article.title}
          </Text>

        
          <View style={styles.infoContainer}>
            <View style={styles.authorContainer}>
              <Ionicons
                name="person-circle-outline"
                size={20}
                color="#777777"
              />

              <Text style={styles.author}>
                {article.author}
              </Text>
            </View>

            <View style={styles.dateContainer}>
              <Ionicons
                name="calendar-outline"
                size={18}
                color="#777777"
              />

              <Text style={styles.date}>
                {article.date}
              </Text>
            </View>
          </View>

          <View style={styles.divider} />

          
          <Text style={styles.description}>
            {article.description}
          </Text>

      
          <Text style={styles.story}>
            {article.content}
          </Text>

          <Text style={styles.endText}>
            — End of Article —
          </Text>

        </View>
      </ScrollView>
    </>
  );
};

export default NewsDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  imageContainer: {
    width: '100%',
    height: 280,
    position: 'relative',
  },

  image: {
    width: '100%',
    height: '100%',
  },

  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    width: 42,
    height: 42,
    borderRadius: 25,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageDescriptionContainer: {
    backgroundColor: '#F8F8F8',
    padding: 15,
    marginHorizontal: 20,
    marginTop: 15,
    borderRadius: 12,
  },

  imageDescriptionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222222',
    marginBottom: 8,
  },

  imageDescription: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 23,
  },

  content: {
    padding: 20,
  },

  category: {
    color: '#E63946',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 12,
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#222222',
    lineHeight: 34,
    marginBottom: 18,
  },

  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 10,
  },

  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  author: {
    fontSize: 13,
    color: '#666666',
  },

  date: {
    fontSize: 13,
    color: '#666666',
  },

  divider: {
    height: 1,
    backgroundColor: '#EEEEEE',
    marginVertical: 22,
  },

  description: {
    fontSize: 17,
    fontWeight: '600',
    color: '#333333',
    lineHeight: 27,
    marginBottom: 18,
  },

  story: {
    fontSize: 16,
    color: '#555555',
    lineHeight: 29,
    textAlign: 'justify',
  },

  endText: {
    textAlign: 'center',
    color: '#999999',
    fontSize: 14,
    marginTop: 30,
    marginBottom: 25,
  },

  notFound: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  notFoundText: {
    fontSize: 20,
    color: '#222222',
    marginBottom: 15,
  },

  backText: {
    color: '#E63946',
    fontSize: 16,
  },
});
