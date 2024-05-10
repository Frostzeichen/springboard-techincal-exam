import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div>
            <header>
                <h1>Terenz's Springboard Technical Exam</h1>
                <nav>
                    <p>Welcome, {user.name}! <a href="/logout">Logout</a></p>
                </nav>
            </header>

            <main>{children}</main>

            <style>{`
                header {
                    margin-top: 30px;
                    margin-left: 10px;
                    display: block;
                }

                header > h1 {
                    font-size: 30px;
                    display: inline-block;
                }

                header > nav {
                    position: absolute;
                    top: 40px;
                    right: 200px;
                    display: inline-block;
                }
            `}</style>
        </div>
    );
}
