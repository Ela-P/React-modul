import React from "react";


import ListsPage from "../components/ListsPage";
import mockUserList from '../components/config/mockUserList';

const ListsPageContainer = () => {
    return (
        <ListsPage userList={mockUserList}/>
        );
}

export default ListsPageContainer;