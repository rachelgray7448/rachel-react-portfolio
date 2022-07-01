import React from 'react';
import Headshot from '../../assets/Headshot.jpg';
import Image from 'react-bootstrap/Image';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function About() {
    return(
        <section id="about">
            <Image className="roundedCircle rounded mx-auto d-block" src={Headshot}></Image>
            <div className="text-center">
                <h3>Who am I?</h3>
                <p>Hello! My name is Rachel Gray and I am a Web Developer in training originally from Flint, MI, currently residing in the Lansing area with my fiance and my 3 fur children. I graduated from the University of Michigan-Flint in 2015 with a major in Psychology, and a minor in Linguistics. I then moved to Grand Rapids, MI and attended Grand Valley State University for my Master's in Speech-Language Pathology. I worked for several years as a Medical Speech-Language Pathologist in Skilled Nursing Facilities. Eventually, I decided I needed a change of pace and became very interested in development and coding, trialing short online programs in my free time. I am currently enrolled in Michigan State University's Web Development Bootcamp and am excited at all the possibilites the future has to hold!</p>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
        </section>
    );
}

export default About;