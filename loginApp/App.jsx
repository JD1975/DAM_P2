import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import * as Font from 'expo-font';
//import { FontsLoader } from './FontsLoader';
import ExpedienteInput from './componentes/ExpedienteInput';
import PasswordInput from './componentes/PasswordInput';
import ButtonComponent from './componentes/ButtonComponent';

const FontsLoader = ({ children }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
      });
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return children;
};

const App = () => {
  const [expediente, setExpediente] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordEntered, setIsPasswordEntered] = useState(false);

  const handleSubmit = () => {
    if (isPasswordEntered && password.length < 8) {
      Alert.alert('Password debe ser mayor a 8 caracteres');
      return;
    }
    else {
      Alert.alert('Login exitoso!');
    }
  };

  return (
    <View style={styles.container}>
      <FontsLoader>
        <View style={styles.titleContainer}>
          <Text style={styles.titleLogin}>Login</Text>
        </View>
      </FontsLoader>

      <View style={styles.inputsContainer}>
        <ExpedienteInput
          value={expediente}
          onChangeText={setExpediente}
        />
        <PasswordInput
          value={password}
          onChangeText={setPassword}
          onBlur={() => setIsPasswordEntered(true)}
        />
      </View>

      <ButtonComponent onPress={handleSubmit} title="Login" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    marginBottom: 20,
  },
  titleLogin: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 50,
    color: 'black',
  },
  inputsContainer: {
    width: '80%',
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    elevation: 2,
  },
});

export default App;
