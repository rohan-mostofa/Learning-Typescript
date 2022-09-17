import React, { useState } from 'react';


const NewUser = () => {

    const [userName, setUserName] = useState('');

    const handleUsername = (event : React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    }

  return (
    <>
        <h1>Create New User</h1>
        <input type="text" value={userName} placeholder="Username" onChange={handleUsername}/>
        <h5>{userName}</h5>
    </>
  )
}

export default NewUser;
