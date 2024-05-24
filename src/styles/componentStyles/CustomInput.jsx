import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

export const styles = StyleSheet.create({
  input: {
    fontFamily: Fonts.PLUSJAKARTASANS_REGULAR,
    color: '#333',
    minWidth: '95%',
    height: '100%',
    fontSize: 14,
    fontWeight: '500',
  },
  inputChat: {
    fontFamily: Fonts.PLUSJAKARTASANS_REGULAR,
    color: '#333',
    minWidth: '95%',
    height: '100%',
    fontSize: 16,
    fontWeight: '500',
  },
  inputdate: {
    color: '#333',
    minWidth: '37%',
    height: '100%',
    fontSize: 14,
    fontWeight: '500',
  },
  accountInput: {
    color: '#333',
    width: '95%',
    height: '100%',
    fontSize: 14,
    fontWeight: '500',
  },
  errorInput: {
    borderColor: Colors.buttonDanger,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '80%',
  },
});
