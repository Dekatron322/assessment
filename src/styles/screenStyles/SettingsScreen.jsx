const {StyleSheet, Platform} = require('react-native');
const {Colors} = require('../../constants/Colors');
const {default: Fonts} = require('../../constants/Fonts');

export const styles = StyleSheet.create({
  settingHeader: {
    backgroundColor: Colors.statusBar,
    height: 199,
    borderBottomLeftRadius: 30,
  },

  settingNav: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  navText: {
    color: '#F6F7F8',
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: 14,
    lineHeight: 24,
  },

  settingProfile: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
  profileName: {
    fontFamily: Fonts.PLUSJAKARTASANS_SEMIBOLD,
    fontSize: 20,
    color: '#FFFFFF',
    lineHeight: 28,
  },
  profileEmail: {
    fontFamily: Fonts.PLUSJAKARTASANS_REGULAR,
    fontSize: 14,
    lineHeight: 21,
    color: '#FFFFFF',
    maxWidth: 248,
  },
  profileBody: {
    flex: 1,
    marginHorizontal: 25,
    paddingHorizontal: 16,
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    height: 76,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(8, 9, 11, 0.05)',
        shadowOffset: {width: 0, height: 14},
        shadowOpacity: 1,
        shadowRadius: 50,
      },
      android: {
        elevation: 5,
      },
    }),
  },

  profileImage: {
    height: 44,
    width: 44,
    borderRadius: 100,
    backgroundColor: '#EDF1F3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileBOdyName: {
    fontFamily: Fonts.PLUSJAKARTASANS_SEMIBOLD,
    color: '#1A1C1E',
    fontSize: 14,
    lineHeight: 21,
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex: 1,
  },
  DeleteAccount: {
    textAlign: 'center',
    color: '#CE2C60',
    fontFamily: Fonts.PLUSJAKARTASANS_SEMIBOLD,
    fontSize: 14,
  },
  LogOut: {
    textAlign: 'center',
    color: '#757474',
    fontFamily: Fonts.PLUSJAKARTASANS_SEMIBOLD,
    fontSize: 14,
  },
  editProfileImageContainer: {
    paddingHorizontal: 20,
  },
  editProfileImage: {
    height: 100,
    width: 100,
    flex: 1,
    alignSelf: 'center',
  },
  ProfileImage: {
    height: 100,
    width: 100,
  },
  ProfileEditor: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  btnContainer: {
    paddingHorizontal: 25,
  },

  supportHeader: {
    backgroundColor: Colors.primaryColor,
  },
  profileWelcome: {
    fontFamily: Fonts.MULISH_BOLD,
    fontSize: 32,
    color: '#FFFFFF',
    lineHeight: 38.4,
  },
  liveChatContainer: {
    position: 'absolute',
    height: 209,
    width: '87%',

    backgroundColor: Colors.secondaryColor,
    zIndex: 100,
    marginHorizontal: 25,
    borderRadius: 16,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: -3},
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 20, // Add elevation for shadow on Android
    borderTopWidth: 0, // Remove border at the top
  },

  liveChatText: {
    fontSize: 14,
    fontFamily: Fonts.PLUSJAKARTASANS_SEMIBOLD,
    textAlign: 'center',
    color: '#333333',
  },
  liveChatImage: {
    alignSelf: 'center',
    marginTop: 16,
  },
  replyTime: {
    fontSize: 12,
    fontFamily: Fonts.PLUSJAKARTASANS_REGULAR,
    color: '#333333',
    textAlign: 'center',
  },

  chatButton: {
    flex: 1,
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  beginChat: {
    flexDirection: 'row',
    backgroundColor: '#F1F5F9',
    height: 40,
    width: 151,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  beginChatText: {
    fontSize: 12,
    fontFamily: Fonts.PLUSJAKARTASANS_REGULAR,
  },

  faqs: {
    backgroundColor: Colors.secondaryColor,
    height: 307,
    paddingHorizontal: 25,

    zIndex: 0,
    marginHorizontal: 25,
    borderRadius: 16,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: -3},
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 20, // Add elevation for shadow on Android
    borderTopWidth: 0, // Remove border at the top
  },

  riveside: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rivesideParagraph: {
    fontFamily: Fonts.MULISH_REGULAR,
    fontSize: 14,
    lineHeight: 21,
    color: '#FFFFFF',
    maxWidth: 248,
    textAlign: 'center',
  },
  liveSupport: {
    flexDirection: 'row',
    gap: 19,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },

  liveSupportName: {
    fontFamily: Fonts.MULISH_REGULAR,
    fontSize: 10,
    lineHeight: 13,
    color: Colors.secondaryColor,
    textAlign: 'center',
  },
  messageArea: {
    paddingHorizontal: 20,
  },
  chatTime: {
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: 14,
    textAlign: 'center',
  },
  messageSender: {
    alignItems: 'flex-end',
  },

  senderContainer: {
    flexDirection: 'row',
    gap: 6,
    //alignItems: 'center',
    justifyContent: 'center',
  },

  messageReceptor: {
    alignItems: 'flex-start',
  },
  messageContent: {
    backgroundColor: Colors.primaryColor,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 20,
    color: Colors.secondaryColor,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: 16,
    textAlign: 'center',
  },
  messageContentR: {
    backgroundColor: '#F2F4F5',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 20,
    color: '#090A0A',
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: 16,
    textAlign: 'center',
  },
  typingMessage: {
    color: '#090A0A',
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: 16,
    alignItems: 'center',
  },
  imageArea: {
    height: 40,
    width: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
