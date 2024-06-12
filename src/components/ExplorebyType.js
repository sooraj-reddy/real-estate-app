import React from 'react'
import "../App.css"
import ExploreCard from './ExploreCard';
import Heading from './Heading';

class ExplorebyType extends React.Component {
    render() { 
        return (
            <div className='mostpopular'>
                <Heading text="Explore by Type" className='heading'/>
                <div className='properties'>
                    <ExploreCard text="VILLA"/>
                    <ExploreCard text="APARTMENT"/>
                    <ExploreCard text="FARMHOUSE"/>
                    <ExploreCard text="BUNGALOW"/>
                </div>
            </div>
        );
    }
}

export default ExplorebyType;