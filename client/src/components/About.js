import React, { useState } from 'react'
import Button from '@mui/material/Button';
const About = () => {

    const [isExpanded, setIsExpanded] = useState(false);

    const showMore =  () =>{
        setIsExpanded(!isExpanded);
    }
    return (
        <>
            <div className="aboutContainer" id='aboutId' name="aboutContainer">
                <h1 className='animate__animated animate__fadeInLeft' style={{ fontSize: "3.5rem", textAlign: "center", margin: "5% 0" }}>About <span style={{ color: "#2ca9df" }}>Me!</span></h1>
                <div className="aboutPhoto animate__animated animate__fadeInRight">
                    <img src={require("../images/RomitSoni2.png")} alt="" />
                </div>
                <p className='animate__animated animate__fadeInLeft'>Hey there, I'm <b> Romit</b> - an upcoming passionate Software Engineer and a Full-Stack Developer with a flair for creating captivating websites and products. Hailing from Phagwara, Punjab, I've nurtured my creativity through diverse experiences and a deep love for Web development.</p>

                <p className='animate__animated animate__fadeInRight'>💻On the Front-end part, I excel in turning design concepts into interactive and intuitive interfaces. My knowledge of HTML, CSS, and JavaScript empowers me to build responsive, perfect layouts that captivate users and provide seamless experiences across devices. Besides, I also use ReactJS as a library/framework for my front-end development with CSS libraries like Bootstrap, Tailwind CSS, Chakra UI, Ant Design etc.. <br /> <br/>
                🔌On the Back-end, I'm a problem-solving enthusiast who thrives on the challenges of server-side scripting. Leveraging languages like or Node.js, I architect robust APIs and dynamic database interactions using databases like MongoDB, MySQL, PostgreSql that ensure data integrity and optimal performance.</p>

                {isExpanded && <p className='animate__animated animate__fadeInLeft'>📚Beyond coding, I'm a perpetual learner and an avid problem solver. I believe in continuous improvement, and I regularly challenge myself with coding puzzles, online courses, and tech meetups. This drive keeps me adaptable and ready to tackle any obstacle that comes my way.Outside of coding, I'm also a cricket and badminton enthusiast by heart. I am also very foody by nature. Exploring new dishes and cuisines fuels my creativity and broadens my perspective, which often finds its way into my coding style.</p>}

                {isExpanded && <p className='animate__animated animate__fadeInRight'> <b>✉️Want to collaborate on a project</b>, discuss the latest tech trends, or just chat about coding and life? <a href="mailto:romitsoni2003@gmail.com" style={{textDecoration:"none"}}>Feel free to get in touch!</a>  I'm always excited to connect with fellow developers, designers, and tech enthusiasts.</p>}
                
                <Button variant="outlined" className='animate__animated animate__fadeInRight' onClick={showMore}>
                    {!isExpanded ? "Read More" : "Read Less"}</Button>
            </div>
        </>
    )
}

export default About
