import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

const CustomButton = ({onPress, text, type, loading}) => {
  return (
    <View style={styles.containerBottom}>
      <Pressable
        onPress={onPress}
        style={[styles.container, styles[`container_${type}`]]}>
        {loading ? null : (
          <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
        )}
      </Pressable>
      {loading ? (
        <View
          style={{
            position: 'absolute',
            top: 25,
            left: '48%',
          }}>
          <ActivityIndicator color={'white'} size="small" />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  containerBottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 16,
  },
  container_PRIMARY: {
    backgroundColor: Colors.primaryColor,
    padding: 15,
    paddingHorizontal: 55,
    borderRadius: 100,
    height: 60,
    width: 264,
    justifyContent: 'center',
    alignSelf: 'center',
  },

  container_PRIMARY_B: {
    backgroundColor: Colors.primaryColor,
    padding: 15,
    paddingHorizontal: 25,
    borderRadius: 100,
    height: 60,
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  container_GREY: {
    backgroundColor: '#F7F7F7',
    padding: 15,
    paddingHorizontal: 25,
    borderRadius: 100,
    height: 60,
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  container_DARK: {
    backgroundColor: Colors.buttonSecondary,
    padding: 15,
    paddingHorizontal: 25,
    borderRadius: 100,
    height: 60,
    width: 324,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text: {
    color: Colors.secondaryColor,
    fontFamily: Fonts.PLUSJAKARTASANS_BOLD,
    fontSize: 16,
  },
  text_GREY: {
    color: '#333333',
    fontFamily: Fonts.PLUSJAKARTASANS_BOLD,
    fontSize: 16,
  },
});

export default CustomButton;
