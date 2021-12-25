import React, { Component } from 'react';
import quotes from "./quotes-api"


const QuoteDisplay = ({ quote, author }) => {
    return (
        <article>
            <p>{quote}</p>
            <p>{author}</p>
        </article>
    );
}

class Message extends Component {
    state = {
        author: "",
        quote: "",
    }
    getRandomQuote = () => {
        let randomNumber = Math.floor(Math.random() * quotes.length)
        let randomQuote = quotes[randomNumber].quote
        let randomName = quotes[randomNumber].name
        console.log(randomQuote)
        console.log(randomName)
        this.setState({ author: randomName })
        this.setState({ quote: randomQuote });
    }

    render() {
        console.log(quotes.length)
        return <div className="messageBox">
            <button onClick={this.getRandomQuote}>Generate</button>
            <article>
                <QuoteDisplay author={this.state.author} quote={this.state.quote} />
            </article>
        </div>;
    }
}

export default Message;