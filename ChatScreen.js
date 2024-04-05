import React from 'react';
import { View, Text } from 'react-native';
import TopBar from './TopBar'; // Importing the TopBar component
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useRoute } from '@react-navigation/native'; 

export default function ChatScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', }}>
      <TopBar navigation={navigation} /> 
      <Text>Second Screen</Text>
    </View>
  );
}