import React from 'react';
import jestDom from '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import PlanetsSelectionPanel from "../src/components/PlanetsSelectionPanel";
import {selectedDatas , planets} from './data';

describe('Planet Selection Panel', ()=>{
    it('Before selection', ()=>{
        const {container} = render(<PlanetsSelectionPanel planets={planets} selectedDatas={{}}/>);
        expect(container).toHaveTextContent('Select...');
    });

    it('After selection', ()=>{
        const option={value: 'Sapir', label: 'Sapir'};
        const { container } = render(<PlanetsSelectionPanel planets={planets}
          selectedDatas={selectedDatas} selectedOption={option}
            />);
        expect(container).toHaveTextContent('Sapir');
    });
});