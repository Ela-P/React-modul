import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ROUTES } from "./routeNames";

import HomePageContainer from "../pages/HomePage/container/HomePageContainer";
import CounterPageContainer from '../pages/counterPage/containers/CounterPageContainer';
import ListsPageContainer from "../pages/ListsPage/containers/ListsPageContainers";


const Routes = () => {
    return (
        <Switch>
            <Route exact path={ROUTES.HOME_PAGE} component={HomePageContainer} />
            <Route path={ROUTES.COUNTER_PAGE} component={CounterPageContainer} />
            <Route path={ROUTES.WORK_WITH_LISTS_PAGE} component={ListsPageContainer} />
        </Switch>
    );
}

export default Routes;