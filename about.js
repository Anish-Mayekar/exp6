import React from 'react'
import { Link } from 'react-router-dom'
const About = () => {
return (
<div>
<h2>About Me</h2>
<p>
hello my name is Anish Mayekar <br></br>
I study in VESIT in INFT branch(3<sup>rd</sup>)<br></br>
I like painting and playing both indoor and outdoor sports 
<br></br>

</p>
<Link to='/projects'><button>Projects</button></Link>
</div>
)
}

export default About
