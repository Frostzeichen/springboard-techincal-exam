import { useEffect } from 'react';
import { Head, useForm } from '@inertiajs/react';
import Footer from '@/Components/Footer';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <>
            <Head title="Log in" />
            
            <h1>Login</h1>

            <main>
                <form onSubmit={submit}>
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" id="username" onChange={(e) => setData('email', e.target.value)} />
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange={(e) => setData('password', e.target.value)} />
                    <input type="submit" value="Login" />
                </form>
                <p>Already have an account? <a href="/register">Register</a>!</p>
            </main>

            <Footer />

            <style>{`
                h1 {
                    margin-top: 30px;
                    margin-left: 10px;
                    font-size: 30px;
                }

                main {
                    padding: 10px;
                    position: absolute;
                    top: 30%;
                    left: 30%;
                }

                main > form > label {
                    display: block;
                }

                main > form > input {
                    display: block;
                    margin-bottom: 30px;
                }
            `}</style>
        </>
    )
}