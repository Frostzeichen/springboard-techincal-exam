import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import Footer from '@/Components/Footer';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <>
            <Head title="Register" />
            
            <h1>Register</h1>

            <main>
                <form onSubmit={submit}>
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" id="username" onChange={(e) => setData('name', e.target.value)} />
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" onChange={(e) => setData('email', e.target.value)} />
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange={(e) => setData('password', e.target.value)} />
                    <label htmlFor="repeatPassword">Repeat Password:</label>
                    <input type="password" name="repeatPassword" id="repeatPassword" onChange={(e) => setData('password_confirmation', e.target.value)} />
                    <input type="submit" value="Register" />
                </form>
                <p>Don't have an account? <a href="/login">Login</a>!</p>
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
