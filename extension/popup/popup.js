// Popup.js

import React from "react";

class Popup extends React.Component {
  // Function to send a message to the content script when the button is clicked
  runScript = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { runScript: true });
    });
  };

  render() {
    return (
      <div style={{ width: 200 }}>
        <h2>Extension Popup</h2>
        <button onClick={this.runScript}>Run</button>
      </div>
    );
  }
}

export default Popup;
