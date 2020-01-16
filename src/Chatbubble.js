import React from 'react';
import Linkify from 'react-linkify';
import { emojify } from 'react-emojione';

class Chatbubble extends React.Component {
  render() {

    //needed to modify the Linkify style and behavior
    const componentDecorator = (href, text, key) => (
      <a href={href} key={key} style={linkStyle} target={'_blank'}>
        {text}
      </a>
    );


    return < div style={chatbubbleStyle} >
      <div style={usernameDiv}>
        <p style={userNameStyle}>{this.props.message.username}</p>
      </div>
      <div style={userMessageDiv}>

        <p style={messageStyle}>
          <Linkify componentDecorator={componentDecorator}>
            {emojify(this.props.message.content)}
          </Linkify>
        </p>
      </div>
    </div >
  }
}

////////////////////////STYLES///////////////////////////////////////

const chatbubbleStyle = {
  display: 'flex',
  paddingLeft: '10px',
  backgroundColor: '#303030',
  borderBottom: '1px #BFA47B solid ',
  height: '80px',
  width: '100%',
  color: '#BFA47B',
  alignItems: 'center',
};

const userNameStyle = {
  fontWeight: 'bold',
  fontSize: '18px'

};
const messageStyle = {
  marginLeft: '10px',
  fontFamily: 'robotoThin',
  fontSize: '18px'
};

const usernameDiv = {
  display: 'flex',
  justifyContent: 'flexStart',
  heigth: '50px',
  width: '130px',
  borderRight: '1px #BFA47B solid ',
  borderRadius: '90px',

};

const userMessageDiv = {
  display: 'flex',
  justifyContent: 'flexStart',
  alignItems: 'top',
  heigth: '50px',
  width: '90%',
  overflowWrap: 'word-break',
  paddingLeft: '15px',
  wordBreak: 'break-word',
};

const linkStyle = {
  color: '#BFA47B',
  textDecoration: 'none'
}

export default Chatbubble;