require("dotenv").config();
const express = require("express")
const {json, urlencoded} = require("express")
const {connectDB, databaseConnection} = require('./config/dbConn.js')
const {DataTypes} = require('sequelize');
const User = require('./models/user.js')(databaseConnection, DataTypes)
const PROJECTS_FOLDER = "PERSONAL PROJECTS"
const {exec} = require("child_process")

const app = express()

app.set("x-powered-by", false)
app.use(json())
app.use(express.static("public")) 
app.use(urlencoded({extended: true}))

connectDB();

app.get("/register", (req, res) => {
    res.sendFile('/home/nangosha/PERSONAL PROJECTS/question_scheduler/public/index.html')
})

app.post('/register', async (req, res) => {
    await User.create({
        firstName: req.body.first_name,
        lastName: req.body.last_name,
        email: req.body.email,
    }).then(() => res.send("user details recorded."))
    .catch(error => res.status(500).send(error))
})

app.get("/schedule", async (req, res) => {
    await User.findAll().then(users => {
        
        users.forEach(user => {
            let userEmail = user.email
            exec(`node /home/nangosha/'${PROJECTS_FOLDER}'/question_scheduler/utilities/sender.js --${userEmail}`, (error, stdout, stderr) => {
                if (error) {
                    console.error(`error: ${error.message}`);
                    return;
                }
                
                if (stderr) {
                    console.error(`stderr: ${stderr}`);
                    return;
                }
                
                console.log(`stdout:\n${stdout}`);
                
            })            
        })
    })
    
})

app.listen(process.env.SERVER_PORT, () => {
    console.log(`server is listening on port ${process.env.SERVER_PORT}`)
}) 
