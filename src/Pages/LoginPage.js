import React from 'react';
import AuthForm from '../Components/Auth/AuthForm';
import AuthTemplate from '../Components/Auth/AuthTemplate';

const LoginPage = () => {
    return (
        <>
            <AuthTemplate>
                <AuthForm type='login' />
            </AuthTemplate>
        </>
    );
};
export default LoginPage;