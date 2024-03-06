import React, {useState, useEffect } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import TopBar from './TopBar'; // Importing the TopBar component
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useRoute } from '@react-navigation/native'; 

export default function ChatScreen({navigation}) {
  const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const ampm = hours >= 12 ? 'PM' : 'AM';
            const formattedHours = hours % 12 || 12;
            setCurrentTime(`${formattedHours}:${minutes} ${ampm}`);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);
  return (
    <View style={styles.container}>
      <TopBar navigation={navigation} /> 
      <Text style={styles.time}>{currentTime}</Text>
    </View>
  );
  }
  const styles = StyleSheet.create({
    container: {
      paddingTop: '30%',
      paddingHorizontal: '40%',
    },
    time: {
        fontSize: 18,
        marginBottom: 10,
        color: 'grey',
    },
  });