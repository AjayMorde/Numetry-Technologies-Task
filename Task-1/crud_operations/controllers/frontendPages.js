exports.getStudnetsPage=(req,res,next)=>{
    res.sendFile('addData.html',{root:'views'});
}

exports.geterrorPage = (request,response,next) =>{
    response.sendFile('notFound.html',{root:'views'});
}
exports.getStudentsInfo=(req,res)=>{
    res.sendFile('getStudentsInfo.html',{root:'views'})
}