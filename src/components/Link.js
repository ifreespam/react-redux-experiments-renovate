import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    marginRight: 12
}

class Link extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <RaisedButton
                label={this.props.children}
                style={style}
                disabled={this.props.active}
                primary={this.props.primary}
                secondary={this.props.secondary}
                onTouchTap={this.props.onClick}
            />
        )
    }
}

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Link;