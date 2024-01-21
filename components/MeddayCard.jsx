"use client"

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

import { FaPython } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";



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

export default function MedDayCard() {
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
          <Avatar sx={{ bgcolor: 'transparent', borderRadius: '0' }} aria-label="health-kit">
            <img src="/healthkit.png" alt="Logo" style={{ width: '100%', height: '100%' }} />
          </Avatar>
        }

        action={
          <Tooltip title="Open in GitHub">
            <IconButton aria-label="Github Med-Day Repository">
              <a href="https://github.com/wujinfen/Med-Day" target="_blank" rel="noopener noreferrer">
                <VscGithub size="32" color="#a7a7a7" />
              </a>
            </IconButton>
          </Tooltip>
        }

        title="Med-Day"
        subheader={<>EMT Protocol Simulator <br /> Pitt Challenge Healthcare Hackathon Winner</>}
      />

      <CardMedia
        component="img"
        height="200"
        image="/med-day.png"
        alt="Med-Day Demo Picture"
      />

      <CardContent>
        <Typography variant="body2" color="white">
          Med-Day is an 8bit style choice-based text game that simulates first-responder emergency medical situations.
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <Tooltip title="Coded with Python and PyGame">
          <IconButton aria-label="Made with Python">
            <FaPython color="#a7a7a7" />
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
          <div style={{ display: 'flex'}}>
            <Typography variant="body2" color="gray" style={{ width: '110px' }}>Client</Typography>
            <Typography variant="body2" color="White">
              <span>
                <a href="https://pittchallenge.com/" target="_blank" rel="noopener noreferrer">
                  University of Pittsburgh School of Pharmacy - Pitt Challenge Healthcare Hackathon
                </a>
              </span>
            </Typography>
          </div>

       
          <div style={{ display: 'flex'}}>
            <Typography variant="body2" color="gray" style={{ width: '80px' }}>Timeline</Typography>
            <Typography variant="body2" color="White">
              September 2023
            </Typography>
          </div>

          <div style={{ display: 'flex'}}>
            <Typography variant="body2" color="gray" style={{ width: '80px' }}>Role</Typography>
            <Typography variant="body2" color="White">
              GUI Developer & Backend Integration
            </Typography>
          </div>
          <div style={{ display: 'flex'}}>
            <Typography variant="body2" color="gray" style={{ width: '80px' }}>Awards</Typography>
            <Typography variant="body2" color="White">
              Supporting Caregivers Track Winner
            </Typography>
          </div>

          <br />

          <div>
            <Typography variant="body2" color="gray">Outcome</Typography>
            <Typography variant="body2" color="White">
              EMTs provide immediate response to medical emergencies. However, many
              fail to execute medical protocols. A survey revealed that 20% of EMTs have
              admitted to making treatment errors in the past year. Online resources for EMT protocol practice are
              scarce and uneffective. To address these issues, our team developed a game to help EMTs
              practice protocols to avoid errors in the field. To clear the levels, players must perform proper protocol to successfully transfer patient care.
            </Typography>
          </div>

          <br />

          <div>
            <Typography variant="body2" color="gray">Development</Typography>
            <Typography variant="body2" color="White">
            Med-Day was created with Python and the PyGame library. The EMT protocols were extracted from the PA Basic Life Support Protocols handbook. Our group storyboarded the cardiac arrest
            emergency scenario based off these protocols.
            First, we developed the menus and GUI. Then, we utilized an associative array data structure to store and link dialogue options.
            These served as game-states that would trigger upon button clicks and update the GUI accordingly. Finally, we added music, sound effects, and pixel art.
            </Typography>
          </div>
        </CardContent>
      </Collapse>
    </Card>
  );
}