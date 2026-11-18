import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

type SearchBarProps = {
  withHorizontalPadding?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
};

const SearchBar = ({
  withHorizontalPadding = true,
  value,
  onChangeText,
}: SearchBarProps) => {

  return (
    <View
      style={[
        styles.container,
        !withHorizontalPadding && styles.noHorizontalMargin,
      ]}
    >
      <Ionicons
        name="search-outline"
        size={22}
        color="#888"
      />

      <TextInput
        style={styles.input}
        placeholder="Search news..."
        placeholderTextColor="#999"
        returnKeyType="search"
        value={value}
        onChangeText={onChangeText}
      />

      <Ionicons
        name="options-outline"
        size={22}
        color="#555"
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    height: 50,
    borderRadius: 12,
    paddingHorizontal: 15,
    marginHorizontal: 20,
    marginVertical: 15,
  },

  noHorizontalMargin: {
    marginHorizontal: 0,
  },

  input: {
    flex: 1,
    fontSize: 15,
    marginLeft: 10,
    color: '#222',
  },

});
