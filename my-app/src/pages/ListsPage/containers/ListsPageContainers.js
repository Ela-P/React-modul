import React, {Component} from "react";


import ListsPage from "../components/ListsPage";
import mockUserList from '../components/config/mockUserList';

class ListsPageContainer extends Component {
    render() {
        
        return (
         <ListsPage userList={mockUserList}/>
        );
    }
}

export default ListsPageContainer;