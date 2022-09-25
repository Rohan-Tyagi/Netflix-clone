import React from 'react';
import './SignIn.css';
import img from '../Images/Netflix-Background-img.jpg';

function SignIn () {
    return(
        <div className='SignIn__containers'>
        <div className='SignIn__texts'>
           <b> Unlimited movies, TV shows and more.</b>
        
        </div>
        <button className='SignIn__btn'>
            <div className='SignIn__text'> Get Started ></div>
        </button>
        <img src= {img} alt='netflix'></img>

        </div>
    );
};

export default SignIn;