import {StyleSheet} from 'react-native';
import Fonts from '../../constants/Fonts';
import {Colors} from '../../constants/Colors';

export const styles = StyleSheet.create({
  loginText: {
    color: Colors.primaryColor,
    fontFamily: Fonts.PLUSJAKARTASANS_SEMIBOLD,
  },
  footerText: {
    color: Colors.tatiaryColor,
    fontFamily: Fonts.PLUSJAKARTASANS_MEDIUM,
  },
  footerContainer: {
    alignItems: 'center',
    paddingBottom: 20,
    marginTop: 8,
  },
  btnContainer: {
    paddingHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  screenContent: {
    paddingHorizontal: 20,
  },

  errorContainer: {
    marginTop: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },

  checkboxContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  errorText: {
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: 12,
    color: Colors.buttonDanger,
  },
  otpContent: {
    fontSize: 16,
    fontFamily: Fonts.PLUSJAKARTASANS_REGULAR,
    marginBottom: 20,
    width: 302,
    color: Colors.textDark,
    alignSelf: 'center',
    textAlign: 'center',
  },
  agreement: {
    fontFamily: Fonts.PLUSJAKARTASANS_REGULAR,
    color: Colors.textDark,
    fontSize: 12,
    justifyContent: 'center',
  },
  checkbox: {
    fontSize: 12,
  },
  terms: {
    color: Colors.textDark,
    fontFamily: Fonts.PLUSJAKARTASANS_SEMIBOLD,
  },
  privacy: {
    width: 310,
  },
  forgotPassword: {
    fontFamily: Fonts.INTER_REGULAR,
    color: Colors.primaryColor,
    alignSelf: 'flex-end',
    fontWeight: '500',
    fontSize: 14,
  },

  selectDate: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
