import { AppBar, Toolbar, Box, Typography, Button } from "@mui/material";
import {useNavigate} from 'react-router-dom';




export default function Header(){
    const navigate = useNavigate();
    const login = () => navigate('/signin')
    const signup = () => navigate('/signup')
    return (
        <Box>
            <AppBar postion="static">
                <Toolbar>
                    <Typography variant='h6' component='h6' sx={{flexGrow: 1}}>Coursera</Typography>
                    <Button color="inherit" onClick={login}>Login</Button>
                    <Button color="inherit" onClick={signup}>Signup</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}