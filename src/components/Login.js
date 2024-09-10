import React from 'react'
import loginimg from '../Images/draw2.svg'
import { Footer } from './Footer'
const Login = () => {
  return (
    <>
        <div className='p-3 p-md-5 m-3 m-md-5'>
        <div className='card shadow p-md-5'>
        <div className='row text-center pt-3'>
        <div className='col-md-6'></div>
        <div className='fw-bold h3 col-md-6'>LOGIN </div>
        </div>
            <div className='row p-3 p-md-5'>
            <div className='col-md-6 d-none d-md-block' style={{borderRight: '1px solid black'}}>
              <img src={loginimg} height={300} width={600}/>
            </div>
            <div className='col-md-6 text-center ps-3 ps-md-5'>
                <div className='mb-3 mb-md-4'><input className='form-control' type='email' placeholder='Email'/></div>
                <div className=''><input className='form-control' type='password' placeholder='Password'/></div>
                <div className='row mt-4'>
                  <div className='col-6'><input type='checkbox' className='p-2'/> Remember me</div>
                  <div className='col-6'><a href='#'  style={{textDecoration:'none'}}>Forgot password?</a></div>
                </div>
                <a href='/dashboard' className='btn bg-primary text-white mt-4 form-control'>Sign In</a>
                <div className='row mt-4'>
                  <div className=''>Not a member? <a href='/signup' className='text-danger' style={{textDecoration:'none'}}>Register Now</a></div>
                </div>
            </div>
            </div>
        </div>
        </div>
        <Footer/>
    </>
  )
}

export default Login;
