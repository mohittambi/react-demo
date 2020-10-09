const db=require('../models');
const users=db.user;

exports.login=(req,res)=>{
    console.log(req.body);
    if(!req.body.userName){
        res.status(400).send({message:"Please provide userName"});
        return;
    }else if(!req.body.password){
        res.status(400).send({message:"Please provide password"});
        return;
    }else if(!req.body.confirmPassword){
        res.status(400).send({message:"Please provide confirm password"});
        return;
    }else if(req.body.password!=req.body.confirmPassword){
        res.status(400).send({message:"Password don't match"});
        return;
    }else{
        res.status(200).send({message:"Logged in"});
    }


}