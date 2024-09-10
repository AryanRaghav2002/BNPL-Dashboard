import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './Footer';
import loginimg from '../Images/draw2.svg'


const SignUp = () => {
  return (
    <>
        <div className='p-3 p-md-5 m-3 m-md-5'>
        <div className='card shadow p-md-5'>
        <div className='row text-center pt-3'>
        <div className='col-md-6'></div>
        <div className='fw-bold h3 col-md-6'>SIGN-UP </div>
        </div>
            <div className='row p-3 p-md-5'>
            <div className='col-md-6 d-none d-md-block' style={{borderRight: '1px solid black'}}>
              <img src={loginimg} height={300} width={600}/>
            </div>
            <div className='col-md-6 text-center ps-3 ps-md-5'>
                <div className='mb-3 mb-md-4'><input className='form-control' type='email' placeholder='Full Name'/></div>
                <div className='mb-3 mb-md-4'><input className='form-control' type='email' placeholder='Email'/></div>
                <div className='mb-3 mb-md-4'><input className='form-control' type='password' placeholder='Password'/></div>
                <div className=''><input className='form-control' type='password' placeholder='Confirm Password'/></div>
                <a href='#' className='btn bg-primary text-white mt-4 form-control'>Sign Up</a>
                <div className='row mt-4'>
                  <div className=''>Already a member? <a href='/' className='text-danger' style={{textDecoration:'none'}}>Login</a></div>
                </div>
            </div>
            </div>
        </div>
        </div>
        <Footer/>
    </>

  )
}

export default SignUp;
