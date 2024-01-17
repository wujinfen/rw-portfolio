"use client"

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { FaPython } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { SiJupyter } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import { SiNumpy } from "react-icons/si";




const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function GetAwayCard() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ bgcolor: '#5d5d68', fontFamily: 'Inter', }}>
            <CardHeader
                sx={{
                    color: 'white', // This will set the color of the text in the CardHeader
                    fontFamily: 'Inter', // Sets the font family for the entire CardHeader
                    '.MuiCardHeader-title': {
                        fontSize: '1.15rem', // Adjust the font size as needed
                        fontWeight: 'bold',
                    },
                    '.MuiCardHeader-subheader': {
                        fontStyle: 'italic',
                        fontSize: '0.85rem', // Adjust the font size as needed
                        color: 'white', // Replace with your desired color
                    },
                }}

                avatar={
                    <Avatar sx={{ bgcolor: 'transparent', borderRadius: '0' }} aria-label="PGH Seal">
                        <img src="/pghseal.png" alt="PGH Seal" style={{ width: '85%', height: '125%' }} />
                    </Avatar>
                }

                action={
                    <IconButton aria-label="Github PGH Getaway Crimes Repository">
                        <a href="https://github.com/wujinfen/PGH-Getaway-Crimes" target="_blank" rel="noopener noreferrer">
                            <VscGithub size="32" color="#BFBFBF" />
                        </a>
                    </IconButton>
                }

                title="Pittsburgh Getaway Crimes"
                subheader="Community Safety Analytics"
            />

            <CardMedia
                component="img"
                height="200"
                image="/safetypchange.png"
                alt="Med-Day Demo Picture"
            />

            <CardContent>
                <Typography variant="body2" color="white">
                    Getaway crimes is a notebook that analyzes and visualizes police arrest data and
                    vehicle speedhump data from the Western Pennsylvania Regional Data Center (WPRDC) to determine
                    target neighborhoods for getaway crimes.
                </Typography>
            </CardContent>

            <CardActions disableSpacing>
                <IconButton aria-label="Made in Jupyter Notebook">
                    <SiJupyter />
                </IconButton>

                <IconButton aria-label="Made with Python">
                    <FaPython />
                </IconButton>

                <IconButton aria-label="Made with Pandas">
                    <SiPandas />
                </IconButton>

                <IconButton aria-label="Made with Numpy">
                    <SiNumpy />
                </IconButton>

                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>

                    <Typography variant="body2" color="white">
                        Along with regulating traffic and vehicle speeds, speedhumps serve as a deterrent for getaway crimes involving vehicles.
                        My group coupled speedhump data with police arrest data to gauge criminal activity within each neighborhood.
                        Additionally, we measured law enforcement presence in each neighborhood by analyzing the amount of arrests, the change in number of arrests over time, and the average distances between incident and arrest locations.
                        Using these metrics, we found Squirrel Hill to be the safest neighborhood in Pittsburgh to avoid getaway crimes.
                        We also ranked the top 10 safest neighborhoods and the 10 unsafest neighborhoods in Pittsburgh according to these metrics.
                        <br /> <br />
                        The project was completed in Jupyter Notebook and created with Python utilizing the Pandas data analysis framework, NumPy for mathematical operations,
                        and matplotlib for data visualization.
                        Additionally, we used the positionstack API to get arrest coordinates, which was used to calculate incident-to-crime distances.
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}