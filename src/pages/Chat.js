import MessageDashboard from "../components/MessageDashboard";
import Description from "../components/Description"
import TiltedRectangle from "../components/TiltedRectangle";

function Chat() {
    return (
        <>
          <div className="chat">
            <h1 className="chat-title">Practice a Conversation.</h1>
            <TiltedRectangle>
              <Description />
              <MessageDashboard />
            </TiltedRectangle>
          </div>
        </>
      );
}

export default Chat;