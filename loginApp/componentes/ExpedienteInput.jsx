import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const ExpedienteInput = ({ value, onChangeText }) => {
  return (
    <TextInput
      style={styles.textInput}
      placeholder="Expediente"
      placeholderTextColor={'black'}
      keyboardType='numeric'
      multiline={false}
      maxLength={6}
      value={value}
      onChangeText={onChangeText}
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

export default ExpedienteInput;
