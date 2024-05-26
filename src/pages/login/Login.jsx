import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const Login = () => {

    const {user,signIn}=useContext(AuthContext);
    const captchaRef=useRef(null);
    const [disabled, setDisabled]=useState(true);
    const nav=useNavigate();
    const location =useLocation();
    useEffect(()=>{
        loadCaptchaEnginge(6);
    },[])


    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        signIn(email,password)
        .then(result=>{
            console.log(result.user);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "You have logged in",
                showConfirmButton: false,
                timer: 1500
              });
            nav(location.state?.from?.pathname ? location.state?.from?.pathname : '/') 
        })
    }

    const handleValidateCaptcha=(e)=>{
        e.preventDefault();
        // const user_captcha_value= captchaRef.current.value;
        const user_captcha_value=e.target.value;
        if(validateCaptcha(user_captcha_value)){
            setDisabled(false);
        }else{
             setDisabled(true);
        }
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center md:w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card md:w-1/2 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input onBlur={handleValidateCaptcha} ref={captchaRef} type="text" name="captcha" placeholder="Type the above" className="input input-bordered" required />
                            {/* <button  className='btn btn-outline btn-xs mt-2'>Validate</button> */}
                        </div>
                        <div className="form-control mt-6">
                            <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <div className='text-center mb-[20px]'>
                        <h1>New User? <Link to='/signUp'><strong className='text-red-700'>Register</strong></Link></h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;