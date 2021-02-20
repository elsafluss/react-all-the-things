import React from 'react';
import Form from './Form'

const Header = ({ addTweet }) => {
    return (
        <>
            <h1>Twatter</h1>
            <Form addTweet={addTweet}/>
        </>
    )
}

export default Header