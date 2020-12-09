import React from 'react';
import FriendListItem from '../FriendListItem/FriendListItem';


const SomeComponent = ({ name, age, friends }) => {
    return (
      <div className='wrapper'>
         <h2>My name is {name} and me {age} </h2>
          <h3>This is my friends:</h3>
          {friends.map((friend, index) =>  {
           return (
            <FriendListItem 
            key={index} age={friend.age} 
            name={friend.name} 
            orderIndex={index}/>
           )
          })}
      </div>
    );
};

export default SomeComponent;