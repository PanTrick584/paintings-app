import React from 'react';

import './Container.css';

import Header from '../components/Header'
import PictureSection from '../components/PictureSection';

class Container extends React.Component  {

    render() {
        return(
        <div className="container">
            <Header />
            <PictureSection />
        </div>
        )
    }
};

export default Container;