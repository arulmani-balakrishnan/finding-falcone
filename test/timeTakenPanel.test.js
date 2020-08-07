import React from 'react';
import jestDom from '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import TimeTakenPanel from "../src/components/TimeTakenPanel";
import data, {selectedDatas} from './data';

describe('Time Taken Panel', ()=>{
    it('Initial State', ()=>{
        const { container } = render(<TimeTakenPanel/>);
        expect(container).toHaveTextContent('Time Taken: 0');
    });

    it('With all options selected', ()=>{
        const { container } = render(<TimeTakenPanel {...data}/>);
        expect(container).toHaveTextContent('Time Taken: 200');
    });

    it('Only planets selected', ()=>{
        const selectedData = Object.keys(selectedDatas).map(k => {return {[k]: undefined};});
        const { container } = render(<TimeTakenPanel {...data} selectedDatas={selectedData}/>);
        expect(container).toHaveTextContent('Time Taken: 0');
    });

    it('With partial selection', ()=>{
        const selectedData = Object.assign({}, selectedDatas);
        delete selectedData.Jebing;
        delete selectedData.Lerbin;
        const { container } = render(<TimeTakenPanel {...data} selectedDatas={selectedData}/>);
        expect(container).toHaveTextContent('Time Taken: 140');
    });
});