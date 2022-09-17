import React from 'react';

// string, number, boolean, void & null
// user defined types -> Object, Array, Enum, Union, Any & Custom Type

type UserProps = {
    user : {
        name : string; 
        age : number; 
        isRegister : boolean;
        lang : string[]
    }
};

const User = ({user} : UserProps) => {
  return (
    <>
        <div>
            <h3>Name : {user.name}</h3>
            <h3>Age : {user.age} Years</h3>
            <h3>Is Register : {user.isRegister ? 'Yes!' : 'No!'}</h3>
            <h3>Language : 
              
              {
                user.lang.map((language) => {
                
                  return ' ' + language + ','
                
                })
              }

            </h3>
        </div>
    </>
  )
}

export default User;