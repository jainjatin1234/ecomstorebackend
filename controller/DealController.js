const Deal = require("../models/deal");
const cloudinary = require("cloudinary").v2;
//cloudinary setup
cloudinary.config({
  cloud_name: "dcppdjsyp",
  api_key: "414816748386289",
  api_secret: "UhpbWnq98zfU0iTzbNY7m7wwMFk",
});

class DealController{

  static insertdeal = async (req, res) => {
    try {
      //upload image
      const file = req.files.image;
      const myimage = await cloudinary.uploader.upload(file.tempFilePath, {
        folder: "ProductIMages",
      });

      const result = new Deal({
        name: req.body.name,
        title:req.body.title,
        image: {
          public_id: myimage.public_id,
          url: myimage.secure_url,
        },
        price: req.body.price,
        dprice:req.body.dprice,
        sold: req.body.sold,
        available:req.body.available
      });
      await result.save();
      console.log(result);
      res.status(201).json({
        status: "success",
        message: "Registration Successfully 😃🍻",
      });
    } catch (err) {
      console.log(err);
    }
  };





      static getdeals = async (req, res) => {
        try {
          const data = await Deal.find();
          res.status(200).json({
            success: true,
            data,
        }) } catch (error) {
          console.error(err);
          res.status(500).json({ message: "Server error" });
        }
      };



      
    }







module.exports = DealController;
  