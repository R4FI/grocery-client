import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const PrivateRoute = ({children,...rest}) => {
    const { user,isLoading } = useAuth();
    if (isLoading){
        return <Spinner animation="border" />
    }
    return (

            <Route
            {...rest}
        render={({ location }) =>
            user.email ? (
                children
            ) : (
                <Redirect
                    to={{
                        pathname: "/signin",
                        state: { from: location }
                    }}
                />
            )
        }
    />
 
        
    );
};

export default PrivateRoute;