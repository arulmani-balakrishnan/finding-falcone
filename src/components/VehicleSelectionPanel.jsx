import React from 'react';
import {RadioGroup, Radio} from 'react-radio-group'

import {withAppContext} from '../AppContextProvider';

function SelectVehicle(props) {
    const {className, name, isDisabled, availableVehicleCount, totalVehicles} = props;
    return (
        <div className={className} key={name}>
            <Radio value={name} disabled={isDisabled}/>{name} ({availableVehicleCount}/{totalVehicles})
        </div>
    );
}

function VehicleSelectionPanel(props) {
    const { vehicles, planet, vehicleChangeHandler, distance } = props;
    const radioOptions = (planet != null ? vehicles : []).map(v => {
        const name = v.name;
        const totalVehicles = v.total_no;
        const availableVehicleCount = v.availble_no != undefined ? v.availble_no : totalVehicles;
        const isDisabled = distance > v.max_distance || availableVehicleCount === 0 ;
        const className = isDisabled ? 'disabledLabel' : '';
        return <SelectVehicle className={className}
                     key={name} name={name}
                     isDisabled={isDisabled}
                     availableVehicleCount={availableVehicleCount}
                     totalVehicles={totalVehicles}/>;

    });
    return (
        <div className={'vehicleSelectionPanel'}>
            <RadioGroup name={planet} onChange={vehicleChangeHandler}>
                {radioOptions}
            </RadioGroup>
        </div>
    );
}

export default withAppContext(VehicleSelectionPanel);