import {useEffect, useState} from "react";
import { Card, Grid, Box, CardContent, CardMedia, Typography} from "@mui/material"

function Courses() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/admin/courses", {
            headers: { Authorization: "Bearer "+ localStorage.getItem("token")}
        })
        .then((response) => response.json)
        .then((data) => setCourses(data.courses))
    }, [])

    return ( <>
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
            <Box maxWidth={800}>
                <Typography variant="h4" component="h4" align="center" gutterBottom> Courses </Typography>
                <Grid container spcaing={2} justifyContent="center">
                    {courses.map((course)=>(
                        <Grid item xs={12} sm={6} md={4} key={course.title}>
                        <Course course={course} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    </>)
}


function Course({ course }) {
    const { title, description, price, imageLink, published } = course;
    
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
            sx={{ height: 140 }}
            image={imageLink}
            title={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div"> {title} </Typography>
                <Typography variant="body2" color="text.secondary"> {description} </Typography>
                <Typography variant="body2" color="text.secondary"> Price: {price} </Typography>
                <Typography variant="body2" color="text.secondary"> Published: {published ? "Yes" : "No"} </Typography>
            </CardContent>
        </Card>
    );
    }
    
    export default Courses;