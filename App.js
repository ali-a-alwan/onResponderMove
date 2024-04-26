import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const CustomTouchableComponent = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleResponderMove = (event) => {
    const { locationX, locationY } = event.nativeEvent;
    setPosition({ x: locationX, y: locationY });
  };

  return (
    <View
      style={styles.container}
      onStartShouldSetResponder={() => true}
      onResponderMove={handleResponderMove}
    >
      <View style={[styles.button, { left: position.x, top: position.y }]}>
        <Text style={styles.buttonText}>Drag Me</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    position: 'absolute',
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop:60,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomTouchableComponent;
