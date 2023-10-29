import { Typography, Button } from "@mui/material";
import {useNavigate} from "react-router-dom"


function Header({userEmail, setUserEmail}) {
    const navigate = useNavigate()

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
                            setUserEmail(null)
                            navigate("/")
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