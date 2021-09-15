import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Home from './pages/Home'
import SingleUser from './components/singleUser/SingleUser'

import './App.css'

const App = ()=> {
  const [ users, setUsers] = useState([])
   
  useEffect( ()=>{
    const getData = async () =>{
      axios.get('https://jsonplaceholder.typicode.com/users')
     .then( res =>{
      setUsers(res.data)
     })
    }
    getData()
    },[])

    return (
      <Router>
        <div className="App" >  
             <Switch>
               <Route path = '/' exact><Home users= {users}/></Route>
               <Route path='/users/:id'> <SingleUser /></Route>
             </Switch>
        </div>
      </Router>
    );
  };

export default App;