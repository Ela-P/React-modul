import React from "react";
import { v4 as uuidv4 } from 'uuid';

const ListsPage = ({ userList }) => {
    return (
        <div >
        {userList.map(({name, age,gender}) => {
            return <div key={uuidv4}>
                <p>{`${name}, ${age} y.o. (${gender})`}</p>
            </div>
        })}
        </div> 
    );
};

export default ListsPage;