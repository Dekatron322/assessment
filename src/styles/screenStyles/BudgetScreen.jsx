import Fonts from '../../constants/Fonts';

const {StyleSheet} = require('react-native');
const {Colors} = require('../../constants/Colors');

export const styles = StyleSheet.create({
  emptyBudget: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  callToAction: {
    color: '#000000',
    fontFamily: Fonts.PLUSJAKARTASANS_REGULAR,
    fontSize: 16,
  },
  BudgetScreenContainer: {
    paddingHorizontal: 18,
  },
  setBudgetHeader: {
    //height: 141,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingHorizontal: 15,
    paddingVertical: 14,
    flex: 1, // Allow the header to take remaining space
  },
  budgetEditContainer: {
    alignItems: 'flex-end',
  },
  allBudgetCategories: {
    flexDirection: 'row',
    gap: 6,
    flexWrap: 'wrap',
  },
  singleBudget: {
    flexDirection: 'row',
    borderColor: '#BFBFBF',
    borderWidth: 1,
    borderRadius: 6,
    height: 32,
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 6,
  },

  inputBudget: {
    backgroundColor: '#F7F7F7',
    height: 28,
    borderRadius: 24,
    paddingHorizontal: 27,
    paddingTop: 0,
    paddingBottom: 0,
    color: 'black',
    alignItems: 'center',
  },

  budgetSelectedItemBodyLHS: {
    flexDirection: 'row',
    gap: 10,
  },

  singleBudgetName: {
    fontSize: 10,
    fontFamily: Fonts.PLUSJAKARTASANS_MEDIUM,
    lineHeight: 16,
    color: '#000000',
  },
  budgetHeader: {
    height: 141,
    backgroundColor: '#FEF6E7',
    borderRadius: 16,
    paddingHorizontal: 15,
    paddingVertical: 14,
    flex: 1, // Allow the header to take remaining space
  },
  budgetEditContainer: {
    alignItems: 'flex-end',
  },
  budgetEdit: {
    width: 54,
    height: 24,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#F6A00B',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 2,
  },
  editText: {
    fontFamily: Fonts.PLUSJAKARTASANS_REGULAR,
    fontSize: 10,
    color: '#F6A00B',
  },
  budgetScreenBody: {
    flexDirection: 'row',
    //alignItems: 'center',
    gap: 12,
  },
  budgetScreenBodyContent: {
    flex: 1,
    flexDirection: 'row',
    gap: 60,
  },
  totalBudget: {
    fontFamily: Fonts.PLUSJAKARTASANS_REGULAR,
    fontSize: 10,
    lineHeight: 10,
    color: '#757474',
  },
  totalBudgetValue: {
    fontFamily: Fonts.PLUSJAKARTASANS_MEDIUM,
    fontSize: 14,
    color: '#333333',
    lineHeight: 21,
  },
  dateContainer: {
    borderColor: '#757474',
    borderRadius: 24,
    borderWidth: 1,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 9,
    paddingVertical: 0.5,
  },
  date: {
    fontFamily: Fonts.PLUSJAKARTASANS_REGULAR,
    fontSize: 10,
    lineHeight: 10,
    color: '#757474',
  },
  budgetListScreen: {},
  budgetListText: {
    color: '#333333',
    fontSize: 14,
    fontFamily: Fonts.PLUSJAKARTASANS_MEDIUM,
    lineHeight: 21,
  },
  budgetListContainer: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#EAEAEA',
    paddingHorizontal: 12,
    paddingVertical: 12,
    width: '100%',
    height: 209,
  },
  setBudgetListContainer: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#EAEAEA',
    paddingHorizontal: 12,
    paddingVertical: 12,
    width: '100%',
    height: 274,
  },
  budgetSelectedItem: {
    flexDirection: 'row',
    gap: 24,
    paddingBottom: 19,
  },
  selectedItemText: {
    fontFamily: Fonts.PLUSJAKARTASANS_REGULAR,
    fontSize: 12,
    color: '#000000',
  },
  budgetList: {
    flexDirection: 'row',
    gap: 25,
    alignItems: 'center',
  },
  budgetSelectedItemBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  budgetListheaderText: {
    fontFamily: Fonts.PLUSJAKARTASANS_MEDIUM,
    fontSize: 12,
    lineHeight: 18,
    color: '#333333',
  },
  budgetListDetail: {
    fontFamily: Fonts.PLUSJAKARTASANS_REGULAR,
    fontSize: 8,
    color: '#A0A0A0',
  },
  budgetListContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  budgetAllocations: {
    fontSize: 12,
    fontFamily: Fonts.PLUSJAKARTASANS_MEDIUM,
    lineHeight: 18,
    color: '#333333',
  },
  buttonArea: {},
});
