import { StatusBar } from 'expo-status-bar';
import {  View, Text, TextInput, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import React, {useState} from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import TopBar from './TopBar'; // Importing the TopBar component

export default function App() {
  return (
    <View style={styles.container}>
      <TopBar style="styles.container"/>
      <DiagonalRectangle />
      <CenterBox />
      <StatusBar style="auto" />
    </View>
  );
}

const DiagonalRectangle = () => {
  return (
    <View style={styles.diagonalRectangle} />
  );
};

const CenterBox = () => {
  const [text, setText] = useState('');
  const [secureText, setSecureText] = useState('');

  const handleInputChange = (text, isSecureInput) => {
    if (isSecureInput) {
      setSecureText(text.replace(/./g, '*'));
    } else {
      setText(text);
    }
  };
  return (
    <View style={styles.centerBox}>
      <Text style={styles.text}>Sign In</Text>
      <View sytle = {styles.inputContainer}>
        <View style = {styles.shadowWrapper}>
          <TextInput style={styles.input1}
           placeholder="Email or Phone"
           value = {text}
           onChangeText={(text) => handleInputChange(text, false)} />
          <TextInput style={styles.input2}
           placeholder="Password"
           value = {secureText}
           onChangeText={(text) => handleInputChange(text, true)} />
        </View>
        <TouchableOpacity style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button1}>
            <Text style={styles.buttonText1}>Sign In</Text>
          </TouchableOpacity>
        </TouchableOpacity>
          <View style={styles.textWithLines}>
            <View style={styles.line} />
              <Text style={styles.textOr}>or</Text>
            <View style={styles.line} />
        </View>
        <TouchableOpacity style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button2}>
            <Text style={styles.buttonText2}>Sign up</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  diagonalRectangle: {
    position: 'absolute',
    top: -10, // Adjust position as needed
    left: -60, // Adjust position as needed
    width: '90%', // Make it wider to cover entire screen
    height: '150%', // Make it taller to cover entire screen
    backgroundColor: '#0085FF', // Set color of the rectangle
    transform: [{ rotate: '25deg' }], // Rotate the rectangle
  },
  centerBox: {
    width: '80%',
    height: '55%',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    // alignItems: 'flex-start',
    marginTop: 30,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.55,
        shadowRadius: 4,
      },
      android: {
        elevation: 10,
      },
    }),
  },
  text: {
    fontSize: 38,
    marginBottom: 35,
    alignSelf: 'auto',
    marginTop: '8%',
    marginLeft: '8%'
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.55,
        shadowRadius: 4,
      },
      android: {
        elevation: 10,
      },
    }),
    
  },
  inputContainer: {
    alignItems: 'center',
  },
  button1: {
    backgroundColor: '#0085FF',
    paddingVertical: '4%',
    paddingHorizontal: 5,
    borderRadius: 30,
    alignItems: 'center',
    width: '90%',
    height: 55,
  },
  button2: {
    backgroundColor: 'white',
    paddingVertical: '4%',
    paddingHorizontal: 5,
    borderRadius: 30,
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    width: '90%',
    height: 55,
  },
  buttonText1: {
    color: 'white',
    textAlign: 'center',
    verticalAlign: 'center',
    fontSize: 24,
  },
  buttonText2: {
    color: 'grey',
    textAlign: 'center',
    verticalAlign: 'center',
    fontSize: 24,
  },
   input1: {
    width: '100%',
    height: 55,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 30,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    fontSize: 24,
  },
   input2: {
    width: '100%',
    height: 55,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    fontSize: 24,
  },
  shadowWrapper: {
    width: '90%',
    shadowColor: 'darkgrey',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 2,
    marginLeft: 15,
  },
  textOr: {
    fontSize: 24,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
    color: 'grey',
    paddingHorizontal: 6,
  },
  textWithLines: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'darkgrey',
    width: 2,
  },
});
