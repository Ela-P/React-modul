import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ROUTES } from "./routeNames";

import HomePageContainer from "../pages/HomePage/container/HomePageContainer";
import CounterPageContainer from '../pages/counterPage/containers/CounterPageContainer';

function Routes() {
    return (
        <Switch>
            <Route exact path={ROUTES.HOME_PAGE} component={HomePageContainer} />
            <Route exact path={ROUTES.COUNTER_PAGE} component={CounterPageContainer} />
        </Switch>
    );
}

export default Routes;