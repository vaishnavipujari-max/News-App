import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

type CheckBoxProps = {
  label: string;
  checked: boolean;
  onPress: () => void;
};

const CheckBox = ({
  label,
  checked,
  onPress,
}: CheckBoxProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}
    >
      
      <View
        style={[
          styles.checkbox,
          checked && styles.checkedBox,
        ]}
      >
        {checked && (
          <Ionicons
            name="checkmark"
            size={14}
            color="#FFFFFF"
          />
        )}
      </View>

      
      <Text
        style={[
          styles.label,
          checked && styles.selectedLabel,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 9,
    paddingHorizontal: 12,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    marginRight: 8,
    marginBottom: 8,
  },

  checkbox: {
    width: 19,
    height: 19,
    borderWidth: 1.5,
    borderColor: '#999999',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },

  checkedBox: {
    backgroundColor: '#333333',
    borderColor: '#333333',
  },

  label: {
    fontSize: 13,
    color: '#555555',
    marginLeft: 8,
    fontWeight: '500',
  },

  selectedLabel: {
    color: '#222222',
    fontWeight: 'bold',
  },
});
