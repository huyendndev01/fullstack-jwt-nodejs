import userService from "../service/userService"

const handleHelloWorld = (req, res) => {
   const name = 'huyen'
   return res.render("home.ejs", {name})
}

const handleUserPage = (req, res) => {
   return res.render("user.ejs")
}

const handleCreatNewUser = (req, res) => {
   let {username, email, password} = req.body

   // userService.creatNewUser(email, password,username)
   userService.getUserList()
  
   return res.send("LLOOOOOO")
}

module.exports ={handleHelloWorld, handleUserPage, handleCreatNewUser}