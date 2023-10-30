import {Grid, Button, Typography} from "@mui/material"
import {useNavigate} from "react-router-dom"
import { userEmailState } from "../store/selectors/userEmail"
import { isUserLoading } from "../store/selectors/isUserLoading"
import { useRecoilValue } from "recoil"

export const Landing = () => {
    const navigate = useNavigate()
    const userEmail = useRecoilValue(userEmailState)
    const userLoading = useRecoilValue(isUserLoading)

    return <div>
        <Grid container style={{padding: "5vw"}}>
            <Grid item xs={12} md={6} lg={6}>
                <div style={{maginTop: 100}}>
                    <Typography variant={"h2"}>
                        Coursera Admin
                    </Typography>
                    <Typography variant={"h5"}>
                        A place to learn, earn and grow
                    </Typography>

                    {!userEmail && !userLoading && <div style={{display: "flex", marginTop: 20}}>
                        <div style={{marginRight: 10}}>
                            <Button 
                                size={"large"}
                                variant={"contained"}
                                onClick={()=>{
                                    navigate("/signup")
                                }}
                            >Signup</Button>
                        </div>
                        <div>
                            <Button
                                size={"large"}
                                variant={"contained"}
                                onClick={()=>{
                                    navigate("/login")
                                }}
                            >Log in</Button>
                        </div>
                    </div>}
                </div>
            </Grid>
            <Grid item xs={12} md={6} lg={6} style={{marginTop: 20}}>
                <img src={"https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} width={"100%"}/>
            </Grid>
        </Grid>
    </div>
}