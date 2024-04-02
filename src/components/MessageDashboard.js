import ChatScreen from "../components/ChatScreen";

function MessageDashboard() {
  return (
    <>
        <div className="message-dashboard">
            <h1 className="dashboard-title">ConvoGuru - Your AI Conversation Coach</h1>
            <hr className="divider"/>
            <ChatScreen className="chat-screen"/>
        </div>
    </>
  );
}

export default MessageDashboard;