import './main.css'

import UserCard from '../userCard/UserCard'
const Main = ({users}) => {

  const list = users.map( user => <UserCard  key ={user.id} user ={user}/>)
  return ( 
      <> 
        <div className ='main'>  
            <h1>All USers</h1>         
            {list}
        </div>
      </>         
  );
};

export default Main