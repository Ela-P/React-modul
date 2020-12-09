import React from 'react';

const FriendListItem = (orderIndex, name, age) => {
    return (
        <>
        <div> Our friend item </div>
        <div className='friendItem'>{`${orderIndex}, ${name} - ${age}`}</div> 
        </>
    );
};

export default FriendListItem;