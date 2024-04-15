const Image = require('../models/addImg');

const addImage = async(req, res) => {


    try {
        const imageName = req.body.imageName
        const imageUrl = req.body.imageUrl
            // console.log('controler------------------------------')
        if (!imageName || !imageUrl) {
            return res.status(400).json({ error: 'Image name and URL are required' });
        }
        // console.log('==============================>', imageName)
        // console.log('==============================>', imageUrl)

        const image = await Image.create({ imageName, imageUrl });
        console.log('Image added successfully:', image);

        res.status(200).json({ message: "Image added successfully" });
    } catch (error) {
        console.error('Error adding image :', error);
        console.log(error)
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    addImage
};