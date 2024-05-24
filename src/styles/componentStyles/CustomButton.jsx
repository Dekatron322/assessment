import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

export const styles = StyleSheet.create({
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

  container_DARK: {
    backgroundColor: Colors.buttonSecondary,
    padding: 15,
    paddingHorizontal: 55,
    borderRadius: 100,
    height: 60,
    width: 264,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text: {
    color: Colors.secondaryColor,
    fontFamily: Fonts.PLUSJAKARTASANS_BOLD,
    fontSize: 16,
  },
  activityIndicatorContainer: {
    position: 'absolute',
    top: 25,
    left: '48%',
  },
});
