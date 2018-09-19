import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Hello = () => <h2>Hello World from HSBC</h2>
const Image = ({src, title, width, height}) => {
  src = src || 'https://www.w3schools.com/html/pic_trulli.jpg';
  title = title ||  'Image';
  width = width || "500";
  height = height || "333";
  return (
  <img src={src} alt={title} width={width} height={height}></img>
  ) 
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Hello/>
        <Image title="This is a image from w3school"/> 
        <br/>
        <Image src="https://www.w3schools.com/html/img_girl.jpg" />
        <br/>
        <Image src="https://www.w3schools.com/html/img_chania.jpg" />
      </div>
    );
  }
}

export default App;
