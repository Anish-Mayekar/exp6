import React from 'react';
// import { Link } from 'react-router-dom';
import Call from './Call';
function Projects() {
    const projects = [
        { id: 1, title: "CalorieCut", description: "A Java based project using JavaFX and MYSQL as database for diet related problems" },
        { id: 2, title: "ReRead", description: "Buying and Selling 2nd hand books within the college domain using python libraries and tkinter" },
    ];
    return (
        <div>
            <center>
                <h2>Projects</h2>
            </center>
            <ul>

                {projects.map((project) => (
                    <li key={project.id}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </li>
                ))}
            </ul>

            <footer><hr></hr>
                <b>Call me</b>
                <Call rollno={36} name={"Anish"} age={19} phone={"9892385514"} /></footer>


        </div>
    );
}
export default Projects;
