import { AppBar, Toolbar, Box, Typography, Button } from "@mui/material";
import {useNavigate} from 'react-router-dom';
import { useEffect, useState} from 'react';




export default function Header(){
    const navigate = useNavigate();
    const handleLogin = () => navigate('/login')
    const handleSignup = () => navigate('/signup')

    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState('');

    useEffect(()=>{
        fetch('http://localhost:3000/admin/profile', 
        {   method: "GET",
            headers: { "Authorization": "Bearer "+ localStorage.getItem("token") 
        }}).then(response => response.json())
        .then(data=>{
            console.log(data)
            setUsername(data.username);
            setLoggedIn(true);
        })
        .catch(error => {
            console.log("Error fetching username:", error)
            setLoggedIn(false);
        })

    }, []);

    

    const handleLogout = () =>{
        //Perform logout logic here
        localStorage.setItem("token", null);
        setLoggedIn(false);
        setUsername("");
        // window.location = '/'
    }

    return (
        <Box>
            <AppBar postion="static">
                <Toolbar>
                    <Typography variant='h6' component='h6' sx={{flexGrow: 1}}>Coursera</Typography>
                    {loggedIn ? (
                        <>
                            <Typography variant="subtitle1" component="span" sx={{marginRight: '1rem'}}>{username}</Typography>
                            <Button color="inherit" onClick={handleLogout}>Logout</Button>
                        </>
                    ):(
                        <>
                            <Button color="inherit" onClick={handleLogin}>Login</Button>
                            <Button color="inherit" onClick={handleSignup}>Signup</Button>
                        </>
                    )
                }
                    
                </Toolbar>
            </AppBar>
        </Box>
    )
}