import React from 'react';
import jestDom from '@testing-library/jest-dom';
import { render } from '@testing-library/react';


import VehicleSelectionPanel from "../src/components/VehicleSelectionPanel";
import {vehicles} from './data';
const allVehicles = vehicles.map(v => {Object.assign({}, v); delete v.availble_no; return v});

describe('Vehicle Selection Panel', ()=>{
    it('Initial State', ()=>{
        const {container} = render(<VehicleSelectionPanel vehicles={allVehicles}/>);
        expect(container).not.toHaveTextContent();
    });
    it('Before selection', ()=>{
        const {container} = render(<VehicleSelectionPanel vehicles={allVehicles} planet={'Jebing'} distance={100}/>);
        expect(container).not.toHaveTextContent(/1\/2/);
        expect(container).not.toHaveTextContent(/0\/1/);
        expect(container).toHaveTextContent(/1\/1/);
        expect(container).toHaveTextContent(/2\/2/);
    });
    it('After selection', ()=>{
        const vehicle = allVehicles[0];
        vehicle.availble_no = vehicle.total_no-1;
        const {container} = render(<VehicleSelectionPanel vehicles={allVehicles} planet={'Jebing'} distance={100}/>);
        expect(container).toHaveTextContent(vehicle.availble_no + '\/' + vehicle.total_no);
    });

});