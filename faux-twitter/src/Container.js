import React from 'react';

const Container = ({ newTweet }) => {
    return (
        <div>
            <p className="nhandle">{newTweet.handle}</p>
            <p className="nbody">{newTweet.body}</p>
            <p className="nreplies">{newTweet.replies}</p>
            <p className="ndate">{newTweet.date}</p>
            <p className="ntime">{newTweet.time}</p>
            <p className="nretweets">{newTweet.retweets}</p>
            <p className="nlikes">{newTweet.likes}</p>
            <p className="nprofile-pic">{newTweet.profilePic}</p>
            <p className="nplatform">{newTweet.platform}</p>
        </div>
    )
}

export default Container