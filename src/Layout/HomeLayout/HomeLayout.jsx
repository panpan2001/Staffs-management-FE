import React from 'react'
import ContactForm from '../../component/Redux-form/ContactForm';
import SignInForm from '../../component/Redux-form/SignInForm ';

export default function Home() {
     const handleSubmit = values => {
        console.log(values);
    };
    return (
        <div className="container is-center">
            <p><strong className="is-size-1 has-text-primary is-center">Staff management using ReactJS and Bulma</strong></p>
            <img src={require('../../img/img-reactjs-2.jpg')} alt="" srcSet="" className="img_home" />
            <p>Sign in </p>
            {/* <ContactForm onSubmit={handleSubmit} /> */}
            <SignInForm onSubmit={handleSubmit}/>
        </div>
    )
}