import React from 'react';
import Chatbubble from './Chatbubble.js';

class ChatContainer extends React.Component {
  render() {
    return this.props.history.map(
      message => (
        <Chatbubble key={message.id} message={message} />
      )
    );
  }
}
export default ChatContainer;
