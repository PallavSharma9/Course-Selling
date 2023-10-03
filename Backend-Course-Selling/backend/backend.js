const express = require('express')
const jwt = require('jsonwebtoken')
const fs = require('fs')
const app = express()

app.use(express.json())

let ADMINS = []
let COURSES = []

try{
    ADMINS = JSON.parse(fs.readFileSync('admins.json','utf8'));
    COURSES = JSON.parse(fs.readFileSync('courses.json','utf8'))
}catch {
    ADMINS = [];
    COURSES = [];
}

const SECRET = 'my-secret-pallav'

const authenticateJwt = (req,res,next) =>{
    const authHeader = req.headers.authorization;
    if(authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, SECRET, (err,user)=>{
            if(err){
                return res.sendStatus(403)
            }
            req.user = user;
            next();
        })
    }else{
        res.sendStatus(401)
    }
}

//Admin routes
app.post('/admin/signup', (req,res)=>{
    const {username, password } = req.body;
    const admin = ADMINS.find(a=> a.username === username);
    if(admin){
        res.status(403).json({message: 'Admin already exists'})
    }else{
        const newAdmin = {username, password};
        ADMINS.push(newAdmin);
        fs.writeFileSync('admins.json', JSON.stringify(ADMINS));
        const token = jwt.sign({username, role: 'admin'}, SECRET, {expiresIn: '1h'})
        res.json({message: 'Admin created successfully', token})
    }
})

app.post('/admin/login', (req,res)=>{
    const {username,password} = req.headers;
    const admin = ADMINS.find(a=> a.username === username && a.password === password)
    if(admin) {
        const token = jwt.sign({username, role: 'admin'}, SECRET, {expiresIn: '1h'})
        res.json({message: 'Logged in successfully', token})
    }else{
        res.status(403).json({message: 'Invalid username or password'});
    }
})

app.post('/admin/courses', authenticateJwt, (req,res)=>{
    const course = req.body;
    course.id = COURSES.length+1;
    COURSES.push(course);
    fs.writeFileSync('course.json', JSON.stringify(COURSES));
    res.json({message: 'Course updated successfully', courseId: course.id})

})

app.put('/admin/courses/:courseId', (req,res)=>{
    const course = COURSES.find(c=> c.id === parseInt(req.params.courseId))
    if(course){
        Object.assign(course, req.body)
        fs.writeFileSync('course.json', JSON.stringify(COURSES))
        res.json({message: 'Course updated successfully'})
    }else{
        res.status(404).json({message: 'Course not found'})
    }
})

app.get('/admin/courses', authenticateJwt, (req,res)=>{
    res.json({ courses: COURSES})
})

app.listen(3000, ()=>{
    console.log("server is running at port 3000")
})