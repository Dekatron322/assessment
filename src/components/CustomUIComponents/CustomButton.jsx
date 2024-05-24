import {View, Text, Pressable, ActivityIndicator} from 'react-native';
import React from 'react';
import {styles} from '../../styles/componentStyles/CustomButton';

const CustomButton = ({onPress, text, type, loading}) => {
  return (
    <View style={styles.containerBottom}>
      <Pressable
        onPress={onPress}
        style={[styles.container, styles[`container_${type}`]]}>
        {loading ? null : (
          <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
        )}
      </Pressable>
      {loading ? (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator color={'white'} size="small" />
        </View>
      ) : null}
    </View>
  );
};

export default CustomButton;
