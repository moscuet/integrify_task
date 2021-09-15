import './main.css'

import UserCard from '../userCard/UserCard'
const Main = ({users}) => {

  const list = users.map( user => <UserCard  key ={user.id} user ={user}/>)
  return (   
      <div className ='main'>
       {list}
     </div>
  
  );
};

export default Main