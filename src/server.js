import express from "express"
import initWebRoutes from "./routes/web"
import configViewEngine from "./config/viewEngine"
require("dotenv").config()
const app = express();

configViewEngine(app)
initWebRoutes(app)

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log("Server is running...." + PORT);
})