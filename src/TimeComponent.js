import React, { Component } from 'react';

class TimeComponent extends Component {
    static description = 'Time Component';

    constructor(props) {
        super(props);
        this.state = {  //局部状态
            "date": new Date()
        };
    }

    tick() {
        /*this.setState({ //局部状态更新
         "date":new Date()
         });*/
        this.setState((prevState, props)=>({
            "date": new Date()
        }));
    }

    //生命周期钩子(挂载)
    componentDidMount() {
        this.timerId = setInterval(()=> this.tick(), 1000);
    }

    //生命周期钩子（卸载）
    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    stopTime(e) {
        e.preventDefault();
        clearInterval(this.timerId);
    }

    render() {
        return (
            <span>
                {TimeComponent.description} {this.state.date.toLocaleTimeString()}
            </span>
        );
    }




}

export default TimeComponent;

