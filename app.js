import express from 'express'
import postRoute from './routes/post.route.js';
import authRoute from './routes/auth.route.js';
const app = new express();


app.use(express.json());

app.use("/api/post" , postRoute);
app.use("/api/auth" , authRoute);



// console.log("test");
// console.log("Test2");
app.listen(5000, ()=>{
    console.log("Server is Starting Working !!");
});