function Message(props) {
    return (
      <>
        <div className={"message " + props.sender+"-message"}>
          <p>{props.message}</p>
        </div>
      </>
    );
  }
  
  export default Message;