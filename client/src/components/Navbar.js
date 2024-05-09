import React, { useState, useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom'

const Navbar = () => {

    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolling(true);
            }
            else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header className={`header ${scrolling ? 'scrolling' : ''}`}>
                <RouterLink to="/" className='logo'><span style={{ color: "#2ca9df" }}>R</span>omit.</RouterLink>
                <nav className="navbar">
                    <ScrollLink href="/" to="about" duration={300} spy={true} smooth={true}>Home</ScrollLink>
                    <ScrollLink href="/" to="aboutContainer" duration={300} spy={true} smooth={true}>About</ScrollLink>
                    <ScrollLink href="/" to="media" duration={300} spy={true} smooth={true}>Skills</ScrollLink>
                    <RouterLink to="/myprojects">Projects</RouterLink>
                    <ScrollLink href="/" to="contactForm" duration={300} spy={true} smooth={true}>Contact Me</ScrollLink>
                </nav>
                    <i class="material-symbols-outlined" id='toggle'>menu</i>
            </header>
        </>
    )
}

export default Navbar
