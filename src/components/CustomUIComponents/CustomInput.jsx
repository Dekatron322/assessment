import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import {globalStyles} from '../../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from '../../styles/componentStyles/CustomInput';

export default function CustomInput({
  textInputTitle,
  placeholder,
  keyboardType,
  error,
  displayError,
  value,
  onChangeHandler,
}) {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <View
      style={[
        globalStyles.TextInput,
        displayError && error && styles.errorInput,
      ]}>
      <Text style={globalStyles.TextInputTitle}>{textInputTitle}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          maxLength={25}
          secureTextEntry={keyboardType === 'ascii-capable' ? isVisible : false}
          keyboardType={keyboardType}
          style={styles.input}
          value={value}
          onChangeText={onChangeHandler}
          placeholder={placeholder}
          placeholderTextColor="#BFBFBF"
        />
        {keyboardType === 'ascii-capable' ? (
          <Ionicons
            onPress={() => {
              setIsVisible(!isVisible);
            }}
            name={isVisible === true ? 'eye-off' : 'eye'}
            size={20}
            color={'#2C14DD'}
          />
        ) : null}
      </View>
    </View>
  );
}
