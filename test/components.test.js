import React from 'react';
import jestDom from '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Components from "../src/components/Components";
const {Header, ContentsPanel, SectionHeader, DetailsRow, Footer} = Components;

describe('Components.jsx', ()=> {
    it('SectionHeader', ()=>{
        const {queryByText} = render(<SectionHeader/>);
        expect(queryByText('Finding Falcone!')).toBeInTheDocument();
    });
    it('DetailsRow', ()=>{
        const label='TestLabel', value='TestValue';
        const { container } = render(<DetailsRow label={label} value={value}/>);
        expect(container).toHaveTextContent(label);
        expect(container).toHaveTextContent(value);
    });
    it('Footer', ()=>{
        const { container } = render(<Footer/>);
        expect(container).toHaveTextContent('Geektrust coding challenge - Finding Falcone!');
    });
    it('ContentsPanel', ()=>{
        const { container } = render(<ContentsPanel/>);
        expect(container).toHaveTextContent('Finding');
        expect(container).toContainHTML('contentsPanel');
        expect(container).toContainHTML('dataContainer');
    });
    it('Header', ()=>{
        const { container } = render(<Header/>);
        expect(container).toContainHTML('headerBar');
    });
});