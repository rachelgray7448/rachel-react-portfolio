import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_oakdzej",
                "template_phg34ol",
                form.current,
                "lhdNJELEzgVRcBSbP"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div className="container">
            <form className="form" id="contact" ref={form} onSubmit={sendEmail}>
                <div className="form-content">
                    <label>Name</label>
                    <input type="text" name="user_name" />
                </div>
                <div className="form-content">
                    <label>Email</label>
                    <input type="email" name="user_email" />
                </div>
                <div className="form-content">
                    <label>Message</label>
                    <textarea name="message" />
                </div>
                <input type="submit" value="Send" />
            </form>
            
        </div>
    );
};


