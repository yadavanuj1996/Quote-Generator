const DEFAULT_STATE = {
  quote: `When everything seems to be going against you, remember that the airplane takes off against the wind, not with it. `,
  author: `Henry Ford`,
  theme: 1 };

var quotes = [
{
  quote: 'Even if your ambitions are huge, start slow, start small, build gradually, build smart.',
  author: 'Gary Vaynerchuk' },
{
  quote: 'Never give up. Today is hard, tomorrow will be worse, but the day after tomorrow will be sunshine.',
  author: 'Jack Ma' },

{
  quote: `Fear is the disease. Hustle is the antidote Whatever it is that you're afraid of, go after it.`,
  author: `Travis Kalanick` },

{
  quote: 'Rule No.1: Never lose money. Rule No.2: Never forget rule No.1',
  author: 'Warren Buffett  ' },

{
  quote: 'Life is not fair; get used to it.',
  author: 'Bill Gates' },

{
  quote: `No, I don't ever give up. I'd have to be dead or completely incapacitated.',
    author: 'Elon Musk` },

{
  quote: `We're here to put a dent in the universe. Otherwise why else even be here?',
    author: 'Steve Jobs` }];




class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = DEFAULT_STATE;
    this.changeQuote = this.changeQuote.bind(this);
  }
  componentWillUpdate() {

  }
  changeQuote() {
    let randomNum = Math.floor(Math.random() * quotes.length);
    this.setState({
      quote: quotes[randomNum].quote,
      author: quotes[randomNum].author });

    this.changeTheme();
  }
  changeTheme() {
    // change code below this line
    let bodyElement = document.getElementsByTagName("BODY")[0];
    let quoteBoxElement = document.getElementById("quote-box");
    let quoteElement = document.getElementById("text");
    let authorElement = document.getElementById("author");
    let twitterElement = document.getElementById("tweet-quote");
    let instaElement = document.getElementById("insta-share-quote");
    let newQuoteBtnElement = document.getElementById("new-quote");

    let themeBackgroundColor = `theme-bg-color-${this.state.theme}`;
    let themeTextColor = `theme-color-${this.state.theme}`;

    bodyElement.classList.remove(themeBackgroundColor);
    authorElement.classList.remove(themeTextColor);
    quoteElement.classList.remove(themeTextColor);
    twitterElement.classList.remove(themeBackgroundColor);
    instaElement.classList.remove(themeBackgroundColor);
    newQuoteBtnElement.classList.remove(themeBackgroundColor);
    // change code above this line

    let randomNumber = Math.floor(Math.random() * 10) + 1; //random number in range of 1-4
    this.state.theme = randomNumber;

    themeBackgroundColor = `theme-bg-color-${randomNumber}`;
    themeTextColor = `theme-color-${randomNumber}`;

    bodyElement.classList.add(themeBackgroundColor);
    authorElement.classList.add(themeTextColor);
    quoteElement.classList.add(themeTextColor);
    twitterElement.classList.add(themeBackgroundColor);
    instaElement.classList.add(themeBackgroundColor);
    newQuoteBtnElement.classList.add(themeBackgroundColor);
  }
  render() {
    return (
      React.createElement("div", null,
      React.createElement("p", { id: "text", class: "text-center" }, "\u201C", this.state.quote, "\u201D"),
      React.createElement("p", { id: "author" }, "-", this.state.author),
      React.createElement("div", { id: "bottom-div", class: "row" },
      React.createElement("div", { class: "col col-6" },
      React.createElement("a", { id: "tweet-quote", href: "http://www.twitter.com/intent/tweet", target: "_blank" },
      React.createElement("i", { class: "fab fa-twitter" })),

      React.createElement("a", { id: "insta-share-quote", href: "#" },
      React.createElement("i", { class: "fab fa-instagram" })),

      React.createElement("div", null)),


      React.createElement("div", { class: "col col-6" },
      React.createElement("a", { onClick: this.changeQuote, id: "new-quote" }, "New Quote")))));




  }}


ReactDOM.render(React.createElement(QuoteMachine, null), document.getElementById("quote-box"));