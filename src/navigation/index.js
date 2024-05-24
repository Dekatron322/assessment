import {View, Text, Platform, Image} from 'react-native';
import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import SignUpScreen from '../screens/AuthScreens/SignupScreen';
import LoginScreen from '../screens/AuthScreens/LoginScreen';
import ForgotPasswordScreen from '../screens/AuthScreens/ForgotPasswordScreen';
import VerificationScreen from '../screens/AuthScreens/VerificationScreen';
import VerificationSuccessfulScreen from '../screens/AuthScreens/VerificationSuccessfulScreen';
import CreatePinScreen from '../screens/AuthScreens/CreatePinScreen';
import ConfirmPinScreen from '../screens/AuthScreens/ConfirmPinScreen';
import UserLoginScreen from '../screens/AuthScreens/UserLoginScreen';
import OtpVerificationScreen from '../screens/AuthScreens/OtpVerificationScreen';
import NewPasswordScreen from '../screens/AuthScreens/NewPasswordScreen';

import BudgetScreen from '../screens/BudgetScreens/BudgetScreen';
import SettingScreen from '../screens/SettingsScreens/SettingScreen';
import AnalysisScreen from '../screens/AnalysisScreens/AnalysisScreen';

import Fonts from '../constants/Fonts';

import CreateBudgetScreen from '../screens/BudgetScreens/CreateBudgetScreen';
import CustomCategoryScreen from '../screens/BudgetScreens/CustomCategoryScreen';

import MyAccountScreen from '../screens/SettingsScreens/MyAccountScreen';
import CategoryScreen from '../screens/SettingsScreens/CategoryScreen';
import ChangePasswordScreen from '../screens/SettingsScreens/ChangePasswordScreen';
import ChangePinScreen from '../screens/SettingsScreens/ChangePinScreen';
import ConfirmChangedPinScreen from '../screens/SettingsScreens/ConfirmChangedPinScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 70,
    backgroundColor: '#2C14DD',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: -3},
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 20, // Add elevation for shadow on Android
    borderTopWidth: 0, // Remove border at the top
  },
};
// const barColorStyle = Platform.OS === 'ios' ? 'dark-content' : 'light-content';
function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            const iconSource = focused
              ? require('../../assets/icons/Home-active.png')
              : require('../../assets/icons/Home.png');
            return (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image source={iconSource} />

                <Text
                  style={{
                    fontFamily: Fonts.PLUSJAKARTASANS_MEDIUM,
                    color: focused ? '#313030' : '#A0A0A0',
                    fontSize: 12,
                  }}></Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Budget"
        component={BudgetScreen}
        options={{
          tabBarIcon: ({focused}) => {
            const iconSource = focused
              ? require('../../assets/icons/GraphFocused.png')
              : require('../../assets/icons/GraphNew.png');
            return (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image source={iconSource} />

                <Text
                  style={{
                    fontFamily: Fonts.PLUSJAKARTASANS_MEDIUM,
                    color: focused ? '#313030' : '#A0A0A0',
                    fontSize: 12,
                  }}></Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Analysis"
        component={AnalysisScreen}
        options={{
          tabBarIcon: ({focused}) => {
            const iconSource = focused
              ? require('../../assets/icons/HomeFocused.png')
              : require('../../assets/icons/ChartNew.png');
            return (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image source={iconSource} />

                <Text
                  style={{
                    fontFamily: Fonts.PLUSJAKARTASANS_MEDIUM,
                    color: focused ? '#313030' : '#A0A0A0',
                    fontSize: 12,
                  }}></Text>
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          tabBarIcon: ({focused}) => {
            const iconSource = focused
              ? require('../../assets/icons/setting-focused.png')
              : require('../../assets/icons/ProfileBar.png');
            return (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image source={iconSource} />

                <Text
                  style={{
                    fontFamily: Fonts.PLUSJAKARTASANS_MEDIUM,
                    color: focused ? '#313030' : '#A0A0A0',
                    fontSize: 12,
                  }}></Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={SplashScreen} />

        <Stack.Screen name="BottomTabs" component={BottomTabs} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />

        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="UserLogin" component={UserLoginScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="Verification" component={VerificationScreen} />
        <Stack.Screen
          name="OtpVerification"
          component={OtpVerificationScreen}
        />
        <Stack.Screen
          name="VerificationSuccessful"
          component={VerificationSuccessfulScreen}
        />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
        <Stack.Screen name="CreatePin" component={CreatePinScreen} />
        <Stack.Screen name="ConfirmPin" component={ConfirmPinScreen} />
        <Stack.Screen name="CreateBudget" component={CreateBudgetScreen} />
        <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
        <Stack.Screen name="ChangePin" component={ChangePinScreen} />
        <Stack.Screen
          name="ConfirmChangedPin"
          component={ConfirmChangedPinScreen}
        />

        <Stack.Screen name="CustomCategory" component={CustomCategoryScreen} />
        <Stack.Screen name="MyAccount" component={MyAccountScreen} />
        <Stack.Screen name="Categories" component={CategoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
