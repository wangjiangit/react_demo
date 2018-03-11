import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TimeComponent from './TimeComponent';  //引入组件TimeComponent

function WarningBanner(props){

    if(!props.warn){
       return null;
    }
    return (
        <span id="warnBanner">警告</span>
    );

}
class App extends Component {
    static app_url = 'http://www.baidu.com';

    render() {
        const isLogin=true;
        let greetStr=null;
        if(isLogin){
            greetStr='Hello ,David';
        }else{
            greetStr='Hello ,Guest';
        }
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
                {greetStr}
                {true && <h3>与运算符</h3>}
                {isLogin ?'Login':'UnLogin'}

                <WarningBanner warn={true} />
            </div>
        );
    }
}

export default App;
