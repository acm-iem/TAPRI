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
} from '@material-ui/core';
import { addUser } from '../Service/api';
import { useHistory } from 'react-router-dom';

const initialValue = {
  name: '',
  lat: '',
  lng: '',
  phone: '',
  category: '',
};

const useStyles = makeStyles({
  root: {
    backgroundColor: '#b9b8b8b7',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '91vh',
  },
  container: {
    width: '50%',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    transition: '0.4s all',
    borderRadius: '7px',
    padding: '10px 20px 20px',
    backgroundColor: 'white ',
  },
  heading: {
    fontFamily: 'Sora',
    fontWeight: '500',
  },
});

const AddUser = () => {
  const [user, setUser] = useState(initialValue);
  const { name, lat, lng, phone, category } = user;
  const classes = useStyles();
  let history = useHistory();

  const onValueChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addUserDetails = async () => {
    await addUser(user);
    history.push('./all');
  };

  return (
    <div className={classes.root}>
      {' '}
      <FormGroup className={classes.container}>
        <Typography className={classes.heading} align="center" variant="h3">
          Add User
        </Typography>
        <FormControl>
          <TextField
            variant="outlined"
            margin="normal"
            label="Name"
            onChange={(e) => onValueChange(e)}
            name="name"
            value={name}
            id="my-input"
          />
        </FormControl>
        <FormControl>
          <TextField
            variant="outlined"
            label="Lat"
            margin="normal"
            onChange={(e) => onValueChange(e)}
            name="lat"
            value={lat}
            id="my-input"
          />
        </FormControl>
        <FormControl>
          <TextField
            variant="outlined"
            margin="normal"
            label="Long"
            onChange={(e) => onValueChange(e)}
            name="lng"
            value={lng}
            id="my-input"
          />
        </FormControl>
        <FormControl>
          <TextField
            variant="outlined"
            margin="normal"
            label="Phone"
            onChange={(e) => onValueChange(e)}
            name="phone"
            value={phone}
            id="my-input"
          />
        </FormControl>
        <FormControl>
          <TextField
            variant="outlined"
            margin="normal"
            label="Category"
            onChange={(e) => onValueChange(e)}
            name="category"
            value={category}
            id="my-input"
          />
        </FormControl>
        <FormControl>
          <Button
            margin="normal"
            variant="contained"
            color="primary"
            onClick={() => addUserDetails()}
          >
            Add User
          </Button>
        </FormControl>
      </FormGroup>
    </div>
  );
};

export default AddUser;
