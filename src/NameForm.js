/**
 * Created by root on 18-3-14.
 */

import React, { Component } from 'react';

class NameForm extends Component {

    constructor(props) {
        super(props);
        this.state = {  //局部状态
            "value":''
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);

    }
    handleChange(event){
        let isGoing=false;
        let value=null;
        if(event.target.name=='isGoing'){
           isGoing=event.target.checked;
        }else{
            value=event.target.value;

        }

        this.setState({
            "value":value,
            "isGoing":isGoing
        });
    }

    handleSubmit(event){
        alert('A name was submited'+this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input type="text"  value={this.state.value} onChange={this.handleChange} /><br/>
                    <textarea value={this.state.value}></textarea>
                </label>


                <select value={this.state.value}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option selected value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>

                <input
                    name="isGoing"
                    type="checkbox"
                    checked={this.state.isGoing}
                    onChange={this.handleChange} />
                <input type="submit" value="Submit" />
            </form>
        );
    }




}

export default NameForm;

