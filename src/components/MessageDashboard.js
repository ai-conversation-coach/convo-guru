import ChatScreen from "../components/ChatScreen";
import TextBar from "../components/TextBar";

function MessageDashboard() {
  return (
    <>
        <div className="message-dashboard">
            <h1 className="dashboard-title">ConvoGuru - Your AI Conversation Coach</h1>
            <hr className="divider"/>
            <ChatScreen className="chat-screen"/>
            <hr className="divider"/>
            <TextBar className="text-bar"/>
        </div>
    </>
  );
}

export default MessageDashboard;