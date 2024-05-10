export default function Footer(position = absolute) {
    return (
        <footer>
            <p><span>Size</span> | Made by Terenz Jomar Dela Cruz &copy; 2024.</p>
            <style>{`
                footer {
                    position: ${position};
                    bottom: 0px;
                }

                footer > p > span::before {
                    content: "PC ";
                }

                @media only screen and (max-width: 1280px) {
                    footer > p > span::before {
                        content: "Tablet ";
                    }
                }

                @media only screen and (max-width: 768px) {
                    footer > p > span::before {
                        content: "Mobile ";
                    }
                }
            `}</style>
        </footer>
    )
}