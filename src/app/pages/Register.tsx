"use client";

function Register({setCurrentPage}){
    return(
        <div className="flex h-screen justify-center items-center">

            <div className="bg-[#111113] w-80 h-auto rounded-lg p-5">

                <button className="flex w-full" onClick={() => setCurrentPage('home')}>
                    <img 
                        src="/images/MJLogo.png" 
                        className="w-16 pb-4 m-auto" 
                    />
                </button>

                <h1 className="text-white text-center text-xl">Create your account</h1>

                <form
                    className="flex justify-center flex-col pt-2" 
                    action=""
                >

                    {/* Name */}
                    <label
                        htmlFor=""
                        className="text-white font-medium"
                    >Name:
                    </label>
                    <input 
                        required 
                        type="text" 
                        placeholder="Your name"
                        className="p-1 rounded-lg border-white border-[1px] bg-transparent mb-3" 
                    />
                    {/* Email */}
                    <label 
                        htmlFor=""
                        className="text-white font-medium"
                    >Email:
                    </label>
                    <input 
                        required 
                        type="email" 
                        placeholder="Your email"
                        className="p-1 rounded-lg border-white border-[1px] bg-transparent mb-3"
                    /> 
                    {/* Password */}
                    <label 
                        htmlFor=""
                        className="text-white font-medium"
                    >Password:
                    </label>
                    <input 
                        required 
                        type="password" 
                        placeholder="Your password"
                        className="p-1 rounded-lg border-white border-[1px] bg-transparent mb-3"
                    /> 
                    {/* Extra */}
                    <a 
                        href=""
                        className="text-white text-center"
                    >Do you have an account?  
                    <button onClick={() => setCurrentPage('login')}
                        className="text-blue-400 hover:underline duration-300 transition-all ease-in-out"
                        > Login
                    </button></a>
                    {/* Buttom */}
                    <button 
                        type="submit"
                        className="bg-blue-500 text-white rounded-lg p-2 mt-2"
                    >Register
                    </button>
                </form>
            </div>
            
        </div>
    );
}

export default Register;