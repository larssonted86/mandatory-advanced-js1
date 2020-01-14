import React from 'react';

class Chatbubble extends React.Component {
  render() {
    const chatbubbleStyle = {
      display: 'flex',
      backgroundColor: '#4C566A',
      borderRadius: '45px',
      border: 'solid 1px grey',
      color: '#81A1C1',
      paddingLeft: '15px',
      marginTop: '5px',
    };

    const userNameStyle = {
      fontWeight: 'bold'
    };
    const messageStyle = {
      marginLeft: '10px',
      fontFamily: 'robotoThin'
    };

    return < div style={chatbubbleStyle} >
      <p style={userNameStyle}>{this.props.message.username}:</p>
      <p style={messageStyle}>{this.props.message.content}</p>
    </div >

  }
}

export default Chatbubble;