import React from 'react';
import {Route, Redirect} from 'react-router-dom';

function PrivateRoute({children, ...rest}){
    return(
        <Route {...rest} render={({location}) => {
            if(localStorage.getItem('user')){
                return children
            }else {
                return <Redirect to={{pathname:"/", state:{from:location}}}></Redirect>
            }
        }}/>
    )
}
export default PrivateRoute;