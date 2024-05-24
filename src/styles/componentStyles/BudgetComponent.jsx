import {Colors} from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import {StyleSheet} from 'react-native';

export const budgetComponent = StyleSheet.create({
  singleTransaction: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
    marginBottom: 6,
  },
  amount: {
    fontSize: 12,
    fontFamily: Fonts.PLUSJAKARTASANS_MEDIUM,
    lineHeight: 18,
    color: Colors.textDark,
  },
  beneficiary: {
    fontSize: 8,
    color: Colors.otpBorderColor,
  },
  iconContainer: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    backgroundColor: Colors.secondaryColor,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 28,
    height: 28,
  },
  amountContainer: {
    backgroundColor: Colors.secondaryColor,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#1DCF9F',
    paddingVertical: 5.5,
    paddingHorizontal: 15,
    borderRadius: 100,
  },
});
