import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';


type CategoryItem = {
  name: string;
  icon: keyof typeof Ionicons.glyphMap;
};


type CategoriesProps = {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
};


const categories: CategoryItem[] = [
  { name: 'All', icon: 'apps-outline' },
  { name: 'Technology', icon: 'laptop-outline' },
  { name: 'Business', icon: 'briefcase-outline' },
  { name: 'Sports', icon: 'football-outline' },
  { name: 'Health', icon: 'heart-outline' },
  { name: 'Entertainment', icon: 'film-outline' },
  { name: 'Politics', icon: 'newspaper-outline' },
  { name: 'Science', icon: 'flask-outline' },
];

const Categories = ({
  selectedCategory,
  onSelectCategory,
}: CategoriesProps) => {
  return (
    <View style={styles.container}>

      
      <Text style={styles.heading}>
        Categories
      </Text>

      
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      >
        {categories.map((item) => {
          const isSelected = selectedCategory === item.name;

          return (
            <TouchableOpacity
              key={item.name}
              style={[
                styles.categoryButton,
                isSelected && styles.selectedButton,
              ]}
              activeOpacity={0.7}
              onPress={() => onSelectCategory(item.name)}
            >
              <Ionicons
                name={item.icon}
                size={17}
                color={isSelected ? '#FFFFFF' : '#444444'}
              />

              <Text
                style={[
                  styles.categoryText,
                  isSelected && styles.selectedText,
                ]}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

    </View>
  );
};

export default Categories;


const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 15,
  },

  heading: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#222222',
    marginBottom: 14,
    paddingHorizontal: 16,
  },

  listContainer: {
    paddingHorizontal: 16,
    gap: 10,
  },

  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 20,
    gap: 7,
  },

  selectedButton: {
    backgroundColor: '#222222',
  },

  categoryText: {
    fontSize: 13,
    color: '#444444',
    fontWeight: '500',
  },

  selectedText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
