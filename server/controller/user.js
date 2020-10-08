const db=require('../models');
const user = require('../models/user');
const users=db.user;
const Op=db.Sequelize.Op;
exports.create=(req,res)=>{
    //first validate
    console.log(req.body);
    if(!req.body.firstName){
        res.status(400).send({message:"Please provide first name"});
        return;
    }
    if(!req.body.userName){
        res.status(400).send({message:"Please provide username"});
        return;
    }
    if(!req.body.email){
        res.status(400).send({message:"Please provide email"});
        return;
    }
    if(!req.body.contactNumber){
        res.status(400).send({message:"Please provide contact number"});
        return;
    }else if((req.body.contactNumber).length!=10){
        res.status(400).send({message:"Enter valid mobile number"});
    }
    if(!req.body.password){
        res.status(400).send({message:"Please provide password"});
        return;
    }else if((req.body.password).length<6){
        res.status(400).send({message:"Password too short"});
    }
    //validation that username and email must be unique
    //if all passed then create a user and add it
    const user={
        userId:req.body.userId,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        userName:req.body.userName,
        email:req.body.email,
        contactNumber:req.body.contactNumber,
        password:req.body.password
    };
    users.create(user).then(data=>{
        res.status(200).send({message:"Success"});
    }).catch(err=>{
        res.status(500).send({
            message:err.message
        });
    });
};

exports.update=(req,res)=>{
    const userId=req.params.id;
    console.log(req.params.id);
    //validating and if found then insert
    users.update(req.body,{
        where:{userId:userId}
    }).then(result=>{
        if(result==1){
            res.status(200).send({message:"Success"});
        }else{
            res.send({message:"Id not found"});
        }
    }).catch(err=>{
        res.status(500).send({
            message:"Error updating"+userId
        });
    });
};

