import React from "react";

const ListsPage = ({ userList }) => {
    return (
        <div >
        {userList.map(({name, age,gender},  index) => {
            return <div key={index}>
                <p>{`${name}, ${age} y.o. (${gender})`}</p>
            </div>
        })}
        </div> 
    );
};

export default ListsPage;