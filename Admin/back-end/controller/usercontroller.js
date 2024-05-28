var tools = require('../model/usermodel');


exports.insert = async(req,res) => {
    req.body.images = req.file.originalname;

    var data = await tools.create(req.body);    
    res.status(200).json({
        status:"data inserted",
        data
    })
}