const express=require('express');
const user=require('../controller/user');
const userrouter=express.Router();

userrouter.post("/add",user.create);
userrouter.put("/:id",user.update);

module.exports = userrouter;