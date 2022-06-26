import React from 'react';

function Navigation({ currentPage, handlePageChange }) {

    return(
        <header>
            <nav>
                <ul>
                    <li>
                        <a href="#about" onClick={() => handlePageChange('About')}>
                            About Me
                        </a>
                    </li>
                    <li>
                        <a href="#project" onClick={() => handlePageChange('Project')}>
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#resume" onClick={() => handlePageChange('Resume')}>
                            Resume
                        </a>
                    </li>
                    <li>
                        <a href="#contact" onClick={() => handlePageChange('Contact')}>
                            Contact Me
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;