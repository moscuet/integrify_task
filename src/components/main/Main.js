import './main.css'

import UserCard from '../userCard/UserCard'
const Main = ({users}) => {

  const list = users.map( user => <UserCard  key ={user.id} user ={user}/>)
  return ( 
      <>
        <h1>All Users</h1>
        <div className ='main'>           
            {list}
        </div>
      </>         
  );
};

export default Main