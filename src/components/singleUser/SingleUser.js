import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import {Link} from 'react-router-dom'
import Button from '../button/Button'
import './singleUser.css'
export default function SingleUser() {
    const [user, setUser] = useState();
   const  {id} = useParams()
   
   useEffect(() => {
        if(!user){
            axios.get(` https://jsonplaceholder.typicode.com/users/${id}`)
            .then( res => setUser(res.data))
        }
    })
        let html = undefined
        if(!user){
        html= <p>  Data Loading....</p>
        }
        else{  
            const {name,username,email,phone,company,website,address} = user
            const {street, suite,city, zipcode} = address
            const userDetails = {name,username,email,phone,website,company:company.name}
            const userAddress = {street, suite,city, zipcode}

            html =  <div className = 'single-user'>
                       <h3>User Details</h3>
                       <ul>
                            {/* map method used to avoid accessing property of object one by one in case of a large object */}
                            {/* future refactor: accessing dinamically object inside object to create dynamic list i.e for address */}
                            {Object.keys(userDetails).map( (key,i)=> (
                                <li key={i+key}> {`-${key}: ${userDetails[key]}`} </li>
                                ))}
                            <li>-address:
                                <ul className ='address'>
                                    {Object.keys(userAddress).map( (key,i)=> (
                                    <li key={i+key}> {`${key}: ${userAddress[key]}`} </li>
                                    ))}
                                </ul>
                            </li>
                       </ul>
                       <Link to = {`/`}> <Button text = 'Go Back' bg ='secondary'/> </Link>                     
                   </div>
        }
   return <div className = 'single-user-container'>{html}</div>
}