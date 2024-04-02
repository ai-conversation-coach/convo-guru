import { useState } from "react";
import Message from "../components/Message"

//message ui
//message effects (like send up)
function ChatScreen() {
    const [messages, setMessages] = useState([]);

    const addMessage = (event) => {
      event.preventDefault();
      const input = document.getElementById("typed-message");
      const messageInput = input.value.trim();
      const newMessage = {text:messageInput, sender:"user"};
      const botMessage = {text:"This is a bot reply", sender:"bot"};
      const messagesDiv = document.getElementById("chat-screen");
      if (input !== "") {
        setMessages(prevMessages => [...prevMessages, newMessage]);
        input.value="";
        setTimeout(() => {
          setMessages(prevMessages => [...prevMessages, botMessage]);
        },2000);
      }
    }

    return (
      <>
        <div className="chat-screen">
          {messages.map((message, index) => (
            <Message key={index} message={message.text} sender={message.sender}/>
          ))}
        </div>
        <hr className="divider"/>
        <div id="form-container">
              <form action="">
                <input type="text" id="typed-message"/>
                <input type="submit" id="submit" value="Enter" onClick={addMessage}/>
              </form>
        </div>
      </>
    );
  }
  
  export default ChatScreen;