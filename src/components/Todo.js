import React from 'react';
import PropTypes from 'prop-types';
import {ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';


class Todo extends React.Component {
  render() {
    return (
      <ListItem
        onTouchTap={this.props.onClick}
        primaryText={this.props.text}
        leftCheckbox={ <Checkbox checked={this.props.completed} /> }
        rightIconButton={ <RaisedButton label="Delete" onTouchTap={this.props.onDelete}/> }
      />
    )
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;