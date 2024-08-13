"use client"

import { motion } from 'framer-motion';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Tooltip } from '@mui/material';

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

import { FaAngular } from "react-icons/fa";
import { SiCsharp } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiDotnet } from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";



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

export default function BD_Card() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{
            bgcolor: '#282828',
            fontFamily: 'Inter',
        }}>
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
                        color: '#a7a7a7',
                    },
                }}

                avatar={
                    <Avatar sx={{ bgcolor: 'transparent', borderRadius: '0' }} aria-label="BD Logo">
                        <img src="/Becton_Dickinson_logo.svg" alt="BD Logo" style={{ width: '100%', height: '100%' }} />
                    </Avatar>
                }

                title="Becton Dickinson"
                subheader={<>Software R&D Intern <br /> Diagnostic Solutions</>}
            />

            <CardMedia
                component="img"
                height="100"
                image="/COR.png"
                alt="COR picture"
            />

            <CardContent>
                <Typography variant="body2" color="white">
                    I was a software R&D engineer for COR, a medical device that performs automated,
                    high-throughput molecular diagnostics on patient samples.
                </Typography>
            </CardContent>

            <CardActions disableSpacing>

                <Tooltip title="Frontend w/ TypeScript">
                    <IconButton aria-label="">
                        <SiTypescript color="#a7a7a7" />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Frontend w/ Angular">
                    <IconButton aria-label="">
                        <FaAngular color="#a7a7a7" />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Backend w/ C#">
                    <IconButton aria-label="">
                        <SiCsharp color="#a7a7a7" />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Backend w/ .NET">
                    <IconButton aria-label="">
                        <SiDotnet color="#a7a7a7" />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Database w/ SQL">
                    <IconButton aria-label="">
                        <BsFiletypeSql color="#a7a7a7" />
                    </IconButton>
                </Tooltip>


                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <Tooltip title="Read more" placement="left">
                        <ExpandMoreIcon style={{ color: '#a7a7a7' }} />
                    </Tooltip>
                </ExpandMore>

            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <div style={{ display: 'flex' }}>
                        <Typography variant="body2" color="gray" style={{ width: '80px' }}>Company</Typography>
                        <Typography variant="body2" color="White">
                            BD - Becton Dickinson
                        </Typography>
                    </div>

                    <div style={{ display: 'flex' }}>
                        <Typography variant="body2" color="gray" style={{ width: '80px' }}>Industry</Typography>
                        <Typography variant="body2" color="White">
                            Medical Devices
                        </Typography>
                    </div>

                    <div style={{ display: 'flex' }}>
                        <Typography variant="body2" color="gray" style={{ width: '80px' }}>Role</Typography>
                        <Typography variant="body2" color="White">
                            Software R&D Intern
                        </Typography>
                    </div>

                    <div style={{ display: 'flex' }}>
                        <Typography variant="body2" color="gray" style={{ width: '80px' }}>Timeline</Typography>
                        <Typography variant="body2" color="White">
                            Aug 2024 - Aug 2024
                        </Typography>
                    </div>

                    <br />

                    <div>
                        <Typography variant="body2" color="gray">Accomplished</Typography>
                        <Typography variant="body2" color="White">
                            • Used Angular to implement a feature that displays a table of all specimen samples in COR and allows users to select and unload
                            samples, enhancing workflow efficiency and sample integrity
                            <br /><br />
                            • Created a C# .NET backend service for COR that tracks user activity by logging initiated sample unload procedures
                            <br /><br />
                            • Wrote a SQL script for COR that enabled the processing of HPV Dry-Swab Self Collection sample type in US region after FDA
                            approval of its assay
                            <br /><br />
                            • Automated developer environment configurations using Entity Framework, significantly reducing COR simulator startup time
                            <br /><br />
                            • Contributed as part of an Agile team, engaging in daily standups, sprint planning, and test-first discussions
                        </Typography>
                    </div>

                </CardContent>
            </Collapse>
        </Card>
    );
}