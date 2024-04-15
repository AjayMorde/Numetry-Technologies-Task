const StudentsData=require('../models/students_data');
const addData=async (req,res)=>{
    try{
        const Name=req.body.name
        const Email=req.body.email
        const City=req.body.city
        const Age=req.body.age
        const Contact=req.body.contact
        const Password=req.body.password

        await StudentsData.create({Name,Email,City,Age,Contact,Password})
        res.status(200).json({ msg: 'Successfully created a Students data' });

    }catch(err){
        console.log('================>',err)
        res.status(404).json({ msg: 'something went wrong' });
    }
}

module.exports={addData}