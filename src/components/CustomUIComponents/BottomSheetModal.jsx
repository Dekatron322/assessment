import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Pressable,
  Image,
} from 'react-native';
// import Animated from 'react-native-reanimated';
import React from 'react';
import {useWindowDimensions} from 'react-native';
import {useCardAnimation} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import Fonts from '../../constants/Fonts';
import CustomButton from '../CustomComponents/CustomButton';
import {Spacer} from '../../styles/Spacer';
import {Colors} from '../../constants/Colors';

export default function BottomeSheetModal({
  title,
  image,
  subTitle,
  btnText,
  btnPressFunc,
}) {
  const navigation = useNavigation();
  const {height} = useWindowDimensions();
  //   const {current} = useCardAnimation();

  return (
    <View style={[styles.wrapper]}>
      <Pressable
        onPress={() => navigation.goBack()}
        style={[StyleSheet.absoluteFill, styles.backdrop]}
      />
      <Animated.View
        style={[
          {
            height: height / 2,
            transform: [
              {
                translateY: height / 1.8,
              },
            ],
          },
          styles.viewAnimated,
        ]}>
        <View style={styles.viewContainer}>
          <View style={styles.iconContainer}>
            <Image source={image} style={styles.icon} />
          </View>
          <Text style={styles.title}>{title} </Text>
          <Text style={styles.description}>{subTitle}</Text>

          <View style={styles.buttonWrapper}>
            <CustomButton type="DARK" text={btnText} onPress={btnPressFunc} />
          </View>
          {/* </View> */}
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  backdrop: {backgroundColor: 'black', opacity: 0.3},
  viewAnimated: {
    width: '100%',
  },
  viewContainer: {
    flex: 1,
    position: 'relative',
    paddingHorizontal: 26,
    paddingTop: 46,
    paddingBottom: 80,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 20,
  },
  iconContainer: {
    backgroundColor: '#34B67F',
    padding: 20,
    position: 'absolute',
    borderRadius: 100,
    top: -40,
    shadowColor: '#2e76574d',
    shadowOffset: {width: 1, height: 9},
    shadowOpacity: 0.5,
  },
  icon: {
    width: 51,
    height: 51,
  },
  title: {
    color: '#1A1C1E',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 16,
    fontFamily: Fonts.PLUSJAKARTASANS_BOLD,
  },
  description: {
    color: Colors.otpBorderColor,
    paddingTop: 12,
    textAlign: 'center',
    fontSize: 14,
    width: '80%',
    margin: 'auto',
    lineHeight: 21,
    fontFamily: Fonts.PLUSJAKARTASANS_MEDIUM,
  },
  buttonWrapper: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
});
