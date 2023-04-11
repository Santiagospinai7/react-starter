import React from "react";
// Import components
import Tweet from "./Tweet";

const TweetList = ({ name, tweets, setTweets}) => {
  return (
    <div className="tweet-list">
      {tweets.map(tweet => <Tweet 
                              setTweets={setTweets} 
                              name={name} 
                              tweet={tweet} 
                              tweets={tweets}
                              key={tweet.id}
                            />)
      }
    </div>
  );
}

export default TweetList;
