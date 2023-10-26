import {Button, TextField, Card, Typography} from "@mui/material"
import {useState} from "react"
import axios from "axios"

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return <div>
            <div style={{
                paddingTop: 150,
                marginBottom: 10,
                display: "flex",
                justifyContent: "center"
            }}>
                <Typography variant={"h6"}>Welcome to Coursera.</Typography>
            </div>
            <div style ={{display: "flex", justifyContent: "center"}}>
                <Card variant={"outlined"} style={{width: 400, padding: 20}}>
                    <TextField 
                        onChange={(e)=> setEmail(e.target.value)}
                        fullWidth= {true}
                        label= "Email"
                        variant="outlined"
                    />
                    <br /> <br/>
                    <TextField 
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth={true}
                        label= "Password"
                        variant="outlined"
                        type={"password"}
                    />
                    <br /> <br />
                    <Button
                        size={"large"}
                        variant="contained"
                        onClick={async ()=>{
                            const res = await axios.post("http://localhost:3001/admin/login",{
                                username: email,
                                password: password
                            }, {
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            })
                            const data = res.data
                            localStorage.setItem("token", data.token)
                            window.location = "/"
                        }}
                    >Login</Button>
                </Card>
            </div>
    </div>
}

export default Login;