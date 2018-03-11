import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TimeComponent from './TimeComponent';  //引入组件TimeComponent


class App extends Component {
    static app_url = 'http://www.baidu.com';

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <a href={App.app_url}>5izan</a>
                <TimeComponent  />
            </div>
        );
    }
}

export default App;
