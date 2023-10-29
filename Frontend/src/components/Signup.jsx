import {Button, TextField, Card, Typography} from "@mui/material"
import {useState} from "react"
import axios from "axios"
// import { BASE_URL } from "../config"
import { useNavigate } from "react-router-dom"

function Signup({setUserEmail}){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    return <div>
            <div style={{
                paddingTop: 150,
                marginBottom: 10,
                display: "flex",
                justifyContent: "center"
                }}>
                    <Typography variant={"h6"}>
                        Welcome to Coursera. Sign up below
                    </Typography>
            </div>
            <div style= {{display: "flex", justifyContent: "center"}}>
                <Card variant={"outlined"} style={{width: 400, padding: 20}}>
                    <TextField 
                        onChange= {(event)=>{
                            let element = event.target;
                            setEmail(element.value)
                        }}
                        fullWidth = {true}
                        label= "Email"
                        variant="outlined"
                    />
                    <br/><br />
                    <TextField 
                        onChange={(e)=> setPassword(e.target.value)}
                        fullWidth= {true}
                        label="Password"
                        variant="outlined"
                        type={"password"}
                    />
                    <br /><br />
                    <Button
                        size={'large'}
                        variant="contained"
                        onClick={async ()=>{
                            const response = await axios.post("http://localhost:3001/admin/signup", {
                                username: email,
                                password: password
                            })
                            let data = response.data;
                            localStorage.setItem("token", data.token)
                            // window.location = "/"
                            setUserEmail(email)
                            navigate("/courses")
                        }}
                    >Signup</Button>
                </Card>
            </div>
    </div>
}

export default Signup;