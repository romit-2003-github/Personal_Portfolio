import React from 'react'
import Button from '@mui/material/Button';
import { Link as ScrollLink } from 'react-scroll'
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Typewriter from "typewriter-effect";
const Body = () => {

    const downloadResume = () => {
        fetch('Resume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Resume.pdf';
                alink.click();
            })
        })
      };
    return (
        <>
            <section className="about" id='homeId' name="about">
                <div className='aboutMe animate__animated animate__fadeInLeft'>
                    <h1>Hi, I'm Romit Soni</h1>
                    <h2 className='my-3' style={{color:"#2ca9df"}}><Typewriter onInit={(typewriter)=>{
                        typewriter.typeString("Web Developer").pauseFor(1000).deleteAll().typeString("Software Engineer").pauseFor(1000).deleteAll().typeString("UI/UX Designer").start()
                    }}/></h2>
                    <p style={{ color: "whitesmoke" }}>Highly analytical and solution-driven professional with a passion for problem-solving and a strong interest in creating innovative products. Proficient in C and C++, with experience in ReactJS, NodeJS, and other web technologies. Familiar with algorithms, data structures, GitHub, SQL, NO_SQL databases like MongoDB and UI/UX tools and standards.</p>
                    <div className="btnBox">
                        <Button variant="contained"><ScrollLink to="contactForm" duration={300} spy={true} smooth={true}>Contact Me</ScrollLink></Button>
                        <Button variant="outlined" style={{marginLeft:"1.5rem"}} onClick={downloadResume} download="Example-PDF-document" target='_blank'>Get my CV</Button>
                    </div>
                    <div className="socialMedia">
                        <a href="https://www.instagram.com/romit_soni0206/" target='_blank' rel="noreferrer"><InstagramIcon/></a>
                        <a href="mailto:romitsoni2003@gmail.com" target='_blank' rel="noreferrer"><MailIcon/></a>
                        <a href="https://www.linkedin.com/in/romit-soni-1726ba1b9/" target='_blank' rel="noreferrer"><LinkedInIcon/></a>
                        <a href="https://github.com/romit-2003-github" target='_blank' rel="noreferrer"><GitHubIcon/></a>
                    </div>
                </div>
                <div className="photo animate__animated animate__fadeInRight">
                    <img src={require("../images/photoCropped.png")} alt="loading" />
                </div>
            </section>

        </>
    )
}

export default Body
