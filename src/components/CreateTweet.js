import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const CreateTweet = ({tweets, setTweets, textInput, setTextInput}) => {
  // Functions
  const userInputHandler = (e) => {
    setTextInput(e.target.value)
  }

  const submitTweetHandler = (e) => {
    e.preventDefault();
    //set the tweets is like a push to a tweets array
    setTweets([...tweets, {message: textInput, id: uuidv4(), likes: 0}]);
    setTextInput("");
  }

  return (
    <form onSubmit={submitTweetHandler}>
      <textarea value={ textInput } onChange={ userInputHandler } cols="30" rows="10"></textarea>
      <button>Submit</button>
      {/* Here see the tweet text and add click event that delete the text */}
      {/* <h1 onClick={ () => setTextInput('') }>{ textInput }</h1> */}
    </form>
  );
}

export default CreateTweet;
 