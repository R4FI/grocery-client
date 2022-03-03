import React, { useState } from 'react';
import { Link, NavLink, useHistory, useLocation } from 'react-router-dom';
import {Col, Container, Form, Row } from 'react-bootstrap';
import './SignIn.css';
import TextField from '@mui/material/TextField';
import login from "../../../Image/login.png";
import useAuth from '../../../hooks/useAuth';
import { Alert, CircularProgress } from '@mui/material';
import Header from '../../Shared/Header/Header';
const SignIn = () => {
    const [loginData,setLogIndata] = useState({});
    const { user, signInUsingGoogle,logIn,authError,isLoading} = useAuth();
  
  
    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e =>{
          const field = e.target.name;
          const value = e.target.value;
          const newLogInData = {...loginData};
          newLogInData[field] = value;
          setLogIndata(newLogInData);
    }
    const handleLoginOnSubmit = e =>{
      logIn(loginData.email, loginData.password, location, history);
      e.preventDefault();
    
    }

 const handleGoogleSignIn = () => {
     signInUsingGoogle(location,history);
       
 }




    return (
        <div >
            <Header></Header>
               <Container>
                <h2 className="mt-5">Log In</h2>
                <Row className="d-flex ">
                    <Col md={6}>
                        <img src={login} alt="" className="w-75"/>
                    </Col>

                        <Col md={6}>
                        <div className="bg">
                   <Form  onSubmit={handleLoginOnSubmit}>
                   <TextField className="w-50 mt-3" 
              required onBlur={handleOnBlur} 
              name="email"
             label="Email"
             type="email"
             variant="standard"
           /> <br/>
            <TextField className="w-50 mt-3" 
             required onBlur={handleOnBlur} 
             name="password"
             label="Pasword"
             type="password"
             variant="standard"
           />
           <br/>
           <div className="d-fle m-auto">
           <button type="submit" className="bttn">Sign In</button>
           <NavLink  as={Link} to={"/signup"}>
               <h3 className="sign mt-3">New user?Please Sign Up</h3>
           </NavLink>

          
           </div>
           {user?.email && <Alert severity="success">Login successfully!</Alert>}
           {isLoading  &&  <CircularProgress/>}
           {authError &&  <Alert severity="error">{authError}</Alert>}

           </Form>
           
           <br/> 
           <button onClick={handleGoogleSignIn} className="mt-3 bttn" variant="warning" type="submit">
            SignUp With Google
            </button>
           </div>
           </Col>
                </Row>
              
        </Container>
        </div>
    );
};

export default SignIn;