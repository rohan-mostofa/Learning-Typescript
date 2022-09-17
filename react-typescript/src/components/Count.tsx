import React, { useState } from 'react';

type User = {
    id : number;
    name : string;
}

const Count = () => {

    const [count, setCount] = useState<number>(0);
    const [user, setUser] = useState<null | User>(null);
    const [user2, setUser2] = useState<User>({} as User);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleAddUser = () => {
        setUser({
            id : 321654,
            name : "Rohan Mostafa"
        });
    }

  return (
    <>
        <h2>Count : {count}</h2>
        <button onClick={handleIncrement}>Increment</button>

        <button onClick={handleAddUser}>Add User</button>
        <h2>{user?.name}</h2>
    </>
  )
}

export default Count;
