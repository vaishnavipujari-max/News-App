import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {

  
  if (totalPages <= 1) {
    return null;
  }

  
  const pages = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <View style={styles.container}>

      
      <TouchableOpacity
        style={[
          styles.arrowButton,
          currentPage === 1 && styles.disabledButton,
        ]}
        disabled={currentPage === 1}
        onPress={() => onPageChange(currentPage - 1)}
      >
        <Ionicons
          name="chevron-back"
          size={20}
          color={currentPage === 1 ? '#BBBBBB' : '#222222'}
        />
      </TouchableOpacity>

      
      <View style={styles.pagesContainer}>
        {pages.map((page) => (
          <TouchableOpacity
            key={page}
            style={[
              styles.pageButton,
              currentPage === page && styles.activePage,
            ]}
            onPress={() => onPageChange(page)}
          >
            <Text
              style={[
                styles.pageText,
                currentPage === page && styles.activePageText,
              ]}
            >
              {page}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      
      <TouchableOpacity
        style={[
          styles.arrowButton,
          currentPage === totalPages && styles.disabledButton,
        ]}
        disabled={currentPage === totalPages}
        onPress={() => onPageChange(currentPage + 1)}
      >
        <Ionicons
          name="chevron-forward"
          size={20}
          color={currentPage === totalPages ? '#BBBBBB' : '#222222'}
        />
      </TouchableOpacity>

    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    gap: 8,
  },

  pagesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  arrowButton: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
    justifyContent: 'center',
  },

  disabledButton: {
    opacity: 0.5,
  },

  pageButton: {
    width: 36,
    height: 36,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F3F3',
  },

  activePage: {
    backgroundColor: '#222222',
  },

  pageText: {
    fontSize: 14,
    color: '#444444',
    fontWeight: '500',
  },

  activePageText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
