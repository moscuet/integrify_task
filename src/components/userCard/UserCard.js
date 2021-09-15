import React from 'react'
import {Link} from 'react-router-dom'
import './userCard.css'
import Button from '../button/Button'
export default function UserCard({user}) {
    return (
        <div className="user_card">
               <div className="card-header">
                   <div>{user.name[0]}</div>
                </div>
                
                <div className = 'card-text'>
                    <h5> {user.name}</h5>
                    {`@${user.username}`}
                    <p><a href ={`https://www.${user.website}`} target ='blank' >{user.website}</a></p>
                    <Link to = {`/users/${user.id}`}> <Button text= 'MORE DETAILS' bg = 'primary'/></Link>                   
               </div>               
        </div>
    )
}

