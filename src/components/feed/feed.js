import React from "react";
import "./feed.css";
import TweetInput from "../tweetinput/tweetinput";

const Feed = () => {
    return (
        <div className="Feed">
           <div className="FeedHeader">
                <h3>Home</h3>
           </div>
           <TweetInput />
        </div>
    );
}
 
export default Feed;