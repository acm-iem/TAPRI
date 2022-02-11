import react, { useState } from 'react';
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  makeStyles,
  Typography,
  TextField,
  Grid,
} from '@material-ui/core';
import CallIcon from '@material-ui/icons/Call';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  root: {
    width: '270px',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    transition: '0.4s all',
    borderRadius: '7px',
    padding: '10px 20px 20px',
    backgroundColor: 'white ',
    height: '250px',
    margin: '1rem',
    '&:hover': {
      boxShadow: '1px 3px 5px 2px rgba(0, 0, 0, 0.11)',
      transform: 'translateY(-5px)',
    },
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  name: {
    margin: '0px',
    fontFamily: 'Sora',
    fontWeight: '700',
    fontSize: '22px',
  },
  phone: {
    fontFamily: 'Sora',
    fontWeight: '600',
    fontSize: '17px',
    color: '#424642',
    margin: '0px',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1rem',
  },
  longlat: {
    fontFamily: 'Sora',
    fontWeight: '600',
    fontSize: '17px',
    color: '#424642',
    margin: '0px',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1rem',
  },
});

function UserCard({ name, lat, long, phone }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.name} align="center" variant="h4">
        {name}
      </Typography>
      <Typography className={classes.longlat} align="center" variant="h4">
        <LocationOnIcon />
        <strong>Long -</strong> {long}
        <br />
      </Typography>
      <Typography className={classes.longlat} align="center" variant="h4">
        <LocationOnIcon />
        <strong> Lat - </strong>
        {lat}
      </Typography>
      <Typography className={classes.phone} align="center" variant="h4">
        <CallIcon />
        {phone}
      </Typography>
    </div>
  );
}

export default UserCard;
