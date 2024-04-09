import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View, Animated, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const moonAnimation = useRef(new Animated.Value(0)).current;
  const [backgroundColor, setBackgroundColor] = useState('#000000');

  useEffect(() => {
    const animationDuration = 10000;

    const animation = Animated.timing(moonAnimation, {
      toValue: 1,
      duration: animationDuration,
      useNativeDriver: true,
    });

    animation.start(() => {
      moonAnimation.setValue(0);
    });
  }, [moonAnimation]);

  useEffect(() => {
    const backgroundColorInterpolation = moonAnimation.interpolate({
      inputRange: [0, 0.2, 0.8, 1],
      outputRange: ['#ffb633', '#ffb633', '#000000', '#ffb633'],
    });
    setBackgroundColor(backgroundColorInterpolation);
  }, [moonAnimation]);

  const handleAnimationReset = () => {
    moonAnimation.setValue(0);
    Animated.timing(moonAnimation, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.title}>Eclipse 2024 🌒</Text>
      <Animated.Image
        source={require('./rsc/luna1.png')}
        style={[styles.moon, { transform: [{ translateX: moonAnimation.interpolate({
          inputRange: [0, 0.2, 0.8, 1],
          outputRange: [-200, -200, 300, 300],
        }) }] }]}
      />
      <Image source={require('./rsc/sol.webp')} style={styles.sun} />
      <TouchableOpacity onPress={handleAnimationReset} style={styles.button}>
        <Text style={styles.buttonText}>Reiniciar Animación</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginTop: 20,
    color: 'white',
  },
  moon: {
    position: 'absolute',
    top: '43%',
    width: 125,
    height: 125,
    zIndex: 1,
  },
  sun: {
    width: 500,
    height: 500,
    position: 'absolute',
    marginLeft: -50,
    marginTop: 150,
  },
  button: {
    marginTop: 600,
    padding: 10,
    backgroundColor: '#336699',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
});
