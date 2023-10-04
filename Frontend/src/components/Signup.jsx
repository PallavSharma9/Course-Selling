import { TextField, Typography, Button, Box, FormControl } from '@mui/material';
import { useState } from 'react';


function Signup(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')

    const usernameHandler = e => setUsername(e.target.value);
    const passwordHandler = e => setPassword(e.target.value);
    const sendData = ()=>{
        fetch('http://localhost:3000/admin/signup',{
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {"Content-type": "application/json"}
        }).then((res)=> res.json())
        .then((data)=> {localStorage.setItem('token',data.token)
    console.log(data.token)})
        
        alert('Signup completed')
    }

    return <>
        <Box display='flex' flexDirection='column' justifyContent='center' alignItems="center" height='100vh' backgroundColor= 'ffffff'>
            <Typography variant='h6' component='h6' gutterBottom>Signup</Typography>

            <FormControl>
                <TextField onChange={usernameHandler} fullWidth label='Email' variant='outlined' margin='normal' sx={{marginBottom: '1rem'}} />
                <TextField onChange={passwordHandler} fullWidth label='Password' variant='outlined' margin='normal' sx={{marginBottom: '1rem'}} />
                <Button onClick={sendData} variant='contained' size='large'>Signup</Button>
            </FormControl>
        </Box>
        
    </>
}

export default Signup;