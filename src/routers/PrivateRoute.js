import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types';

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest //resto de los argumentos
}) => {

    localStorage.setItem('lastPath',rest.location.pathname); //guardo la ultima pagina donde estuvo, para que el usuario al ingresar, vuelva ahi
    
    return (
        <Route 
            {...rest}
            component={ (props) => (
                (isAuthenticated)
                    ? <Component {...props} />  // Si esta autenticado el usuario renderiza el componente
                    : <Redirect to="/login" />  // Si no lo esta, te envia al login
            )}
        
        />
    )
}

PrivateRoute.propTypes= {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}