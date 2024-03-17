import bcrypt from 'bcryptjs';
import mysql from 'mysql2';

const hashPassWord = userPassword => {
   return bcrypt.hashSync(userPassword, bcrypt.genSaltSync(10))
}

//connect the connection with database
const connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   database: 'jwt',
 });

const creatNewUser = (email, password, username) => {
   const hashPass = hashPassWord(password);

   connection.query(
      'INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, hashPass],
      function(err,results,fields) {
            
      console.log(results); // results contains rows returned by server
      }
   );
}

const getUserList = () => {
   let users = [];
   connection.query(
      'Select * from users ',
      function(err,results,fields) {
            console.log("Check resuts", results);
      }
   );
}

module.exports = {
   creatNewUser,getUserList
}