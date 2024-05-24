import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import {globalStyles} from '../../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from '../../styles/componentStyles/CustomInput';

export default function CustomChatInput({
  textInputTitle,
  placeholder,
  keyboardType,
  error,
  displayError,
  value,
  onChangeHandler,
}) {
  return (
    <View
      style={[
        globalStyles.ChatTextInput,
        displayError && error && styles.errorInput,
      ]}>
      <View style={styles.inputContainer}>
        <TextInput
          maxLength={25}
          keyboardType={keyboardType}
          style={styles.inputChat}
          value={value}
          onChangeText={onChangeHandler}
          placeholder={placeholder}
          placeholderTextColor="#BFBFBF"
        />
      </View>
    </View>
  );
}
