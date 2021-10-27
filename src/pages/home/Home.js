import { Button } from '@material-ui/core'
import React, { useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import {removeuser} from "../../utils/common";




const Home = () => {
    
    
    const history=useHistory()
    const handlelogout=()=>{
        removeuser()
        history.push("/")
        // localStorage.setItem('isLoggedIn', false);

        
        
        
    }
    return (
        <div>
            hello home
            <Button onClick={handlelogout}>logout</Button>
        </div>
    )
}
export default Home