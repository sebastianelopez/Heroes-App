import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,       
  } from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';
import { PrivateRoute } from './PrivateRoute';
import { LoginScreen } from '../componentes/login/LoginScreen';
import { DashboardRouts } from './DashboardRouts';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const {user} = useContext(AuthContext);

    return (
        <Router>
            <div>                

        
                <Switch>
                    <PublicRoute 
                        exact path='/login' 
                        component={LoginScreen}
                        isAuthenticated={user.logged}    
                    />
                        
                    <PrivateRoute 
                        path='/' 
                        component={DashboardRouts}
                        isAuthenticated={user.logged}    
                    />
                </Switch>
             </div>
        </Router>
    )
}
