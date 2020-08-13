import React from 'react';
import { useHistory } from 'react-router-dom';

function Home(){
    let history = useHistory();
    let user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    const logout = () =>{
        localStorage.removeItem('user');
        history.push('/');
    }
    return(
        <div>
            <div>Hello {user.email}</div>
            <button onClick={logout}>Logout</button>
        </div>
        
    )
}

export default Home