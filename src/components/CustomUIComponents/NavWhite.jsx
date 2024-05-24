import {View, Text, StyleSheet, Appearance, Image} from 'react-native';
import React, {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome6';
import Fonts from '../../constants/Fonts';

import {Colors} from '../../constants/Colors';

const NavWhite = ({onPress, text, pt, pb}) => {
  return (
    <View
      style={{
        ...styles.nav,
        paddingTop: pt ? pt : 11,
        alignItems: 'center',
      }}>
      <FontAwesome5
        onPress={onPress}
        name="arrow-left-long"
        size={16}
        color={'#ffffff'}
      />

      <View style={styles.navText}>
        <Text
          style={{color: '#ffffff', fontFamily: Fonts.PLUSJAKARTASANS_REGULAR}}>
          {text}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',

    paddingHorizontal: 20,
    borderColor: Colors.secondaryColor,
    alignItems: 'center',
  },
  navText: {
    flex: 1,
    marginLeft: 8,
    fontFamily: Fonts.PLUSJAKARTASANS_REGULAR,
    fontSize: 14,
    lineHeight: 19,
  },
});

export default NavWhite;
