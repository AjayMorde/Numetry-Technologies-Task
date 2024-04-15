const Data=require('../models/students_data');
const  getData=async= async  (req,res)=>{
    try{
        const data= await Data.findAll();
        res.status(200).json({data:data})
        // console.log(data)
    }
    catch(err){
        console.log(err);
        res.json(404).json({failed:"Failed to get a data"})
    }
}

module.exports={getData}