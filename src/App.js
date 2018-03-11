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

function ItemList(){
    let nums=[1,2,3,4];
    let numsList= nums.map((num)=>{
        return <li key={num.toString()}>{num}</li>  //为每个元素分配key属性，是让React更好的确定那个元素发生变化
    });
    return <ul>{numsList}</ul>;
}


function UserList(){
    let userArr=[
        {"id":1,"name":"张三","age":21,"sex":"男"},
        {"id":2,"name":"李四","age":22,"sex":"男"},
        {"id":3,"name":"王五","age":21,"sex":"女"},
    ];

    return (
        <ul>
            {userArr.map((userObj)=>{
              return  <li key={userObj.id}>{userObj.name}</li>
            })}
        </ul>
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
                <ItemList />
                <UserList />
            </div>
        );
    }
}

export default App;
