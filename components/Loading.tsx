import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

type LoadingProps = {
  message?: string;
};

const Loading = ({
  message = 'Loading news...',
}: LoadingProps) => {
  return (
    <View style={styles.container}>
      
      <View style={styles.iconContainer}>
        <Ionicons
          name="newspaper-outline"
          size={45}
          color="#222222"
        />
      </View>

      
      <Text style={styles.title}>News App</Text>

      <Text style={styles.subtitle}>
        Stay informed. Stay updated.
      </Text>

    
      <ActivityIndicator
        size="large"
        color="#333333"
        style={styles.spinner}
      />

      
      <Text style={styles.loadingText}>
        {message}
      </Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  iconContainer: {
    width: 85,
    height: 85,
    borderRadius: 22,
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#222222',
  },

  subtitle: {
    fontSize: 13,
    color: '#888888',
    marginTop: 7,
  },

  spinner: {
    marginTop: 35,
  },

  loadingText: {
    fontSize: 14,
    color: '#777777',
    marginTop: 15,
  },
});
