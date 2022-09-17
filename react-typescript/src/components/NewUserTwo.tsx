import React, { FormEvent, useState } from 'react';


const NewUserTwo = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleFormSubmit = (event : FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let newUser = {name, email};
        console.log(newUser);
    }

  return (
    <>
        <h1>Create User</h1>
        <hr />
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="name">
                Name : 
                <input type="text" value={name} onChange={(e : React.ChangeEvent<HTMLInputElement>) => {setName(e.target.value)}} id='name' placeholder='Name' required/>
            </label>

            <label htmlFor="name">
                Email : 
                <input type="email" value={email} onChange={(e : React.ChangeEvent<HTMLInputElement>) => {setEmail(e.target.value)}} id='email' placeholder='Email' required/>
            </label>

            <button type='submit'>Submit</button>
        </form>
    </>
  )
}

export default NewUserTwo;
