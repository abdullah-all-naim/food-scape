import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../logo.png'

const Login = () => {
    const history = useHistory()
    return (
        <div style={{ backgroundColor: '', padding: '10px 0' }}>
            <div className='text-center'>
                <img style={{ width: '100px' }} src={logo} />
            </div>
            <div className='d-flex flex-wrap justify-content-center my-5 w-50' style={{ border: '1px solid lightGrey', margin: 'auto', borderRadius: '15px', padding: '30px 0', backgroundColor: 'white' }}>
                <h3 className='font-weight-bold mb-5'>Login</h3>
                <div className='d-flex flex-wrap justify-content-center' >
                    <div className="form-group col-md-8 mb-4">
                        <input type="text" className="form-control" name='name' id='name' placeholder="Username" />
                    </div>
                    <div className="form-group col-md-8 mb-4">
                        <input type="text" className="form-control" name='companyName' id='email' placeholder="Enter Your Email Address" />
                    </div>
                    <div className="form-group col-md-8 mb-4">
                        <input type="password" className="form-control" name='companyName' id='password' placeholder="Password" />
                    </div>
                    <button className="btn btn-danger col-md-8 ml-2"    onClick={() => history.push('/home')}>Login</button>
                </div>
                <p>Don't have an Account? <Link to='/signup'>Create an Account</Link> </p>
            </div>
        </div>
    );
};

export default Login;