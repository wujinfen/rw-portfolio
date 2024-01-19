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

import { VscGithub } from "react-icons/vsc";
import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";









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

export default function MakerspaceCard() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ bgcolor: '#282828', fontFamily: 'Inter', }}>
            <CardHeader
                sx={{
                    color: 'white', 
                    fontFamily: 'Inter', 
                    '.MuiCardHeader-title': {
                        fontSize: '1.15rem', 
                        fontWeight: 'bold',
                    },
                    '.MuiCardHeader-subheader': {
                        fontSize: '0.85rem', 
                        fontWeight: 'medium',
                        color: '#a7a7a7', 
                    },
                }}

                avatar={
                    <Avatar sx={{ bgcolor: 'transparent', borderRadius: '0' }} aria-label="Pitt Makerspace Logo">
                        <img src="/makerspace_logo.png" alt="Pitt Makerspace Logo" style={{ width: '100%', height: '100%' }} />
                    </Avatar>
                }

                action={
                    <IconButton aria-label="Github Makerspace User Database Repository">
                        <a href="" target="_blank" rel="noopener noreferrer">
                            <VscGithub size="32" color="#a7a7a7" />
                        </a>
                    </IconButton>
                }

                title="Makerspace User Database"
                subheader="User Management CRUD App"
            />

            <CardMedia
                component="img"
                height="200"
                image="/safetypchange.png"
                alt="Med-Day Demo Picture"
            />

            <CardContent>
                <Typography variant="body2" color="white">
                      The Makerspace User Database (MUD) is a fullstack user management system created to help the mentors and admin of Pitt&apos;s makerspace. MUD handles new user registration, 
                      maintenance of user training data, and the updation of user access privilege for various machines within the space.
                </Typography>
            </CardContent>

            <CardActions disableSpacing>
                <IconButton aria-label="Made with Next.js">
                    <SiNextdotjs color='#a7a7a7'/>
                </IconButton>

                <IconButton aria-label="Made with Node.js">
                    <FaNodeJs color='#a7a7a7'/>
                </IconButton>


                <IconButton aria-label="Made with React">
                    <FaReact color='#a7a7a7'/>
                </IconButton>

                <IconButton aria-label="Made with Tailwind">
                    <SiTailwindcss color='#a7a7a7'/>
                </IconButton>

                <IconButton aria-label="Made with MySQL">
                    <SiMysql color='#a7a7a7'/>
                </IconButton>

                <ExpandMore 
                    
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon style={{ color: '#a7a7a7' }}/>
                </ExpandMore>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>

                    <Typography variant="body2" color="white">
                        THE MAKER SPACE IS AN AREA BLAH BLAH

                      MUD has migrated the data of 3400+ existing users and it has automated the new user registration process. Every academic semester, MUD is projected to
                      handle the registration of 500+ users. MUD also manages the updating of user training information and tracks user infractions. This has
                      increased safety within the space.
                      <br /> <br />
                      Additionally, MUD has facilitated proper data normalization, leading to more accurate
                      and reliable record keeping.
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}