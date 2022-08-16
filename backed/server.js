const app = require("./app");
const connectDatabase = require ("./db/database.js");

// handle uncaught exception 
process.on("uncaughtException", (err) => {
  console.log(`Error is happing for ${err.message}`)
  console.log(`Shutting down the server due to  handle uncaught exception`);
});

//config 
if(process.env.NODE_ENV!=="PRODUCTION"){
  require("dotenv").config({
      path:"backed/config/config.env"
  })}

 //connect server
connectDatabase();
//create server
const server = app.listen(process.env.PORT , () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`)
})

// unHandle Promise rejection

process.on("unhandledRejection" , (err) => {
  console.log(`Shutting down the server for ${err.message}`)
  console.log(`Shutting down the server due to  unHandle Promise rejection`)
  server.close(() => {
      process.exit(1);
  });
});