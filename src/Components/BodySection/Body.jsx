import React from 'react'
import { Top } from './TopSection/Top'
import { Activity } from './ActivitySection/Activity'
import { Listing } from './ListingSection/Listing'
import './body.scss';
import { CardComponent } from './TopSection/components/cardComponent';

export const Body = () => {
    return (
        <div className='mainContent'>
            {/* <Top /> */}
            {/* <CardComponent></CardComponent> */}
            <div className='bottom flex'>
                <Listing />
                <Activity />
            </div>
        </div>
    )
}
