const sequelize = require("../config/dbConfig");
const {Sequelize, DataTypes}=require('sequelize');
const uuid=require('uuid');
//make basic user model and export it
module.exports=(sequelize,Sequelize)=>{
    const user=sequelize.define('user',{
        userId:{
            primaryKey:true,
            type:Sequelize.UUID,
            defaultValue:DataTypes.UUIDV4,
            allowNull: false
        },
        firstName:{
            type:Sequelize.STRING,
            allowNull: false
        },
        lastName:{
            type:Sequelize.STRING
        },
        userName:{
            type:Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        email:{
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        contactNumber:{
            type:Sequelize.STRING,
            allowNull: false
        },
        password:{
            type: Sequelize.STRING,
            allowNull: false
        },
        isActive:{
            type:Sequelize.INTEGER,
            defaultValue:'0'
        }
    });
    return user;
};






