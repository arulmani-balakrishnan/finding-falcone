import React, { useState } from 'react';
import {Redirect} from 'react-router-dom';
import { withAppContext, destinationCount } from "../AppContextProvider";

import EntitySelectionPanel from "../components/EntitySelectionPanel";
import TimeTakenPanel from "../components/TimeTakenPanel";
import Utils from '../utils';
const { isValidObject, range } = Utils;
const destinations = range(destinationCount);

function FindFalcone(props) {
   const [isBtnClicked, setIsBtnClicked] = useState(false);
   const { selectedDatas } = props;
   const isValidData = isValidObject(selectedDatas, destinationCount);
   return (
     isBtnClicked ? <Redirect to={'/results'} key={'results'}/> :
            <div className={'fullWidth'} >
                <button
                    disabled={!isValidData}
                    onClick={() => setIsBtnClicked(!isBtnClicked)}
                    > Find Falcone! </button>
            </div>
    );
}

function HomePage(props) {
    return (
            <div className={'destinationContainer'}>
                <TimeTakenPanel classes={'fullWidth bold'}/>
                {destinations.map(idx=><EntitySelectionPanel key={idx}/>)}
                <FindFalcone {...props}/>
            </div>
    );
}

export default withAppContext(HomePage);
