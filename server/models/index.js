const sequelize=require('../config/dbConfig');
const Sequelize=require('sequelize');

const db={};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
//export the db 
db.user=require("./user")(sequelize,Sequelize);
module.exports=db;



