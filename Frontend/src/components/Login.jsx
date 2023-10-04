import { Typography, Box, FormControl, TextField, Button } from "@mui/material";
// import { useState } from "react";
function Login(){
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('')

    // const usernameHandler = e => setUsername(e.target.value);
    // const passwordHandler = e => setPassword(e.target.value)

    // const sendData = ()=>{
    //     fetch('http://loaclhost:3000/admin/signin',{
    //         method: 'POST',
    //         body: JSON.stringify({username, password}),
    //         headers: {'Content-type': 'application/json'}
    //     })
    // }

    return(
        <Box display="flex" flexDirection="column" justifyContent= "center" alignItems="center" height="100vh" backgroundColor = "ffffff">
            <Typography variant = 'h6' component="h6" gutterBottom>Login</Typography>
            <FormControl>
                <TextField fullWidth label="Email" variant="outlined" margin="normal" sx={{marginBottom: '1rem'}}/>
                <TextField fullWidth label= "Password" variant="outlined" margin="normal" sx={{marginTop: "0rem", marginBottom: '1rem'}} />
                <Button variant="contained" size="large">Submit</Button>
            </FormControl>
        </Box>
    )
}

export default Login;