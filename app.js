const express = require('express')
const app = express()
const hbs = require('hbs')
const dotenv = require('dotenv')
const multer = require('multer')
const bodyParser = require('body-parser')
const path = require('path')


// config file
dotenv.config({ path: "config.env" })

// connection database
require("./db/connection")

const apiModel = require("./model/schema")

// set bodyParser
// app.use(express.bodyParser({ extended: true }))
app.use(express.urlencoded())
app.use(express.json())

// set static path ->public 
app.use(express.static(path.join(__dirname, 'public')))


// set views path ->template
app.set("view engine", "hbs")

// get views path from template
const viewPath = path.join(__dirname, '/template/views')
// console.log(viewPath)
app.set("views", viewPath)

// set partials path from template
const partialsPath = path.join(__dirname, "/template/partials")
hbs.registerPartials(partialsPath)


// app.use(fileUpload())


// SET STORAGE
var storage = multer.diskStorage({

    destination: "./public/upload",
    filename: (req, file, cb) => {

        // cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
        cb(null, file.originalname)
    }
})


const upload = multer({ storage: storage }).single("image");

app.get("/", async (req, res) => {
    try {
        const data = await apiModel.find()
        // console.log(data)

        res.status(200).render("index")

    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
})

app.get("/send_name", async (req, res) => {
    try {
        const { name } = req.query
        // console.log(req.query)
        res.status(200).render("user", {
            name: name
        })
    } catch (error) {
        res.status(404).json({ msg: error.message })

    }
})


app.post("/user_data", upload, async (req, res) => {
    try {

        const { name, description } = req.body
        const { originalname, size } = req.file


        // find name is already existing
        const findNameExists = await apiModel.findOne({ name: name })
        const alldData = await apiModel.find();

        if (findNameExists) {
            res.status(200).render("user", {
                name: findNameExists.name,
                message: "Name already exists",
                alldData: alldData,
                image: findNameExists.image,
                length: alldData.length,
                color: "danger"
            })
        }
        else {

            const userData = new apiModel({
                name: name,
                description: description,
                image: originalname,
                userId: id++
            });

            const saveData = await userData.save()
            // console.log(saveData)

            // find user data by id
            const showData = await apiModel.findOne({ name: name })

            const alldData = await apiModel.find();

            // console.log(showData)

            res.status(200).render("user", {
                name: showData.name,
                image: showData.image,
                alldData: alldData,
                check: "block",
                length: alldData.length,
                message: "successfully uploaded",
                color: "success"
            })
        }

    } catch (error) {
        res.status(404).json({ msg: error.message })

    }

})


app.listen(5000 || process.env.PORT, () => {
    console.log("listening on port " + 5000)
})
