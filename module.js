// const color = require('cli-color')
// const register = require('./auth')
const path = require("path");
// console.log(color.blue('Hello Nodejs'))
// register('Vijay')
const fs = require("fs");

// fs.mkdir(path.join(__dirname, "./test"), (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("Folder Created");
// });

// fs.writeFile(path.join(__dirname, "test", "test.txt"), "Hello File", (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("File created...");
//   fs.appendFile(
//     path.join(__dirname, "test", "test.txt"),
//     "Hello File",
//     (err) => {
//       if (err) {
//         throw err;
//       }
//       console.log("File created...");
//     }
//   );
// });

fs.readFile(path.join(__dirname,'test','test.txt'),'utf-8',(err,data)=>{
    if(err){
        throw err
    }
    // const content = Buffer.from(data)
    // console.log(content.toString())
    console.log(data)
})

//OS Module

const os = require('os');

console.log(os.type())
console.log(os.freemem())

// Event Module

const Emitter = require('events');

class Auth extends Emitter{
    register(username){
        console.log('Registered Successfully...')
        this.emit('registered',username);
    }
}

const auth = new Auth();
// Verify Email
auth.on('registered',(data)=>{
    console.log(`Registered email verify : ${data}`)
})
//Welcome email
auth.on('registered',(data)=>{
    console.log(`Welcome Email : ${data}`)
})




auth.register('vijay')