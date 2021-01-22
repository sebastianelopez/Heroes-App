import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types';

export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest //resto de los argumentos
}) => {
    
    return (
        <Route 
            {...rest}
            component={ (props) => (
                (!isAuthenticated)
                    ? <Component {...props} />  // Si no esta autenticado el usuario renderiza el componente
                    : <Redirect to="/" />  // Si no lo esta, te envia al login
            )}
        
        />
    )
}

PublicRoute.propTypes= {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}