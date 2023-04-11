import React from "react";

const Tweet = ({name, tweet, tweets, setTweets}) => {
  const deleteTweet = () => {
    setTweets(tweets.filter(t => t !== tweet ));
  }

  const like = () => {
    console.log('like');
  }

  return (
    <div>
      <h2>Name {name}</h2>
      <h3>{tweet}</h3>
      <button onClick={deleteTweet}>Delete</button>
      <button onClick={like}>Like</button>
    </div>
  );
}

export default Tweet;
