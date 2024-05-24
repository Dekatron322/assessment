import {View, StatusBar, Image} from 'react-native';
import React, {useEffect} from 'react';
import Icon from '../../../assets/icons/Brees.png';
import {Colors} from '../../constants/Colors';
import {useNavigation} from '@react-navigation/native';

import {globalStyles} from '../../styles';

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 3000);
  }, []);
  return (
    <View style={globalStyles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.statusBar} />
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image source={Icon} />
      </View>
    </View>
  );
};

export default SplashScreen;
