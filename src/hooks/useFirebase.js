import initializeFirebase from "../pages/User/Firebase/firebase.init";
import {getAuth, createUserWithEmailAndPassword,signOut,
  onAuthStateChanged,signInWithEmailAndPassword,updateProfile,signInWithPopup,GoogleAuthProvider} from "firebase/auth";
import { useState, useEffect } from 'react';

// initialize firebase app
initializeFirebase();

const useFirebase = () => {
  const [user,setUser] = useState({});
  const[isLoading,setIsLoading]= useState(true);
  const[authError,setAuthError]= useState('');
  const [admin,setAdmin] = useState(false);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const registerUser = (email,password,name,history) =>{
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      setAuthError('');
      const newUser = {email,displayName: name};
      setUser(newUser);
      // save User
      saveUser(email,name,'POST');
      updateProfile(auth.currentUser, {
        displayName: name
      }).then(() => {
      
      }).catch((error) => {
      
      });
      
      history.replace('/');
    })
    .catch((error) => {
  
     setAuthError(error.message);
      // ..
    })
    
    .finally(()=>setIsLoading(false));
    

  

  }

  // log in

  const logIn = (email,password,location,history) =>{
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const destination = location.state?.from || '/';
      history.replace(destination);
      setAuthError('');
     
    })
    .catch((error) => {
      setAuthError(error.message);
    })
    .finally(()=>setIsLoading(false));
  }


      // google login
      const signInUsingGoogle = (location,history) =>{
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
        .then((result) => {
          saveUser(user.email,user.displayName, 'PUT');
          setAuthError('');
        
        }).catch((error) => {
          setAuthError(error.message);

        })
        .finally(()=>setIsLoading(false));

      }

// observe user start
    useEffect(()=>{

    const unSubs = onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
        } else {
          setUser({})
        }
          setIsLoading(false);
      });

      return ()=> unSubs;
    },[auth])

     
    // save user
    const saveUser = (email,displayName,method) => {
      const user = {email,displayName};
      fetch('http://localhost:5000/users',{
        method: method,
        headers:{
          'content-type' : 'application/json'
        },
        body : JSON.stringify(user)
      })

      .then()

    }
      // admin
      useEffect(()=>{
        fetch(`http://localhost:5000/users/${user.email}`)
        .then(res=> res.json())
        .then(data => setAdmin(data.admin))

      },[user.email])



      // log out
  const logOut =()=>{
    setIsLoading(true);
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    })
    .finally(()=>setIsLoading(false));
    
  }

   

return {
  user,
  admin,
  signInUsingGoogle,
  authError,
  isLoading,
  registerUser,
  logIn,
  logOut,
   
}






}

export default useFirebase;




