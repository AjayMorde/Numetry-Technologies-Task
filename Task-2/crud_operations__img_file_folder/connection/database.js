const Sequelize=require('sequelize');
const sequelize=new Sequelize('crud2','root','1234',{
    dialect:'mysql',
    host:'localhost'
})
module.exports=sequelize