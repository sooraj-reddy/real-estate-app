import React from 'react';
import PropTypes from 'prop-types';
import "../App.css";

class Heading extends React.Component {
    render() {
        const { text, className } = this.props;

        return (
            <h1 className={className}>{text}</h1>
        );
    }
}

Heading.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string
};

Heading.defaultProps = {
    className: 'heading'
};

export default Heading;
