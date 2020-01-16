import React from 'react';
import Chatbubble from './Chatbubble.js';
import Header from './Header.js';
import Write from './Write.js';
import { Redirect } from 'react-router-dom'





class ChatContainer extends React.Component {

  //when the component is mounted it checks if there is a username, if not it sends it back to the login page
  componentDidMount() {
    if (!this.props.username) {
      return <Redirect to='/' />;
    }
    this.scrollIntoView();
  }

  //auto scrolls the page to the latest message
  componentDidUpdate() {
    this.scrollIntoView();
  }

  // function to auto scroll the page
  scrollIntoView() {
    this.el.scrollIntoView({ behaviour: "smooth" });
  }

  render() {

    //checks if there is a username, if not it sends it back to the login page
    if (!this.props.username) {
      return <Redirect to='/' />;
    }

    return <div style={containerStyle} id='chatContainer'>
      <Header />

      <div className={'chatbubbleContainer'} style={chatbubbleContainer}>{this.props.history.map(
        message => (
          <Chatbubble key={message.id} message={message} />
        )
      )}
        <div ref={el => { this.el = el; }}></div>
      </div>
      <Write username={this.props.username} />
    </div >
  }
}

const containerStyle = {
  height: '100%',
  backgroundColor: '#303030',
  paddingBottom: '10px',
  overflowX: 'hidden',
}

const chatbubbleContainer = {
  height: '520px',
  overflowY: 'scroll',
  overflowX: 'hidden',
}
export default ChatContainer;
