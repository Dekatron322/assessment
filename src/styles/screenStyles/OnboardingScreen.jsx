const {StyleSheet} = require('react-native');
const {Colors} = require('../../constants/Colors');
const {default: Fonts} = require('../../constants/Fonts');

export const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.secondaryColor,
  },
  header: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 100,
    paddingTop: 50,
  },
  titleText: {
    fontFamily: Fonts.PLUSJAKARTASANS_BOLD,
    fontSize: 28,
    paddingTop: 35,
    paddingBottom: 10,
  },
  skipBtnContainer: {
    flex: 1,
    paddingTop: 24,
  },
  skipBtn: {
    width: 81,
    height: 31,
    backgroundColor: '#EAEAEA',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginHorizontal: 18,
    marginBottom: 30,
  },
  skip: {
    fontFamily: Fonts.PLUSJAKARTASANS_MEDIUM,
    color: Colors.tatiaryColor,
  },
  slideContainer: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slideImage: {
    height: 228,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  indicator: {
    height: 3,
    width: 34,
    backgroundColor: Colors.grey,
    marginHorizontal: 12,
    borderRadius: 100,
  },
  slideHeader: {
    marginTop: 24,
    fontSize: 24,
    alignSelf: 'center',
    textAlign: 'center',
    maxWidth: 287,
    fontFamily: Fonts.PLUSJAKARTASANS_BOLD,
    color: Colors.primaryDark,
    lineHeight: 28.8,
  },
  slideSubHeader: {
    marginTop: 16,
    fontSize: 14,
    alignSelf: 'center',
    textAlign: 'center',
    maxWidth: 287,
    fontFamily: Fonts.PLUSJAKARTASANS_MEDIUM,
    color: Colors.primaryDark,
    lineHeight: 21,
  },
  footerContainer: {
    flex: 3,
    paddingBottom: 60,
  },
  currentSlideStyle: {
    backgroundColor: Colors.primaryColor,
    width: 34,
  },
});
