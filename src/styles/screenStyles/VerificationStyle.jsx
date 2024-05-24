import {StyleSheet} from 'react-native';
import Fonts from '../../constants/Fonts';
import {Colors} from '../../constants/Colors';

export const styles = StyleSheet.create({
  verify: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  title: {
    fontSize: 24,
    justifyContent: 'flex-end',
    fontFamily: Fonts.PLUSJAKARTASANS_BOLD,
    textAlign: 'center',
    color: Colors.textDark,
    marginBottom: 10,
  },
  countDown: {
    color: Colors.primaryColor,
    fontFamily: Fonts.PLUSJAKARTASANS_MEDIUM,
  },
  content: {
    fontSize: 16,
    fontFamily: Fonts.PLUSJAKARTASANS_REGULAR,
    marginBottom: 20,
    width: 219,
    color: Colors.textDark,
    alignSelf: 'center',
    textAlign: 'center',
  },
  otpContent: {
    fontSize: 16,
    fontFamily: Fonts.PLUSJAKARTASANS_REGULAR,
    marginBottom: 20,
    width: 272,
    color: Colors.textDark,
    alignSelf: 'center',
    textAlign: 'center',
  },
  createPinInfo: {
    fontSize: 16,
    fontFamily: Fonts.PLUSJAKARTASANS_REGULAR,
    marginBottom: 20,
    width: 270,
    color: Colors.textDark,
    alignSelf: 'center',
    textAlign: 'center',
  },
  phoneNumberText: {
    fontSize: 16,
    //fontWeight: 'bold',
    fontFamily: Fonts.PLUSJAKARTASANS_BOLD,
    lineHeight: 18 * 1.4,
  },
  otpContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  otpSubContainer: {
    marginHorizontal: 25,
    marginBottom: 10,
    justifyContent: 'space-between',
    fontFamily: Fonts.PLUSJAKARTASANS_MEDIUM,
    flexDirection: 'row',
  },
  otpBox: {
    height: 44.7,
    width: 44.7,
    borderRadius: 5,
    borderColor: Colors.otpBorderColor,
    borderWidth: 1,
  },
  otpText: {
    fontSize: 20,
    color: Colors.textDark,
    padding: 0,
    textAlign: 'center',
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  btnContainer: {
    paddingHorizontal: 25,
  },
  footerContainer: {
    alignItems: 'center',
    paddingBottom: 20,
    marginTop: 8,
  },
  footerText: {
    color: Colors.tatiaryColor,
    fontFamily: Fonts.PLUSJAKARTASANS_REGULAR,
  },
  loginText: {
    color: Colors.primaryColor,
    fontWeight: '500',
  },
});
