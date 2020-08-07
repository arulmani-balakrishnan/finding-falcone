import React, { Component } from 'react';
import Select from "react-select";

import {withAppContext} from '../AppContextProvider';

class PlanetsSelectionPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedOption: this.props.selectedOption || ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(option) {
        const { selectedOption } = this.state;
        this.setState({ selectedOption: option })
        this.props.planetChangeHandler(option, selectedOption);

    }
    render() {
        const { planets, selectedDatas, planetChangeHandler } = this.props;
        const { selectedOption } = this.state;
        const options = (planets ? planets : []).map(p =>
        {
            const name = p.name;
            const optionValue = {value: name, label: name};
            return name in selectedDatas ? {isDisabled: true, ...optionValue}  : optionValue;
        });
        return (
            <div>
                <Select
                    value={selectedOption}
                    options={options}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

export default withAppContext(PlanetsSelectionPanel);