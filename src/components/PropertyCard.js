import React from 'react'
import "../App.css"

class PropertyCard extends React.Component {
    render() { 
        return (
            <div className="card" style={{width: '20rem', height: '18rem'}}>
                <img className="card-img-top" src={require("../assets/default.jpg")} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">
                    Coppermaker Square, London
                    </p>
                    <p>
                    From £3,723/month   
                    </p> 
                </div>
            </div>
        );
    }
}

export default PropertyCard;
