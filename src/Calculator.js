/**
 * Created by root on 18-3-14.
 * 状态提升
 * TODO:
 * 在React应用中，对应任何可变数据理应只有一个单一“数据源”。
 * 通常，状态都是首先添加在需要渲染数据的组件中。
 * 此时，如果另一个组件也需要这些数据，你可以将数据提升至离它们最近的父组件中。
 * 你应该在应用中保持 自上而下的数据流，而不是尝试在不同组件中同步状态。
 *状态提升比双向绑定方式要写更多的“模版代码”，但带来的好处是，
 *你也可以更快地寻找和定位bug的工作。因为哪个组件保有状态数据，
 *也只有它自己能够操作这些数据，发生bug的范围就被大大地减小了。
 *此外，你也可以使用自定义逻辑来拒绝或者更改用户的输入。
 */

import React, {Component} from 'react';
import TemperatureInput from './TemperatureInput';

/**
 * BoilingVerdict组件[函数形式]
 * @param props
 * @returns {XML}
 * @constructor
 */
function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>水烧开了</p>
    } else {
        return <p>水没烧开</p>
    }
}

/**
 * 转换摄氏度
 * @param fahrenheit
 * @returns {number}
 */
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

/**
 * 转换华氏度
 * @param celsius
 * @returns {number}
 */
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class Calculator extends Component {

    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {  //局部状态
            "temperature": '',
            "scale": 'c'
        };
    }

    handleCelsiusChange(temperature) {
        this.setState({"scale": 'c', temperature});
    }

    handleFahrenheitChange(temperature) {
        this.setState({"scale": 'f', temperature});
    }


    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange}/>

                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange}/>

                <BoilingVerdict
                    celsius={parseFloat(celsius)}/>

            </div>
        );
    }


}
export default Calculator;


