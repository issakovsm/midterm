import React from "react";
import { Avatar, Button } from "@mui/material";
import "./tweetinput.css"
const TweetInput = () => {
    return (
        <div className="TweetBox">
            <form>
                <div className="TweetInputBox">
                    <Avatar src=" https://yt3.googleusercontent.com/ytc/APkrFKaS3cYxx2oiOb4WITMkcdNHdcS5CfPREbxFOe-p1Q=s176-c-k-c0x00ffffff-no-rj"/> 
                    <input type="text" placeholder="Whats Happening?" />
                </div>
                <input type="text" className="TweetInput_ForImgURL" placeholder="Optional: Enter Img Url" />
                <Button type="submit" className="TweetBoxBtn">
                    Tweet
                </Button>
            </form>
        </div>
    );
}
 
export default TweetInput;