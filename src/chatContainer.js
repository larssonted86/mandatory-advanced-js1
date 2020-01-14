import React from 'react';
import Chatbubble from './Chatbubble.js';
import { animateScroll } from 'react-scroll';

class ChatContainer extends React.Component {

  render() {

    const containerStyle = {
      height: '580px',
      overflowY: 'scroll',
      overflowWrap: 'word-break',
      backgroundColor: '#2E3440',
      paddingBottom: '10px',
    }
    return <div style={containerStyle} id='chatContainer'>
      {this.props.history.map(
        message => (
          <Chatbubble key={message.id} message={message} />
        )
      )}
    </div>
  }
}
export default ChatContainer;
