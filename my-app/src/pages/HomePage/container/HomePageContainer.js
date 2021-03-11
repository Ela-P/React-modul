import HomePageLayout from "../components/HomePageLayout";

import { ROUTES } from '../../../routs/routeNames';  

const HomePageContainer = ({ history }) => {
    const handleGoToCounter = () => {
        history.push(ROUTES.COUNTER_PAGE);
    }
    return (
        <HomePageLayout handleGoToCounter={handleGoToCounter}/>
    );
};

export default HomePageContainer;