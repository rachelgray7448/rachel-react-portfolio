import React, { useState } from "react";
import Navigation from "../Navigation";
import About from "../About";
import { Contact } from "../Contact";
import Footer from "../Footer";
import Project from "../Project";
import Resume from "../Resume";
// import '../../../node_modules/antd/dist/antd.css'

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
        return <Contact />;
    };

    // const items = [
    //     { label: "about", key: "about" }, // remember to pass the key prop
    //     {
    //         label: "project",
    //         key: "project",
    //         children: [
    //             { label: "The B Word", key: "The B Word" },
    //             { label: "Designs by Debie", key: "Designs by Debie" },
    //         ],
    //     }, // which is required
    //     { label: "resume", key: "resume" },
    // ];
    // return <Menu items={items} />;

    const handlePageChange = (page) => setCurrentPage(page);
    return (
        <div>
            <h2>Rachel Gray</h2>
            <Navigation
                currentPage={currentPage}
                handlePageChange={handlePageChange}
            />
            {renderPage()}
        </div>
    );
}
