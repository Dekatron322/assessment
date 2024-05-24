import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import {Spacer} from '../../styles/Spacer';
import {globalStyles} from '../../styles';
import {useNavigation} from '@react-navigation/native';
import CustomNav from '../../components/CustomUIComponents/CustomNav';
import CustomInput from '../../components/CustomUIComponents/CustomInput';
import {styles} from '../../styles/screenStyles/SignUpScreen';
import {Colors} from '../../constants/Colors';

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={globalStyles.containerAuth}>
      <StatusBar backgroundColor={Colors.AuthScreen} barStyle="dark-content" />
      <Spacer size={16} />
      <CustomNav text="Login" onPress={() => navigation.goBack()} />
      <ScrollView style={globalStyles.body}>
        <View style={styles.screenContent}>
          <Text style={globalStyles.headerText}>Welcome back</Text>
          <Spacer size={16} />
          <Text style={globalStyles.ParagraphText}>
            Hey you’re back, fill in your details to get back in
          </Text>
          <Spacer size={40} />
          <CustomInput
            keyboardType="email-address"
            placeholder="example@gmail.com"
            textInputTitle="Email"
          />
          <Spacer size={20} />
          <CustomInput
            keyboardType="ascii-capable"
            placeholder="**************"
            textInputTitle="Password"
          />
          <Spacer size={18} />
          <Text
            style={styles.forgotPassword}
            onPress={() => navigation.navigate('ForgotPassword')}>
            Forgot password?
          </Text>
        </View>

        <Spacer size={20} />
      </ScrollView>
      <Spacer size={30} />
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={{
            height: 40,
            width: 94,
            backgroundColor: '#2C14DD1A',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 100,
          }}
          onPress={() => navigation.navigate('BottomTabs')}>
          <Text style={globalStyles.ButtonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 62,
            width: 186,
            backgroundColor: '#2C14DD',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 100,
          }}
          onPress={() => navigation.navigate('BottomTabs')}>
          <Text style={globalStyles.ButtonTextWhite}>Login</Text>
        </TouchableOpacity>
      </View>
      <Spacer size={40} />
    </SafeAreaView>
  );
};

export default LoginScreen;
