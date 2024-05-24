import {View, Text, StyleSheet, Appearance, Image} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fonts from '../../constants/Fonts';

import {Colors} from '../../constants/Colors';

const CustomNav = ({onPress, text, pt, pb}) => {
  return (
    <View
      style={{
        ...styles.nav,
        paddingBottom: pb ? pb : 10,
        paddingTop: pt ? pt : 24,
      }}>
      <Ionicons onPress={onPress} name="chevron-back" color={'#000000'} />

      <View style={styles.navText}>
        <Text>{text}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    paddingBottom: 10,
    paddingTop: 48,
    paddingHorizontal: 20,
    borderColor: Colors.secondaryColor,
  },
  navText: {
    flex: 1,

    fontFamily: Fonts.PLUSJAKARTASANS_REGULAR,
    fontSize: 14,
    lineHeight: 19,
  },
});

export default CustomNav;
