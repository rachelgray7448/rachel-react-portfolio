import React from "react";
import resume from "../../assets/resume.pdf";

export default function index() {
    return (
        <object
            className="resume"
            width="65%"
            height="1000"
            data={resume}
            type="application/pdf"
            aria-label="resume-pdf"
        ></object>
    );
}
