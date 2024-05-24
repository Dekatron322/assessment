import {StyleSheet, Platform} from 'react-native';
import {Colors} from '../constants/Colors';
import Fonts from '../constants/Fonts';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
  },
  contianerGray: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  containerWhite: {
    flex: 1,
    backgroundColor: Colors.secondaryColor,
  },
  containerAuth: {
    flex: 1,
    backgroundColor: Colors.AuthScreen,
  },
  body: {
    flex: 1,
    paddingTop: 35.5,
  },

  headerText: {
    color: Colors.primaryDark,
    fontSize: 24,
    fontFamily: Fonts.INTER_REGULAR,
    lineHeight: 28,
    fontWeight: '700',
  },
  ParagraphText: {
    color: Colors.textDark,
    fontSize: 14,
    fontWeight: '500',

    fontFamily: Fonts.INTER_SEMIBOLD,
  },
  TextInput: {
    backgroundColor: 'white',

    borderRadius: 24,
    paddingHorizontal: 18,
    margin: 0,
    fontSize: 16,
    textDecorationLine: 'none',
    color: '#BFBFBF',
    paddingTop: 10,
    height: 61,
  },

  ChatTextInput: {
    borderColor: Colors.textInputBorder,
    borderWidth: 1,
    borderRadius: 100,
    marginHorizontal: 13,
    paddingHorizontal: 14,
    fontSize: 16,
    textDecorationLine: 'none',
    color: '#BFBFBF',
    paddingTop: 10,
    height: 61,
  },
  TextAccountInput: {
    borderColor: Colors.textInputBorder,
    //borderBottomWidth: 1,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    paddingHorizontal: 14,
    margin: 0,
    fontSize: 16,
    textDecorationLine: 'none',
    color: '#BFBFBF',
    paddingTop: 10,
    height: 61,
    backgroundColor: '#FFFFFF',
    marginBottom: 12,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(8, 9, 11, 0.05)',
        shadowOffset: {width: 0, height: 14},
        shadowOpacity: 1,
        shadowRadius: 50,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  TextInputTitle: {
    fontFamily: Fonts.INTER_SEMIBOLD,
    color: '#757474',
    fontSize: 10,
  },
  Agreement: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.grey,
    letterSpacing: 0.7,
    lineHeight: 25,
    width: '95%',
  },
  ButtonStyle: {
    backgroundColor: Colors.primaryColor,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonText: {
    color: Colors.secondaryColor,
    fontSize: 12,
    fontFamily: Fonts.INTER_SEMIBOLD,
    fontWeight: '500',
  },
  ButtonTextWhite: {
    color: Colors.grey,
    fontSize: 14,
    fontFamily: Fonts.INTER_SEMIBOLD,
    fontWeight: '600',
  },
});
