import express from "express";
import path from "path"

/**
 * 
 * @param {*} app - express app 
 */
const configViewEngine = (app) => {
    app.set("view engine", "ejs");
    app.set("views", "./src/views");

  //config static files
    app.use(express.static('./src/public'));
  
}

export default configViewEngine

