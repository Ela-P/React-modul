import React from "react";
import {Link} from 'react-router-dom';
import {ROUTES} from "../../../../routs/routeNames";

const HomePageLayout = ({handleGoToCounter}) => {
    return (
        <div>
        <Link to={ROUTES.COUNTER_PAGE}>
        <button> Go to counter </button>
        </Link>
        <Link to={ROUTES.WORK_WITH_LISTS_PAGE}>
        <button> Go to lists </button>
        </Link>
        </div>
    );
};

export default HomePageLayout;

