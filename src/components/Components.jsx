import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {withAppContext} from "../AppContextProvider";
import ResultsPage from "../pages/ResultsPage";
import HomePage from "../pages/HomePage";

function Header() {
    const logo = "/logo.png"
    return (
        <div className={'headerBar'}>
            <div><img src={logo} alt={'Logo'}/></div>
        </div>
    );
}

function ErrorPage(props) {
    return <div className={'errorMessage'}>{props.error}</div>
}

function RouterConfig() {
    return (
        <Router>
            <Switch>
                <Route path="/search">
                    <HomePage />
                </Route>
                <Route path="/results">
                    <ResultsPage />
                </Route>
                <Route exact path="/">
                    <HomePage />
                </Route>
            </Switch>
        </Router>
    );
}

function ContentsPanel(props) {
    return (
        <div className={'contentsPanel'}>
            <SectionHeader/>
            <div className={'dataContainer'}>
                {props.error ? <ErrorPage {...props}/> : <RouterConfig/> }
            </div>
        </div>
    );
}

function Footer() {
    const link = 'https://www.geektrust.in/coding-problem/frontend/space';
    return (
        <div className={'footerBar'}>
            <a href={link}>Geektrust coding challenge - Finding Falcone!</a>
        </div>
    );
}

function SectionHeader() {
    return <div className={'sectionHeader'}>Finding Falcone!</div>
}

function DetailsRow(props) {
    const {label, value} = props;
    return <div>{label} : {value}</div>
}

export default {
    Header,
    ContentsPanel: withAppContext(ContentsPanel),
    SectionHeader,
    Footer,
    DetailsRow
};