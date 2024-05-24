import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

export default function SoftBtn({btnText, func}) {
  const [isActive, setIsActive] = useState(false);

  const handlePressIn = () => {
    setIsActive(true);
  };

  const handlePressOut = () => {
    setIsActive(false);
  };
  return (
    <TouchableOpacity
      style={[
        styles.btnContainer,
        isActive && styles.activeBtnContainer, // Apply active style conditionally
      ]}
      onPress={func}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={1}>
      <Text style={styles.btnText}> {btnText} </Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: Colors.softBtnBgcolor,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 100,
  },
  activeBtnContainer: {
    borderWidth: 2,
    borderColor: Colors.ActiveBtn,
  },
  btnText: {
    fontSize: 12,
    color: Colors.secondaryColor,
    fontFamily: Fonts.PLUSJAKARTASANS_REGULAR,
  },
});
