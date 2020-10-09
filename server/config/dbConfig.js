const {Sequelize}=require('sequelize');

const dotenv=require('dotenv');
dotenv.config();
//const sequelize = new Sequelize('postgres://postgres:root@localhost:5432/test');
const sequelize=new Sequelize(`postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`);
try{
    sequelize.authenticate();
    console.log("Database connected");
}catch(err){
    console.log("Cannot connect");
}
module.exports=sequelize;






