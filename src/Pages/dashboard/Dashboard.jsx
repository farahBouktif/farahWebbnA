import React from 'react';
import PropTypes from 'prop-types';

import "./style-dashboard.css"
import DashboardTabs from './DashboardTabs';
import { useState } from 'react';
import DashboardPerformance from './DashboardPerformance';

const Dashboard = () => {

    const tabs = [
        {label: "dash 1", value: 1},
        
]
    const [selected, setSelected] = useState(1);

    const changeValueSelected = (value) => {
        setSelected(value)
    }
    return (
        <div>

            <DashboardTabs tabs={tabs} selected={selected} changeValue={changeValueSelected} />
            {selected === 1 && <DashboardPerformance />}
           
        </div>
    );
};  


Dashboard.propTypes = {

};


export default Dashboard;