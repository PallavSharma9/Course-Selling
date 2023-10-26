import { Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios";

function Header() {
    const navigate = useNavigate()
    const [userEmail, setUserEmail] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("http://localhost:3001/admin/me", {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            })

            const data = res.data;
            if(data.username) {
                setUserEmail(data.username)
            }
        }
        fetchData();
    }, [])

    if(userEmail) {
        return <div style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 4,
            zIndex: 1,
            backgroundColor: "skyblue"
        }}>
            <div style={{marginLeft: 10}}>
                <Typography variant={"h6"}>Coursera</Typography>
            </div>

            <div style={{display: "flex"}}>
                <div style={{marginRight: 10, display: "flex"}}>
                    <div style={{marginRight: 10}}>
                        <Button
                            onClick={()=>{
                                navigate("/addcourse")
                            }}
                        >Add course</Button>
                    </div>   

                    <div style={{marginRight: 10}}>
                        <Button
                            onClick={()=>{
                                navigate("/courses")
                            }}
                        >Courses</Button>
                    </div>

                    <Button
                        onClick={()=>{
                            localStorage.setItem("token", null)
                            window.location = "/"
                        }}
                        variant={"contained"}
                    >Logout</Button>
                </div>
            </div>
        </div>
    } else{
        return <div style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 4,
            zIndex: 1,
            backgroundColor: "skyblue"
        }}>
            <div style={{marginLeft: 10}}>
                <Typography variant={"h6"}>Coursera</Typography>
            </div>

            <div style={{display: "flex", marginRight: 10}}>
                <div style={{marginRight: 10}}>
                    <Button 
                        variant={"contained"}
                        onClick={()=>{
                            navigate("/signup")
                        }}
                    >Signup</Button>
                </div>
                <div>
                    <Button
                        variant={"contained"}
                        onClick={() => {
                            navigate("/login")
                        }}
                    >Login</Button>
                </div>
            </div>
        </div>
    }
}



export default Header;