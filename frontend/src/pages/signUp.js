import React, { useState } from 'react';
import { useSignUp } from '../hooks/useSignUp';


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [role, setRole] = useState('student');

    const {error, loading, signUp} = useSignUp();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // prent all the values

        await signUp({email, password, role, name});
    }


    return (
       <form className="signup" onSubmit={handleSubmit}>
        <h3>sign up</h3><br />
        <label >
            Role
            <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
            </select>

        </label>
        <br />

        <label >
            Name
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label><br />

        <label >
            Email
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label><br />

        <label >
            Password
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label><br />

        <button disabled={loading} type="submit">Sign Up</button>
        {error && <div className='error'>{error}</div>}
       </form>

    );
};

export default SignUp;