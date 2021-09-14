import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FibreManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FibreManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("Tesla hit new Highs", "Cars and auto - 886 readers")}
            {newsArticle("Bitcoin breaks 22k", "Crypto - 300 readers")}
            {newsArticle("Is redux too good", "Code - 200 readers")}
        </div>
    )
}

export default Widgets
