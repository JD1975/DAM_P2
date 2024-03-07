import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const PasswordInput = ({ value, onChangeText, onBlur }) => {
  return (
    <TextInput
      style={styles.textInput}
      placeholder="Password"
      placeholderTextColor={'black'}
      multiline={false}
      secureTextEntry={true}
      value={value}
      onChangeText={onChangeText}
      onBlur={onBlur}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    marginBottom: 20,
    textAlign: 'center',
    borderColor: '#ced4da',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
    color: 'black',
  },
});

export default PasswordInput;
