import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const ButtonComponent = ({ onPress, title }) => {
  return (
    <View style={styles.buttonContainer}>
      <Button
        onPress={onPress}
        title={title}
        color="#007bff"
        titleStyle={{ fontSize: 20 }}
        buttonStyle={styles.buttonStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 30,
    width: '60%',
    borderRadius: 40,
    overflow: 'hidden',
    shadowColor: '#000000',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    elevation: 3,
  },
  buttonStyle: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 40,
  },
});

export default ButtonComponent;
