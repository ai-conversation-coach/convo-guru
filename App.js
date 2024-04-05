import { StatusBar } from 'expo-status-bar';
import {  View, Text, TextInput, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import React, {useState} from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import TopBar from './TopBar'; // Importing the TopBar component
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import ChatScreen from './ChatScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
                    header: props => <TopBar {...props} />,
                }} initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Chat" component={ChatScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
