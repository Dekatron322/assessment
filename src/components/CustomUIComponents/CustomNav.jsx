import {View, Text, StyleSheet, Appearance, Image} from 'react-native';
import React, {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome6';
import Fonts from '../../constants/Fonts';

import {Colors} from '../../constants/Colors';

const CustomNav = ({onPress, text, pt, pb}) => {
  return (
    <View
      style={{
        ...styles.nav,
        paddingTop: pt ? pb : 11,
        alignItems: 'center',
      }}>
      <View
        style={{
          backgroundColor: 'white',
          height: 32,
          width: 32,
          borderRadius: 100,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <FontAwesome5
          onPress={onPress}
          name="chevron-left"
          size={16}
          color={'#000000'}
        />
      </View>

      <View style={styles.navText}>
        <Text
          style={{
            color: '#131313',
            textAlign: 'center',
            fontFamily: Fonts.INTER_SEMIBOLD,
          }}>
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
    textAlignVertical: 'center', // Added to vertically center text
  },
});

export default CustomNav;
