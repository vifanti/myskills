import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native';


export const Button = ({ onPress }) => {
  return (
    <TouchableOpacity 
        style={styles.button}
        activeOpacity={.8}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#a370f7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  }
})