/**
 * Created by root on 18-3-14.
 * 状态提升
 */

import React, { Component } from 'react';

function BoilingVerdict(props){
    if(props.celsius >=100){
        return <p>水烧开了</p>
    }else{
        return <p>水没烧开</p>
    }
}
class Calculator extends Component {

    constructor(props) {
        super(props);
        this.handleChange=this.handleChange.bind(this);
        this.state = {  //局部状态
            "temperature":''
        };
    }

    handleChange(e) {
        this.setState({temperature: e.target.value});
    }


    render() {
        const temperature = this.state.temperature;
        return (
            <fieldset>
                <legend>输入一个摄氏温度</legend>
                <input
                    value={temperature}
                    onChange={this.handleChange} />
                <BoilingVerdict
                    celsius={parseFloat(temperature)} />
            </fieldset>
        );
    }


}
export default Calculator;


