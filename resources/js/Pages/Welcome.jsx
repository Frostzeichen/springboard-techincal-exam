import Footer from '@/Components/Footer';
import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />
            
            <h1>Terenz's Springboard Technical Exam</h1>
            
            <main>
                <div>
                    <p>This is a website that lets you login and register.</p>
                    <p>Well, it's just that.</p>
                    <p><s>At least it's got a documentation page.</s></p>
                    <p>No documentation page yet. Sorry!</p>
                </div>
                {
                    auth.user ? "" :
                        <aside>
                            <p><a href="/login">Login</a></p>
                            <p><a href="/register">Register</a></p>
                        </aside>
                }
                <details>
                    <p>Try resizing the screen!</p>
                    <ul>
                        <li>At 1281px and above: PC size</li>
                        <li>At 1280px and below: tablet size</li>
                        <li>At 768px and below: mobile size</li>
                    </ul>
                </details>
            </main>

            <Footer />

            <style>{`
            /* Terenz: Didn't use Tailwind. This is bad, I know. */
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

                main > div {
                    display: inline-block;
                    text-align: center;
                }

                main > aside {
                    display: inline-block;
                    text-align: center;
                }

                main > aside > p > a {
                    padding-left: 100px;
                    padding-right: 100px;
                }

                main > aside > p:hover {
                    background: #8a9291;
                }

                main > details > ul > li {
                    list-style-type: square;
                    list-style-position: inside;
                }

                @media only screen and (max-width: 1280px) {
                    main > div {
                        display: block;
                    }

                    main > aside {
                        display: block;
                        width: 100%;
                    }

                    footer > p > span::before {
                        content: "Tablet ";
                    }
                }

                @media only screen and (max-width: 768px) {
                    h1 {
                        text-align: center;
                    }

                    main > div {
                        display: block;
                    }

                    main > aside {
                        display: block;
                        width: 100%;
                    }

                    footer > p > span::before {
                        content: "Mobile ";
                    }
                }
            `}</style>
        </>
    );
}
