import React, { useState } from "react";
import Navigation from "../Navigation";
import About from "../About";
import { Contact } from "../Contact";
import Project from "../Project";
import Resume from "../Resume";

export default function Header() {
    const [currentPage, setCurrentPage] = useState("About");

    const renderPage = () => {
        if (currentPage === "About") {
            return <About />;
        }
        if (currentPage === "Project") {
            return <Project />;
        }
        if (currentPage === "Resume") {
            return <Resume />;
        }
        if (currentPage === "Contact") {
            return <Contact />;
        }

    };

    const handlePageChange = (page) => setCurrentPage(page);
    
    return (
        <div>
            <Navigation
                currentPage={currentPage}
                handlePageChange={handlePageChange}
            />
            {renderPage()}
        </div>
    );
}
