import React from 'react';

import { ImageContainer } from '../ImageContainer/ImageContainer';
import './index.css'

export const LoginForm = () => {

    const LoginFormStyling = {
        width: '550px',
        backgroundColor: 'rgb(253 117 74)',
        height: '825px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    }

    const FormStyling = {
        display: 'flex',
        flexDirection: 'column',
        width: '60%',
    }

    return (
        <>
            <ImageContainer/>
            <div style={LoginFormStyling}>
                <form style={FormStyling}>
                    <div className="form__group field">
                        <input type="input" className="form__field" placeholder="Name" name="name" id='name' required />
                        <label for="name" className="form__label">Nome</label>
                    </div>
                    <div className="form__group field">
                        <input type="password" className="form__field" placeholder="Password" name="password" id='password' required />
                        <label for="name" className="form__label">Senha</label>
                    </div>
                </form>
            </div>
            
        </>
    )
}