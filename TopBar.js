import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function TopBar() {
    const [isButton1Bold, setIsButton1Bold] = useState(true);
    const [isButton2Bold, setIsButton2Bold] = useState(false);
  
    const handleToggleBold = (buttonNumber) => {
      if (buttonNumber === 1) {
        setIsButton1Bold(true);
        setIsButton2Bold(false);
      } else if (buttonNumber === 2) {
        setIsButton2Bold(true);
        setIsButton1Bold(false);
      }
    };
    const navigation = useNavigation();
    const handleNavigate = () => {
        navigation.navigate('Chat');
    };
    const handleNavigate2 = () => {
      navigation.navigate('Home');
  };
  return (
    <View style={[styles.container, Platform.OS === 'ios' && styles.shadow]}>
      <Text style={styles.text}>ConvoGuru</Text>
      <View style={styles.rightButtons}>
        <TouchableOpacity onPress={ handleNavigate2 }>
          <Text style={[styles.buttonText, isButton1Bold && styles.boldText]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ handleNavigate }>
          <Text style={[styles.buttonText, isButton2Bold && styles.boldText]}>Chat</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white', // Customize the background color as needed
    padding: 10,
    paddingTop: 50, // Adjust this value according to your status bar height
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000, // Ensures the top bar is above other content
  },
  text: {
    color: 'black', // Customize text color
    fontSize: 20, // Customize text size
    fontWeight: 'bold', // Customize text weight
  },
  boldText: {
    fontWeight: 'bold', // Make text bold
  },
  rightButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black', // Customize button text color
    fontSize: 20,
    marginLeft: 20, // Adjust spacing between buttons
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
      },
      android: {
        elevation: 4,
      },
    }),
  },
});
