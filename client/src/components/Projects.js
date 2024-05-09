import React from 'react'
import '../Projects.css'
import Button from '@mui/material/Button'
import MagicNotes from '../images/MagicNotes.png'
import UniversityEdu from '../images/UniversityEdu.png'
import Travel from '../images/Travel.png'
import WeatherApp from '../images/WeatherApp.png'
import ColorPickr from '../images/ColorPickr.png'
import textUtility from '../images/textUtility.png'
import trustyNews from '../images/trustyNews.png'
import quizApp from '../images/quizApp.png'
const Projects = () => {
    const projectData = [
        {
            title: "Color Picker",
            desc: "A color picker chrome extension that allows users to easily select and copy colors from any web page.",
            tools: "HTML, CSS and JavaScript",
            image: ColorPickr,
            link:"https://github.com/romit-2003-github/color-picker"
        },
        {
            title: "University Landing Page",
            desc: "A basic university landing page made using HTML and Bootstrap 5",
            tools: "HTML, CSS, Bootstrap",
            image: UniversityEdu,
            link: "https://github.com/romit-2003-github/UniversityEdu" 
        },
        {
            title: "Travel Website landing Page",
            desc: "A travel website page made using HTML, CSS and JavaScript",
            tools: "HTML, CSS and Javascript",
            image: Travel,
            link: "https://github.com/romit-2003-github/Travel-Package"
        },
        {
            title: "Text Utility Website",
            desc: "A simple text-utility website which allows users to manipulate text",
            tools: "ReactJS",
            image: textUtility,
            link: "https://github.com/romit-2003-github/Text-Utility"
        },
        {
            title: "Weather App",
            desc: "A Weather App made using HTML, CSS and JavaScript where the data is fetched with an API",
            tools: "HTML, CSS, Javascript, API integration",
            image: WeatherApp,
            link: "https://github.com/romit-2003-github/Weather-App"
        },
        {
            title: "Basic Quiz App",
            desc: "A Simple Quiz App made using ReactJS. The focus was more on the logic part rather than the UI implementation",
            tools: "ReactJS",
            image: quizApp,
            link: "https://github.com/romit-2003-github/BasicQuizApp"
        },
        {
            title: "Notes Website",
            desc: "An app to create notes with a simple UI. The focus was more on the logic part rather than the UI implementation",
            tools: "HTML, CSS and Javascript",
            image: MagicNotes,
            link: "https://github.com/romit-2003-github/notes-website"
        },
        {
            title: "News Website",
            desc: "An API enabled News web app which provides real time news fetched from an API from different domains.",
            tools: "React JS, API integration",
            image: trustyNews,
            link:""
        }
    ]
    return (
        <>
            <h1 style={{ textAlign: "center", fontSize: "2.5rem", marginTop: "10%" }}>Check out my <span style={{ color: "#2ca9df" }}>Recent Projects!</span></h1>
            <section className="projects">

                {projectData.map((card, index) => {
                    return (
                        <>
                            <div className="projectItems" key={index}>
                                <div className="projectDetails" >
                                    <h2 style={{color:"#2ca9df"}}>{card.title}</h2><br />
                                    <h5>{card.desc}</h5><br />
                                    <h5>{card.tools}</h5><br />
                                    <Button style={{width:"50%"}} variant='contained'><a href={card.link} target='_blank' rel='noreferrer' style={{color:"whitesmoke",textDecoration:'none'}}>Go to Github</a></Button>
                                </div>
                                    <div className="projectPic">
                                        <img src={card.image} alt="loading" />
                                    </div>
                            </div>
                        </>
                    )
                })}

            </section >
        </>
    )
}

export default Projects
