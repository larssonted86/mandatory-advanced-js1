import React from 'react';
import io from 'socket.io-client';
const socket = io('http://3.120.96.16:3000');
socket.on('new_message', function(data) {
  console.log(data);
});

class Listen extends React.Component {
  render() {
    return (
      <div id="chatContainer">
        <h3></h3>
        <h2></h2>
      </div>
    );
  }
}
export default Listen;
