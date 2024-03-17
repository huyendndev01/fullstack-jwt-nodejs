import express from "express"
import homeController from "../controller/home.controller"
const router = express.Router()

var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: true })

const initWebRoutes = (app) => {
    router.get("/", homeController.handleHelloWorld)

    router.get("/users", homeController.handleUserPage)

    router.post("/users/create-user", urlencodedParser,homeController.handleCreatNewUser)

    return app.use('/', router)
}

export default initWebRoutes