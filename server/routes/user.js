const express=require('express');
const user=require('../controller/user');
const register=require('../controller/register');
const login=require('../controller/login');
const userrouter=express.Router();

userrouter.post("/add",user.create);
userrouter.put("/edit/:id",user.update);
userrouter.delete("/delete/:id",user.delete);
userrouter.get("/list",user.list);
userrouter.get("/info/:id",user.info);
userrouter.post("/register",register.register);
userrouter.post("/login",login.login);

module.exports = userrouter;