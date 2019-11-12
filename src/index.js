import React, { Component } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';

const DEFAULT_STATE={
  quote: `When everything seems to be going against you, remember that the airplane takes off against the wind, not with it. `,
  author: `Henry Ford`,
   theme: 1
}
var quotes=[
  {
    quote:'Even if your ambitions are huge, start slow, start small, build gradually, build smart.',
    author:'Gary Vaynerchuk'},
  {
    quote: 'Never give up. Today is hard, tomorrow will be worse, but the day after tomorrow will be sunshine.',
    author:'Jack Ma'
  },
  {
   quote:`Fear is the disease. Hustle is the antidote Whatever it is that you're afraid of, go after it.`,
    author:`Travis Kalanick`  
  },
  {
    quote: 'Rule No.1: Never lose money. Rule No.2: Never forget rule No.1',
    author: 'Warren Buffett  '
  },
  {
    quote: 'Life is not fair; get used to it.',
    author: 'Bill Gates'
  },
  {
    quote: `No, I don't ever give up. I'd have to be dead or completely incapacitated.`,
    author: `Elon Musk`
  },
  {
    quote: `We're here to put a dent in the universe. Otherwise why else even be here?`,
    author: `Steve Jobs`
  
  }
];

class QuoteMachine extends React.Component{
  constructor(props){
    super(props);
    this.state=DEFAULT_STATE;
    this.changeQuote=this.changeQuote.bind(this);
  }
  
  changeQuote(){
    let randomNum=Math.floor(Math.random()*(quotes.length));
    this.setState({
      quote: quotes[randomNum].quote,
      author: quotes[randomNum].author
    });
    this.changeTheme();
  }
  changeTheme(){
       // change code below this line
    let bodyElement=document.getElementsByTagName("BODY")[0];
    let quoteBoxElement=document.getElementById("quote-box");
    let quoteElement=document.getElementById("text");
    let authorElement=document.getElementById("author");
    let twitterElement=document.getElementById("tweet-quote");
    let instaElement=document.getElementById("insta-share-quote");
    let newQuoteBtnElement=document.getElementById("new-quote");
    
    let themeBackgroundColor=`theme-bg-color-${this.state.theme}`;
    let themeTextColor=`theme-color-${this.state.theme}`;
    
    bodyElement.classList.remove(themeBackgroundColor);
    authorElement.classList.remove(themeTextColor);
    quoteElement.classList.remove(themeTextColor);
    twitterElement.classList.remove(themeBackgroundColor);
    instaElement.classList.remove(themeBackgroundColor);
    newQuoteBtnElement.classList.remove(themeBackgroundColor);
      // change code above this line
    
    let randomNumber=Math.floor(Math.random()*10)+1; //random number in range of 1-4
    this.state.theme=randomNumber;
    
    themeBackgroundColor=`theme-bg-color-${randomNumber}`;
    themeTextColor=`theme-color-${randomNumber}`;
    
    bodyElement.classList.add(themeBackgroundColor);
    authorElement.classList.add(themeTextColor);
    quoteElement.classList.add(themeTextColor);
    twitterElement.classList.add(themeBackgroundColor);
    instaElement.classList.add(themeBackgroundColor);
    newQuoteBtnElement.classList.add(themeBackgroundColor);
  }
  render(){
    return(
      <div>
        <QuoteText quote={this.state.quote}/>
        <AuthorName author={this.state.author} />
        <div id="bottom-div" className="row">
        <div className="col col-6">
          <a id="tweet-quote" href="http://www.twitter.com/intent/tweet" target="_blank">
                    <i className="fab fa-twitter"></i>   
                  </a>
          <a id="insta-share-quote" href="#">
                    <i className="fab fa-instagram"></i>   
                  </a>
          <div>
          </div>
        </div>
        <div className="col col-6">
          <a onClick={this.changeQuote} id="new-quote">New Quote</a>
        </div>
      </div>
      </div>  
    );
  }
}

class QuoteText extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <p id="text" className="text-center">“{this.props.quote}”</p>
    );
  }
}

class AuthorName extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <p id="author">-{this.props.author}</p>
    );
  }
}

render(<QuoteMachine />,document.getElementById("quote-box"));