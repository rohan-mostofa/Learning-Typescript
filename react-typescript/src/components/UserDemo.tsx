import React from 'react';

type UserDemoProps = {
  users : {
    id : number;
    name : string; 
    age : number; 
    email : string;
  }[];
}

const UserDemo = ({users} : UserDemoProps) => {

  console.log(users);
  

  return (
    <>
        <div>
            <h1>Users</h1>
            <hr />
            {
              users.map((user) => {
                return (
                  <div key={user.id}>
                    <h3>Name : {user.name}</h3>
                    <h3>Email : {user.email}</h3>
                    <h3>Age : {user.age} Years</h3>
                  </div>
                )
              })
            }
        </div>
    </>
  )
}

export default UserDemo;
