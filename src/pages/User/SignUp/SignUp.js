import React, { useState } from 'react';
import { Container} from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import { NavLink, useHistory} from 'react-router-dom';
import { Alert, CircularProgress} from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import Header from '../../Shared/Header/Header';
import './SignUp.css';
const SignUp = () => {
    const [loginData,setloginData] = useState({});
    const {user,registerUser,authError} = useAuth();
    const{isLoading} = useAuth();
    
    const history = useHistory();


    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setloginData(newLoginData);
    }
    
   
    const handleRegisterSubmit = e =>{
        if(loginData.password !== loginData.password2){
         alert('Password Missmatch');
            return;
        }
        registerUser(loginData.email,loginData.password,loginData.name,history)
        e.preventDefault();
       
    }
   

    return (
        <div>
            <Header></Header>
          <Container className="register signup">
                            <h2 className="text-center mt-5 headsign">Sign Up/Register</h2>
                          {!isLoading && <form onSubmit={handleRegisterSubmit}>
                        <TextField style={{m:1 ,width:'75%'}}
                        label="User Name" onBlur={handleOnBlur}
                        required
                        name="name"
                        variant="standard" /> <br/>

                        <TextField style={{m:1 ,width:'75%'}}
                        label="Email" onBlur={handleOnBlur}
                        type="email" required
                        name="email"
                        variant="standard" /> <br/>

                        <TextField  style={{m:1 ,width:'75%'}}
                        label="Password"   onBlur={handleOnBlur}
                        type="password"   required
                        name="password"
                        variant="standard" /><br/> 

                        <TextField  style={{m:1 ,width:'75%'}}
                        label="Confirm Password"   onBlur={handleOnBlur}
                        type="password"   required
                        name="password2"
                        variant="standard" />
                        <br/> 
                           <button className="signupbtn w-25 mt-4 mb-3">Sign Up</button> <br/>
                           </form>
}                          {isLoading  &&  <CircularProgress/>}
                           <NavLink className="link" to={"/signin"}>Alreay have a Account? LogIn</NavLink>
                            {
                            user?.email && <Alert severity="success">User Added Successfully</Alert>
                            }
                            {authError &&  <Alert severity="error">{authError}</Alert>}
                       
              
              </Container>  
        </div>
    );
};

export default SignUp;