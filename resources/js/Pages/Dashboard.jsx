import Footer from '@/Components/Footer';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />
            
            <article>
                <h1>An Overview of my Code and a Message to the Reviewer</h1>
                <p>First, I wish to apologize for being unable to finish all the intended requirements. This is mainly due to my inexperience with Laravel and React, despite being given a week to finish these.</p>
                <p>Secondly, for the APIs, I was able to create a basic API at first using Laravel and tested with a Blade frontend.</p>
                <p>However, while installing Breeze and Inertia to integrate the Laravel server with React, I did not expect the installation to overwrite the API I wrote beforehand and apply its own authentication and route implementations. I left it as-is since I was running out of time.</p>
                <p>What ended up happening was that I created what I later found out was known as a single-page application (SPA) using React.</p>
                <p>And lastly, there are plenty of inconsistencies with my code&#39;s format. My initial plan was to do the React part by writing in pure HTML and CSS without React&#39;s helper functions. However, the Breeze starter kit for React already wrote had some components, some of which I used on the final version while most of these were rewritten as originally planned.</p>
                <p>With that, I am thankful for Springboard for providing me a reason to be exposed to React and Laravel. This is my first time doing anything at all with Laravel, as well as creating a React-based application with a separate backend.</p>
                <p>PS. Sorry in advance for the spaghetti code.</p>
            </article>
            <style>{`
                article > h1 {
                    font-size: 25px;
                    margin-bottom: 25px;
                }

                article {
                    margin-left: 33%;
                    margin-top: 150px;
                    margin-bottom: 100px;
                    width: 33%;
                }

                article > p {
                    margin-top: 20px;
                    margin-bottom: 20px;
                }
            `}</style>
            <Footer position="relative" />
        </AuthenticatedLayout>
    );
}
