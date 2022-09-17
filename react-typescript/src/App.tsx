import './App.css';
import Button from './components/Button';
import ButtonStyle from './components/ButtonStyle';
import Count from './components/Count';
import Counter from './components/Counter';
import DataFetch from './components/DataFetch';
import NewUser from './components/NewUser';
import NewUserTwo from './components/NewUserTwo';
import Post from './components/Post';
import User from './components/User';
import UserDemo from './components/UserDemo';

let userOne = {
  name : "Rohan Mostofa", 
  age : 20,
  isRegister : true,
  lang : ['Arabic', 'Bangla', 'English']
}

let users = [
  {
    id : 152465478,
    name : 'Rohan Mostofa',
    age : 20,
    email : 'rohanmostofa9900@gmail.com'
  },

  {
    id : 152465479,
    name : 'Mohammad Sujon',
    age : 20,
    email : 'rohanmostofa9900@gmail.com'
  }
];

const buttonStyles = {
  color : '#81214A',
  fontWeight : 'bold'
}

function App() {
  return (
    <div className="App">
      <h1>User Management</h1>
      <hr />
      <User user={userOne}/>
      <UserDemo users={users}/>
      <DataFetch status="success"/>
      <Button>Click Me</Button>
      <Post/>
      <ButtonStyle btnStyle={buttonStyles}/>
      <Count/>
      <NewUser/>
      <NewUserTwo/>
      <Counter/>
    </div>
  );
}

export default App;
