import React from 'react';
import logo from '../logo.png'

const SignUp = () => {
    return (
        <div style={{ backgroundColor: '', padding: '10px 0' }}>
            <div className='text-center'>
                <img style={{ width: '100px' }} src={logo} />
            </div>
            <div className='d-flex flex-wrap justify-content-center my-5 w-50' style={{ border: '1px solid lightGrey', margin: 'auto', borderRadius: '15px', padding: '30px 0', backgroundColor: 'white' }}>
                <h3 className='font-weight-bold mb-5'>Signup</h3>
                <form className='d-flex flex-wrap justify-content-center' >
                    <div className="form-group col-md-8 mb-4">
                        <input type="text" className="form-control" name='name' id='name' placeholder="Username" pattern="/^[\p{L}\p{N}]+(?:[- \'\x26][\p{L}\p{N}]+| [\x26] [\p{L}\p{N}]+)*$/iu" required="required" />
                    </div>
                    <div className="form-group col-md-8 mb-4">
                        <input type="text" className="form-control" name='email' id='email' placeholder="Enter Your Email Address" />
                    </div>
                    <div className="form-group col-md-8 mb-4">
                        <input type="password" className="form-control" name='password' id='password' placeholder="Password" required="required" />
                    </div>
                    <div className="form-group col-md-8 mb-4">
                        <input type="password" className="form-control" name='confirmPassword' id='confirm-password' placeholder="Confirm Password" required="required" />
                    </div>
                    <button className="btn btn-danger ml-2 col-md-8" >Signup</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;