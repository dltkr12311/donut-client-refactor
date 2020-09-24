import React from "react";
import AuthForm from '../Components/Auth/AuthForm';
import AuthTemplate from '../Components/Auth/AuthTemplate';

const RegisterPage = () => {
    return (
        <>
            <AuthTemplate>
                <AuthForm type='register' />
            </AuthTemplate>
        </>
    );
};

export default RegisterPage;
