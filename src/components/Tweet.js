import React, { useState } from 'react';
import '../styles/Tweet.scss';
import styled from 'styled-components'

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
    // <div className='tweet'>
    <TweetStyle>
      <h2>{name}</h2>
      <h3>{tweet.message}</h3>
      <button onClick={deleteTweet}>Delete</button>
      <button onClick={like}>Like</button>
      <p><strong>Likes:</strong> { tweetLike } </p>
    </TweetStyle>
    // </div>
  );
}

const TweetStyle = styled.div`
  background-color: 'red';
  border-radius: 3px;
  border: 2px solid palevioletred;
`

export default Tweet;
