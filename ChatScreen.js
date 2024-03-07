import React, {useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView, Image, Platform, ScrollView} from 'react-native';
import TopBar from './TopBar'; // Importing the TopBar component
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useRoute } from '@react-navigation/native'; 

export default function ChatScreen({navigation}) {
  const [currentTime, setCurrentTime] = useState('');
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [isInputFocused, setInputFocused] = useState(false);
  const scrollViewRef = useRef();

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

    const handleSend = () => {
      const newMessage = { id: messages.length + 1, text: message, time: currentTime };
      setMessages([...messages, newMessage]);
      setMessage('');
      // Scroll to the end of the messages
      scrollViewRef.current.scrollToEnd({ animated: true });
  };


  return (
    <View style={styles.container}>
      <TopBar navigation={navigation} /> 
      <Text style={styles.time}>{currentTime}</Text>
      <ScrollView
          ref={scrollViewRef}
          contentContainerStyle={styles.content}
          onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
      >
          {messages.map((msg) => (
              <View key={msg.id} style={msg.sender === 'me' ? styles.otherMessage : styles.myMessage}>
                  <Text>{msg.text}</Text>
                  <Text style={styles.messageTime}>{msg.time}</Text>
              </View>
          ))}
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.bottomBarContainer}
        enabled
    >
        <View style={[styles.bottomBar, isInputFocused && styles.bottomBarFocused]}>
            <TextInput
                style={styles.input}
                value={message}
                onChangeText={setMessage}
                placeholder="Type your message..."
                onFocus={() => setInputFocused(true)}
                onBlur={() => setInputFocused(false)}
            />
            <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
                <Image source={require('./send.png')} style={styles.sendIcon} />
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
    </View>
  );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 100,
      paddingBottom: 20,
    },
    time: {
        paddingHorizontal: '40%',
        fontSize: 18,
        marginBottom: 10,
        color: 'grey',
    },
    content: {
      flex: 1,
      paddingBottom: 10,
    },
    myMessage: {
      alignSelf: 'flex-end',
      backgroundColor: '#0085FF',
      maxWidth: '70%',
      borderRadius: 20,
      paddingRight: 10,
      padding: 10,
      marginBottom: 5,
  },
  otherMessage: {
      alignSelf: 'flex-start',
      backgroundColor: '#E5E5EA',
      maxWidth: '70%',
      borderRadius: 20,
      padding: 10,
      marginBottom: 10,
  },
  messageText: {
      fontSize: 16,
  },
    bottomBarContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
  },
    bottomBar: {
      flexDirection: 'row',
      alignItems: 'center',
      borderTopWidth: 1,
      borderTopColor: '#cccccc',
      paddingVertical: 10,
      paddingHorizontal: 16,
      backgroundColor: 'white',
  },
  input: {
      flex: 1,
      height: 40,
      paddingHorizontal: 10,
      marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#0085FF',
    borderRadius: 50, // Make it a circle
    width: 40, // Set width and height to the desired size
    height: 40,
    justifyContent: 'center',
    paddingLeft: 3,
    alignItems: 'center',
  },
  sendIcon: {
    width: 24,
    height: 24,
    paddingLeft: 20,
    tintColor: 'white',
},
});