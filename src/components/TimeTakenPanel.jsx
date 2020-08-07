import React from 'react';

import {withAppContext} from '../AppContextProvider';
import Utils from '../utils';
const { getPlanetDistance, getVehicleSpeed } = Utils;

function TimeTakenPanel( props ) {
    const {selectedDatas, planets, vehicles, classes} = props;
    let timeTaken = 0;
    for(const planet in selectedDatas) {
        const vehicle = selectedDatas[planet];
        const distance = getPlanetDistance( planets, planet);
        const speed = getVehicleSpeed(vehicles, vehicle);
        timeTaken += (speed !=0 ? (distance/speed) : 0);
    };
    return <div className={classes}>Time Taken: {timeTaken}</div>;
}

export default withAppContext(TimeTakenPanel);

