import { Typography, Box, FormControl, TextField, Button } from "@mui/material";
import { useState } from "react";
function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')

    const usernameHandler = e => setUsername(e.target.value);
    const passwordHandler = e => setPassword(e.target.value)

    const sendData = ()=>{
        console.log('ht')
        fetch('http://localhost:3000/admin/login',{
            method: 'POST',
            headers: {/*'Content-type': 'application/json',*/
                        'username': {username},
                        'password': {password}}
        }).then(res => {res.json()
        console.log(res.json())})
        .then(data => {localStorage.setItem("token",data.token)
            console.log(data.token)})
        
    }

    return(
        <Box display="flex" flexDirection="column" justifyContent= "center" alignItems="center" height="100vh" backgroundColor = "ffffff">
            <Typography variant = 'h6' component="h6" gutterBottom>Login</Typography>
            <FormControl>
                <TextField onChange={usernameHandler} fullWidth label="Email" variant="outlined" margin="normal" sx={{marginBottom: '1rem'}}/>
                <TextField onChange={passwordHandler} fullWidth label= "Password" variant="outlined" margin="normal" sx={{marginTop: "0rem", marginBottom: '1rem'}} />
                <Button onClick={sendData} variant="contained" size="large">Submit</Button>
            </FormControl>
        </Box>
    )
}

export default Login;