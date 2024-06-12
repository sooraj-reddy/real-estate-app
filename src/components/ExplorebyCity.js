import React from 'react'
import "../App.css"
import ExploreCard from './ExploreCard';
import Heading from './Heading';

class ExplorebyCity extends React.Component {
    render() { 
        return (
            <div className='mostpopular'>
                <Heading text="Explore by City" className='heading'/>
                <div className='properties'>
                    <ExploreCard text="LONDON"/>
                    <ExploreCard text="BOSTON"/>
                    <ExploreCard text="SYDNEY"/>
                    <ExploreCard text="MACAO"/>
                </div>
                <div className='properties'>
                    <ExploreCard text="DUBAI"/>
                    <ExploreCard text="VIENNA"/>
                    <ExploreCard text="AIX"/>
                    <ExploreCard text="TOKYO"/>
                </div>
            </div>
        );
    }
}

export default ExplorebyCity;