import React, { useState, useEffect } from 'react';
// Import components
import TweetList from './components/TweetList';
import CreateTweet from './components/CreateTweet';

function App() {
  //Effect
  useEffect(() => {
    console.log("we run a function");
  }, []);

  // State
  const [name, setName] = useState("Santiago");
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);

  return (
    <div>
      <CreateTweet 
        textInput={textInput} 
        setTextInput={setTextInput} 
        tweets={tweets} 
        setTweets={setTweets}  
      />
      <TweetList 
        name={name} 
        tweets={tweets}
        setTweets={setTweets}
      />
    </div>    
  );
}

export default App;
