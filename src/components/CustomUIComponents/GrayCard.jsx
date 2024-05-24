import {StyleSheet, View} from 'react-native';
import React from 'react';

export default function GrayCard({children}) {
  return <View style={styles.cardContainer}>{children}</View>;
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'rgba(40, 22, 167, 0.7)',
    borderRadius: 24,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
