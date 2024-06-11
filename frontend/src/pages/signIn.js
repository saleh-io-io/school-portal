import React, { useState } from 'react';
import { useLogin } from '../hooks/useLogin';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('student');

    const {error, loading, login} = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // prent all the values
        console.log(email , role, password);

        await login({email, password, role});
    }


    return (
       <form className="signup" onSubmit={handleSubmit}>
        <h3>sign In</h3> <br />
        <label >
            Role
            <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
            </select>

        </label><br />

        <label >
            Email
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label><br />

        <label >
            Password
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>

        <button disabled={loading} type="submit">Sign In</button>
        {error && <div className='error'>{error}</div>}
       </form>

    );
};

export default SignIn;