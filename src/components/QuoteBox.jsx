import React, { useState } from 'react';
import quotes from '../quotes.json';

const getRandom = () => Math.floor(Math.random() * quotes.length)
const colors = ["red", "blue", "green", "yellow", "pink", "grey", "orange", "purple", "brown", "black"]

const QuotesBox = () => {

    const [quotesBox, setQuote] = useState(quotes[getRandom()]);

    const changeObj = () => {
        const random = getRandom()
        setQuote(quotes[random])
    }

    const color = colors[Math.floor(Math.random() * colors.length)]
    document.body.style = `background: ${color}`

    return (

        <div className='box-text' style={{ color: color }}>

            <div className='sub-text'>
                <i className="fa-solid fa-quote-left"></i>
                <h3>{quotesBox.quote} </h3>
            </div>

            <div className='author'>
                <h2>{quotesBox.author}</h2>
            </div>

            <div className='button'>
                <button onClick={changeObj}><i className="fa-solid fa-angles-right"></i></button>
            </div>

        </div>
    );
};


export default QuotesBox; 