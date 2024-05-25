import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form"
import { AuthContext } from "../../providers/AuthProvider";


const SignUp = () => {

    const {createUser}=useContext(AuthContext);

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        
        createUser(data.email,data.password)
        .then(result=>{
            const loggedUser= result.user;
            console.log(loggedUser);
        })
    }




    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <title>Sign Up page</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true, maxLength: 20 })} name="name" placeholder="name" className="input input-bordered" required />
                            {errors.name && <span className="text-red-700">This field is required</span>}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" required />
                            {errors.email && <span className="text-red-700">This field is required</span>}
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"
                                {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/
                                })} name="password" placeholder="password" className="input input-bordered" required />
                            {errors.password && <span className="text-red-700">This field is required</span>}
                            {errors.password?.type === 'minLength' && <p className="text-red-700">Password should be of at least 6 characters</p>}
                            {errors.password?.type === 'maxLength' && <p>Password cannot exceed 20 characters</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-700">Password must have 1 uppercase, 1 lowercase, 1 number and a special character</p>}
                        </div>



                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;