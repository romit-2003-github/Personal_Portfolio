import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import frontend from '../images/frontend.png'
import backend from '../images/backend.png'
import iot from '../images/Iot.jpeg'
import uiux from '../images/uiux.png'


export default function Mediacards(props) {

  const cardData = [
    {
      title: 'FrontEnd Development',
      image: frontend,
      content1: "Languages: HTML, CSS, JavaScript",
      content2: "Frameworks: React.js, Next.js, Tailwind CSS",
      content3: "Tools: Git, GitHub, VS Code",
    },
    {
      title: 'Backend Development',
      image: backend,
      content1: 'Frameworks: MERN Stack, Express.js',
      content2: 'Tools: Git, GitHub, VS Code, Firebase',
      content3: 'Databases: MongoDB, MySQL, PostgresSQL',
    },
    {
      title: 'UI/UX Designer',
      image: uiux,
      content1: `Tools: Figma, Canva`
    },
    {
      title: 'Internet of Things',
      image: iot,
      content1: `Languages: C++, Python`,
      content2: `Softwares: Arduino, RasberryPi`,
      content3: `Cloud: AWS, Microsoft Azure, BoltIot`,
    },

  ];

  return (
    <>
      <div className="media" id='skillId' name="media">
        <h1 style={{ textAlign: "center", fontSize: "3.5rem", margin:"5% 0"}}>My <span style={{ color: "#2ca9df" }}>Services!</span></h1>
        <Grid container spacing={3}>
          {cardData.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="400"
                  style={{objectFit:"cover"}}
                  image={card.image}
                  alt={card.title}
                />
                <CardContent className='cardContent'>
                  <Typography variant='h5' className='font-bold'>{card.title}</Typography>
                  <Typography variant="h7" color="textPrimary">
                    <br />
                    {card.content1} <br/> 
                    {card.content2} <br/>
                    {card.content3} <br/>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Button variant='outlined' size='large' className='mt-5'><Link to="/myprojects" style={{textDecoration:'none'}}>View my Projects &rarr;</Link></Button>
      </div>
    </>
  );
}
