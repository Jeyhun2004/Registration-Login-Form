import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/register', {name, email, password})
        .then(result => console.log(result))
        .catch(err => console.log(err))
        navigate('/login')
    };

    return (
        <div>
            <div style={styles.container}>
                <h2 style={styles.header}>Register</h2>
                <form style={styles.form} onSubmit={handleSubmit}>
                    <input
                        style={styles.input}
                        type="text"
                        name="username"
                        placeholder="Username"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        style={styles.input}
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        style={styles.input}
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button style={styles.button} type="submit">
                        Register
                    </button>
                </form>
                <div style={styles.loginContainer}>
                    <p style={styles.loginText}>Already have an account?</p>
                    <Link to="/login" style={styles.loginButton}>Login</Link>
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        maxWidth: '400px',
        margin: '0 auto',
        padding: '20px',
        borderRadius: '8px',
        backgroundColor: '#f4f4f4',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    },
    header: {
        textAlign: 'center',
        marginBottom: '20px',
        color: '#333',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    input: {
        padding: '10px',
        marginBottom: '15px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '16px',
    },
    button: {
        padding: '10px',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#28a745',
        color: 'white',
        fontSize: '16px',
        cursor: 'pointer',
    },
    loginContainer: {
        marginTop: '20px',
        textAlign: 'center',
    },
    loginText: {
        marginBottom: '10px',
        fontSize: '14px',
        color: '#555',
    },
    loginButton: {
        textDecoration: 'none',
        color: '#28a745',
        fontSize: '16px',
        fontWeight: 'bold',
    },
};

export default Register;
