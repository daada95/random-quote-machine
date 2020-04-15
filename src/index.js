import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// ===================================

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

function Author(props) {
    return (
        <div id='author'>{props.author}</div>
    )
}

function Text(props) {
    return (
        <div id='text'>{props.text}</div>
    )
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'text': '',
            'author': ''
        }
    }
    UNSAFE_componentWillMount() {
        fetch("https://type.fit/api/quotes")
        .then((response) => {return response.json();})
        .then((data) => {
            let num = getRandomInt(1, 1648);
            this.setState({
                'text': data[num].text,
                'author': data[num].author
            })
        });
    }

    handleClick() {
        fetch("https://type.fit/api/quotes")
        .then((response) => {return response.json();})
        .then((data) => {
            let num = getRandomInt(1, 1648);
            this.setState({
                'text': data[num].text,
                'author': data[num].author
            })
        });
    }

    render() {

        return (
            <div id='bckgrd'>
            <div id='quote-box'>
            <Text id='text' text={this.state.text} />
            <Author id='author' author={this.state.author} />
            <div id='button-box'>
            <button 
            id='new-quote'
            onClick={this.handleClick.bind(this)}>
            <i class="fas fa-plus"></i>
            {' New quote!'}
            </button>
            <a 
            href={'https://twitter.com/intent/tweet?text="'+this.state.text.replace(';', '%3B')+'" - '+this.state.author}
            target='_blank' rel='noopener noreferrer' id='tweet-quote'>
            <button
            id='tweet-quote'>
            <i class="fab fa-twitter"></i>
            {' Tweet quote'}
            </button>
            </a>
            </div>
            </div>
            </div>
        )
    }
}

  // ========================================

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
