import React from 'react';

import { LoginForm } from '../../Components/LoginForm/LoginForm';

export const Login = () => {

    const pageContainer = {
        display: 'flex',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
    }

    return(
        <div style={pageContainer}>
            <LoginForm />
        </div>
    )
}