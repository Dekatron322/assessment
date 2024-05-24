import {StyleSheet} from 'react-native';
import Fonts from '../../constants/Fonts';
import {Colors} from '../../constants/Colors';

export const homeScreenStyle = StyleSheet.create({
  screenContainer: {
    paddingTop: 18,
    paddingBottom: 150,
    paddingHorizontal: 18,
    flex: 1,
    flexDirection: 'column',
    gap: 12,
  },

  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  avatarStyle: {
    width: 42,
    height: 42,
  },
  greeting: {
    fontSize: 12,
    fontFamily: Fonts.INTER_REGULAR,
    color: Colors.grey,
    alignItems: 'center',
    alignSelf: 'center',
  },
  profileName: {
    fontSize: 18,
    fontFamily: Fonts.PLUSJAKARTASANS_BOLD,
    color: Colors.grey,
  },

  Price: {
    fontSize: 28,
    fontFamily: Fonts.PLUSJAKARTASANS_BOLD,
    color: Colors.grey,
    fontWeight: '800',
  },
  notificationIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.secondaryColor,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  balanceContainer: {
    backgroundColor: Colors.primaryColor,
    marginTop: 16,
    height: 150,
    borderRadius: 16,
    justifyContent: 'center',
    paddingHorizontal: 32,
    overflow: 'hidden',
  },
  balanceText: {
    color: Colors.secondaryColor,
    fontSize: 14,
    fontFamily: Fonts.PLUSJAKARTASANS_MEDIUM,
    paddingLeft: 14,
    marginBottom: 4,
  },
  balanceAndEyeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  balanceAmount: {
    color: Colors.secondaryColor,
    fontFamily: Fonts.IBMPLEXMONO_BOLD,
    fontSize: 28,
  },
});
