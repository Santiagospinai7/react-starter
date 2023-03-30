import React, { useState } from 'react';
// Import components
import TweetList from './components/TweetList';
import CreateTweet from './components/CreateTweet';

function App() {
  const name = 'Santiago';
  const message = 'Hey there';

  return (
    <div>
      <CreateTweet/>
      <TweetList name={name} message={message}/>
    </div>    
  );
}

export default App;
