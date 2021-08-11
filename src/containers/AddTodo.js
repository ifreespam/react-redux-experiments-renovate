import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class AddTodo extends React.Component {
    constructor() {
        super();
        this.state = {
            value: ""
        };
    }

    onSubmitBtn = () => {
        let state = this.state;
        if (!state.value.trim())
            return
        this.props.dispatch(addTodo(state.value));
        state.value = "";
        this.setState(state);
    }

    onChangeText = (event, value) => {
        let state = this.state;
        state.value = value;
        this.setState(state);
    }

    onKeyPress = (e) => {
        if (e.charCode === 13)
            this.onSubmitBtn();
    }

    render() {
        return (
            <div>
                <TextField 
                    hintText="Type your task"
                    onChange={this.onChangeText}
                    value={this.state.value}
                    onKeyPress={this.onKeyPress}
                />
                <RaisedButton 
                    label="Add ToDo"
                    onTouchTap={this.onSubmitBtn}
                />
            </div>
        )
    }
}

AddTodo = connect()(AddTodo);

export default AddTodo;