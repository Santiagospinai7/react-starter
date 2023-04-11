import React, { useState } from 'react';

const Tweet = ({name, tweet, tweets, setTweets}) => {
  // State
  const [tweetLike, setTweetLike] = useState(0);

  const deleteTweet = () => {
    setTweets(tweets.filter(state => state.id !== tweet.id ));
  }

  const like = () => {
    //setTweetLike
    let likes = tweetLike + 1;
    setTweetLike(likes);

    //modify likes in the setTweets list
    const tweetIndex = tweets.findIndex((element) => element.id === tweet.id)

    tweets[tweetIndex].likes = likes;
    setTweets(tweets);
  }

  return (
    <div>
      <h2>Name {name}</h2>
      <h3>{tweet.message}</h3>
      <button onClick={deleteTweet}>Delete</button>
      <button onClick={like}>Like</button>
      <p><strong>Likes:</strong> { tweetLike } </p>
    </div>
  );
}

export default Tweet;
