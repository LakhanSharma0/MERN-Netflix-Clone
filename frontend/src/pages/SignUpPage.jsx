import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuthStore } from '../store/authUser';

const SignUpPage = () => {
    const {searchParams} = new URL(document.location);
    const emailValue = searchParams.get("email");

    const [email, setEmail] = useState(emailValue || "");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { signup, isSigningUp } = useAuthStore();

    const handleSignUp = (e) => {
        e.preventDefault();
        signup({email, username, password});
    }
  return (
    <div className='h-screen w-full hero-bg'>
        <header className='max-w-6xl mx-auto flex items-center justify-between p-4'>
            <Link to={'/'}>
                <img src='/netflix-logo.png' alt='logo' className='w-52'/>
            </Link>
        </header>

        <div className='flex justify-center items-center mt-20 mx-3'>
            <div className='w-full max-w-md p-8 space-y-6 bg-black/60 rounded-lg shadow-md'>
                <h1 className='text-center text-white text-2xl font-bold mb-4'>Sign Up</h1>
                
                <form className='space-y-4'
                onSubmit={handleSignUp}>
                    <div>
                        <label htmlFor="username" className='text-sm font-medium text-gray-300 block'>
                            Email
                        </label>
                        <input type="email"
                        className='w-full px-3 py-2 mt-1 border-gray-700 rounded-md 
                        bg-transparent text-white focus:outline-none focus:ring'
                        placeholder='you@example.com'
                        id='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="username" className='text-sm font-medium text-gray-300 block'>
                            UserName
                        </label>
                        <input type="text"
                        className='w-full px-3 py-2 mt-1 border-gray-700 rounded-md 
                        bg-transparent text-white focus:outline-none focus:ring'
                        placeholder='JohnDoe'
                        id='username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className='text-sm font-medium text-gray-300 block'>
                            Password
                        </label>
                        <input type="password"
                        className='w-full px-3 py-2 mt-1 border-gray-700 rounded-md 
                        bg-transparent text-white focus:outline-none focus:ring'
                        placeholder='••••••••'
                        id='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button type='submit' 
                        className="w-full h-10 bg-red-600 text-white font-semibold rounded-md
                         hover:bg-red-700"
                         disabled={isSigningUp}>
                            {isSigningUp ? "Loading..." : "Sign Up"}
                         </button>                    
                </form>
                <div className=' flex flex-col items-center'>
                    <p className='text-center text-gray-400 text-sm'>Already have an account?</p>
                    <Link to="/login" className='w-full text-white text-center 
                    font-semibold bg-gray-400/40 hover:bg-gray-500/40 rounded-md p-2 mt-3'>
                    Log In</Link>
                </div>
            </div>
        </div>
    </div>
  );
};

export default SignUpPage;