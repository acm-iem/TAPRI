import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { addUser } from '../Service/api';
import { useHistory } from 'react-router-dom';

const initialValue = {
    name: '',
    lat:'',
    lng:'',
    phone: '',
    category:''
}

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const AddUser = () => {
    const [user, setUser] = useState(initialValue);
    const { name, lat,lng, phone ,category} = user;
    const classes = useStyles();
    let history = useHistory();

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    const addUserDetails = async() => {
        await addUser(user);
        history.push('./all');
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Lat</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='lat' value={lat} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Lng</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='lng' value={lng} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Category</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='category' value={category} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Add User</Button>
            </FormControl>
        </FormGroup>
    )
}

export default AddUser;