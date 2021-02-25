import React from "react";

const HomePageLayout = ({handleGoToCounter}) => {
    return (
        <div>
        <button onClick={handleGoToCounter}> Go to counter </button>
        </div>
    );
};

export default HomePageLayout;


    