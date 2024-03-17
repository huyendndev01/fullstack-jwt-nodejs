import express from "express"
import homeController from "../controller/home.controller"
const router = express.Router()


const initWebRoutes = (app) => {
    router.get("/", homeController.handleHelloWorld)

    router.get("/about", homeController.handleUserPage)

    return app.use('/', router)
}

export default initWebRoutes