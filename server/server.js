const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const PORT=3000;
// application/json

// application/x-www
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

const db=require('./models');
db.sequelize.sync();
//require('./routes/user').app;
const userroute=require('./routes/user');
app.get("/",(req,res)=>{
    res.send("Test Get");
})
app.use("/user",userroute);

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});
