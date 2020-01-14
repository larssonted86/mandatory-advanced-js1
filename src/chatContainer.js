import React from 'react';
import Chatbubble from './Chatbubble.js';
import { animateScroll } from 'react-scroll';

class ChatContainer extends React.Component {
  componentDidUpdate() {
    let scrollable_area = document.getElementById("bottomDiv");
    scrollable_area.scrollTop = scrollable_area.scrollHeight;
  }

  render() {

    const containerStyle = {
      height: '580px',
      overflowY: 'scroll',
      overflowWrap: 'word-break'
    }
    return <div style={containerStyle} id='chatContainer'>
      {this.props.history.map(
        message => (
          <Chatbubble key={message.id} message={message} />
        )
      )}
      <div id='bottomDiv'></div>
    </div>
  }
}
export default ChatContainer;
