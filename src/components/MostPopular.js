import React from 'react'
import "../App.css"
import PropertyCard from './PropertyCard';
import Heading from './Heading';

class MostPopular extends React.Component {
    render() { 
        return (
            <div className='mostpopular'>
                <Heading text="Most Popular" className='heading'/>
                <div className='properties'>
                    <PropertyCard/>
                    <PropertyCard/>
                    <PropertyCard/>
                    <PropertyCard/>
                </div>
            </div>
        );
    }
}

export default MostPopular;