import React from 'react';
import Chatbubble from './Chatbubble.js';


class ChatContainer extends React.Component {

  render() {

    const containerStyle = {
      height: '500px',
      overflowY: 'scroll',
      overflowX: 'hidden',
      overflowWrap: 'word-break',
      backgroundColor: '#303030',
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
