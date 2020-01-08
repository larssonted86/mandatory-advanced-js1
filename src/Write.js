import React from 'react';
import io from 'socket.io-client';

class Write extends React.Component {
  render() {
    return (
      <form>
        <input type="text" id="userMessage" />
      </form>
    );
  }
}
export default Write;
