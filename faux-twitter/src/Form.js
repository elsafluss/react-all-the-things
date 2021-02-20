import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super()
        this.state = {
            handle: '',
            body: '',
            replies: '',
            date: '',
            time: '',
            retweets: '',
            likes: '',
            profilePic: '',
            platform: ''
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    clearInputs = () => {
        this.setState({ 
            handle: '',
            body: '',
            replies: '',
            date: '',
            time: '',
            retweets: '',
            likes: '',
            profilePic: '',
            platform: '' 
        })
    }

    createTweet = (event) => {
        event.preventDefault()
        const newTweet = {
            id: Date.now(),
            ...this.state
        }
        this.props.addTweet(newTweet)
        this.clearInputs()
    }

    render() {
        return (
            <form>
                <input 
                    type="text" 
                    className="thandle"
                    placeholder="twitter handle" 
                    name="handle"
                    onChange={this.handleChange}
                    value={this.state.handle}>
                </input>
                <br></br>
                <input 
                    type="text" 
                    className="tbody"
                    placeholder="tweet body" 
                    name="body"
                    onChange={this.handleChange}
                    value={this.state.body}>
                </input>
                <br></br>
                <input 
                    type="text" 
                    className="treplies"
                    placeholder="replies" 
                    name="replies"
                    onChange={this.handleChange}
                    value={this.state.replies}>
                </input>
                <br></br>
                <input 
                    type="date" 
                    className="tdate"
                    placeholder="date" 
                    name="date"
                    onChange={this.handleChange}
                    value={this.state.date}>
                </input>
                <br></br>
                <input 
                    type="time" 
                    className="ttime"
                    placeholder="time" 
                    name="time"
                    onChange={this.handleChange}
                    value={this.state.time}>
                </input>
                <br></br>
                <input 
                    type="text" 
                    className="tretweets"
                    placeholder="retweets" 
                    name="retweets"
                    onChange={this.handleChange}
                    value={this.state.retweets}>
                </input>
                <br></br>
                 <input 
                    type="text" 
                    className="tlikes"
                    placeholder="likes" 
                    name="likes"
                    onChange={this.handleChange}
                    value={this.state.likes}>
                </input>
                <br></br>
                 <input 
                    type="text"
                    className="tprofile-pic"
                    placeholder="image url" 
                    name="profilePic"
                    onChange={this.handleChange}
                    value={this.state.profilePic}>
                </input>
                <br></br>
                <input 
                    type="text" 
                    className="tplatform"
                    placeholder="platform" 
                    name="platform"
                    onChange={this.handleChange}
                    value={this.state.platform}>
                </input>
                <br></br>
                <button
                    onClick={this.createTweet}
                    className="tsubmit"
                    >create tweet</button>
            </form>
        )
    }
}

export default Form