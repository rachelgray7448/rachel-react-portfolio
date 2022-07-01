import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

export default function ProjectCard({ title, src, link }) {

    return (
        <div id="project">
            <Container>
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <img src={src} width="80%" height="80%"/>
                            <Button href={link}>Site</Button>
                            <Button href={link}>Site GitHub</Button>
                        </Card.Body>
            </Container>
        </div >
    );
}