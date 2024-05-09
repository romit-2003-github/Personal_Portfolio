import React, { useState } from 'react'
import { Button } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Alert from '@mui/material/Alert';

const Contact = () => {

    const [click, setClick] = useState(false);
    const [credentials, setCredentials] = useState({
        name: "",
        emailId: "",
        phone: "",
        message: ""
    });

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    const onFormSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:8000/api/getdetails", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name: credentials.name,
                emailId: credentials.emailId,
                phone: credentials.phone,
                message: credentials.message
            })
        });
        const json = await response.json();
        console.log(credentials);
        console.log(json);
        if (!json.success) {
            alert("An error occured");
        }
        else {
            setClick(true);
        }
    }

    return (
        <>
            <div className='contactForm' name='contactForm'>
                <h1 style={{ textAlign: "center", fontSize: "3.5rem", marginTop: "5%" }}>Contact <span style={{ color: "#2ca9df" }}>Me!</span></h1>
                <div className="collab">
                    <form action="" className='contactMe' onSubmit={onFormSubmit}>
                        <div class="mb-3 inputFields">
                            <label for="exampleFormControlInput1" class="form-label" required>Name</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your name here" name='name' value={credentials.name} onChange={onChange} />
                        </div>
                        <div class="mb-3 inputFields">
                            <label for="exampleFormControlInput1" class="form-label" required>Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your Email here" name='emailId' value={credentials.emailId} onChange={onChange} />
                        </div>
                        <div class="mb-3 inputFields">
                            <label for="exampleFormControlInput1" class="form-label">Contact Number</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your contact here" name='phone' value={credentials.phone} onChange={onChange} />
                        </div>
                        <div class="mb-3 inputFields">
                            <label for="exampleFormControlTextarea1" class="form-label">Your Message</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" required placeholder='Write your message here' name='message' value={credentials.message} onChange={onChange}></textarea>
                        </div>
                        <Button type='submit' variant="contained" className='my-3'>Submit</Button>
                        {click && <Alert severity="success" color="info">🚀 Thank you for visiting my portfolio. Let's turn ideas into reality, one line of code at a time!

</Alert>}
                    </form>

                    <div className="contactDetails">
                        <h3>For Collaboration/Partnerships</h3>
                        <br />
                        <h5><span style={{ color: "#2ca9df" }}>Contact me &rarr; </span>  +91 83600-62245</h5>
                        <h5><span style={{ color: "#2ca9df" }}>Mail me at &rarr;</span>  romitsoni2003@gmail.com</h5>
                        <h5><span style={{ color: "#2ca9df" }}>Message me on LinkedIn &rarr;</span><a href='https://www.linkedin.com/in/romit-soni-1726ba1b9/' target='_blank' rel='noreferrer' style={{ color: "whitesmoke", textDecoration: "none" }}> Click Here</a></h5>
                        <div className="socialMedia">
                            <a href="https://www.instagram.com/romit_soni0206/" target='_blank' rel="noreferrer"><InstagramIcon /></a>
                            <a href="mailto:romitsoni2003@gmail.com" target='_blank' rel="noreferrer"><MailIcon /></a>
                            <a href="https://www.linkedin.com/in/romit-soni-1726ba1b9/" target='_blank' rel="noreferrer"><LinkedInIcon /></a>
                            <a href="https://github.com/romit-2003-github" target='_blank' rel="noreferrer"><GitHubIcon /></a>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Contact
