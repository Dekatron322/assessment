import React, {useState} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import {globalStyles} from '../../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from '../../styles/componentStyles/CustomInput';

export default function CustomAccountInput({
  textInputTitle,
  placeholder,
  keyboardType,
  error,
  displayError,
  value,
  onChangeHandler,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const startEditing = () => {
    setIsEditing(true);
  };

  const finishEditing = () => {
    setIsEditing(false);
    // Call onChangeHandler to update the value
    onChangeHandler(inputValue);
  };

  const handleInputChange = text => {
    setInputValue(text);
  };

  return (
    <View style={[globalStyles.TextAccountInput]}>
      <Text style={globalStyles.TextInputTitle}>{textInputTitle}</Text>
      <TouchableOpacity onPress={startEditing}>
        <View style={styles.inputContainer}>
          {isEditing ? (
            <TextInput
              maxLength={25}
              keyboardType={keyboardType}
              style={styles.accountInput}
              value={inputValue}
              onChangeText={handleInputChange}
              placeholder={placeholder}
              placeholderTextColor="#BFBFBF"
              onBlur={finishEditing}
            />
          ) : (
            <Text style={styles.accountInput}>{value}</Text>
          )}
          <Image
            style={{position: 'absolute', top: 0, right: 0}}
            source={require('../../../assets/icons/edit-input.png')}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}
