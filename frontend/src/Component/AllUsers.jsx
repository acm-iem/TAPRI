import { useState, useEffect } from 'react';
import {
  Table,
  TableHead,
  TableCell,
  Paper,
  TableRow,
  TableBody,
  Button,
  makeStyles,
  Grid,
  Container,
} from '@material-ui/core';
import { getUsers, deleteUser } from '../Service/api';
import { Link } from 'react-router-dom';
import UserCard from './UserCard';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    marginTop: '1rem',
  },
});

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    getAllUsers();
  }, []);

  const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };

  const getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response.data);
  };

  return (
    <Container className={classes.root}>
      {users.map((item, index) => (
        <UserCard
          name={item.name}
          lat={item.lat}
          long={item.lng}
          phone={item.phone}
        />
      ))}
    </Container>
  );
};

export default AllUsers;
