import React, { Component } from 'react';
import Utils from "./utils";

export const AppContext = React.createContext();
const { BASE_ENDPOINT_URL } = Utils;

export const withAppContext = (Component) =>
   (props) => (
       <AppContext.Consumer>
         {(contextProps) => <Component {...contextProps} {...props}/>}
       </AppContext.Consumer>
   );

export const destinationCount = 4;

class AppContextProvider extends Component {
    constructor() {
        super();
        this.state = {
            planets: [],
            vehicles: [],
            selectedDatas: {},
            contextActions: {
                updateAppState: this.updateAppState.bind(this),
                updateSelectedData: this.updateSelectedData.bind(this)
            }
        }

        this.fetchUrl = this.fetchUrl.bind(this);
    }
    async fetchUrl(type, options) {
        try {
            const url = BASE_ENDPOINT_URL + type;
            const response = await fetch(url, options);
            const jsonResponse = await response.json();
            const data = jsonResponse[type] ? jsonResponse[type] : jsonResponse;
            this.setState({[type]: data});
        } catch {
            this.setState({error: 'Error while fetching data for ' + type  + '!!'})
        }
    }

    updateAppState(newState) {
        this.setState(newState);
    }

    updateSelectedData(planet, vehicle) {
        const { selectedDatas } = this.state;
        selectedDatas[planet] = vehicle;
        this.setState({selectedDatas});
    }

    async componentDidMount() {
        const { fetchUrl } = this;
        ['planets', 'vehicles'].forEach(type => fetchUrl(type));
        fetchUrl('token', {
                method: 'post',
                headers: Utils.requestHeadersForJsonContent()
            });
    }

    render() {
        return <AppContext.Provider value={this.state}>{this.props.children}</AppContext.Provider>;
    }
}
export default AppContextProvider;