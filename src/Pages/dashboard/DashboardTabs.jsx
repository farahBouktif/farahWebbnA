import React from 'react';
import PropTypes from 'prop-types';
import "./style-dashboard.css"

const DashboardTabs = ({tabs, changeValue, selected}) => {
    return (
        <div className='tabs'>
            {tabs && tabs.map( (el, i) => (
                <div className={`tab ${selected === el.value && 'tab-selected'}`} key={i + 'key_tab'} onClick={()=> changeValue(el.value)}>{el.label}</div>
            ))}
        </div>
    );
};


DashboardTabs.propTypes = {

};


export default DashboardTabs;