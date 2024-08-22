import app from "./app.js";


app.listen(process.env.PORT, ()=>{ // process.env.PORT fetch the port that is defined in config.env file 
    console.log(`Server is running on port ${process.env.PORT}`)
}) 