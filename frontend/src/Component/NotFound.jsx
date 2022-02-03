import React from 'react';
import { makeStyles, Card, CardMedia } from '@material-ui/core';
import img from './../assets/404img.png';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '90vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    padding: '1rem',
    width: '30%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: '16px',
    textAlign: 'center',
  },
});

const NotFound = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardMedia component="img" image={img} alt="Paella dish" />
        <h5 className={classes.text}>
          Sorry, the page you are looking for is now beyond our reach.
        </h5>
      </Card>
    </div>
  );
};

export default NotFound;
