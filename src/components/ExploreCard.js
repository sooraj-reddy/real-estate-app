import React from 'react'
import PropTypes from 'prop-types';
import "../App.css"

class ExploreCard extends React.Component {
    render() { 
        const { text, className } = this.props;
        return (
            <div className="card" style={{width: '20rem', height: '15rem'}}>
                <div className="overlay">{text}</div>
                <img className="card-img-top" src={require("../assets/default.jpg")} alt="Card image cap" style={{width: '20rem', height: '15rem', backgroundSize: 'cover'}} />
            </div>
        );
    }
}

ExploreCard.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string
};

ExploreCard.defaultProps = {
    className: ''
};

export default ExploreCard;
