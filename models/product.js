const mongoose = require('mongoose')
const productschema = new  mongoose.Schema(
    {
        
        name: {
            type: String,
            require: true,
        },
        title:{
            type: String,
            require: true,
        },

        image:{
            public_id:{
                type:String,
            },
            url:{
                type:String,
            },
        },


     

        price:{
            type:Number,
            require:true,
        },
        dprice:{
            type:Number,
            require:true,
        },

        stock:{
            type:Number,
            default:1,
        }

    },
    { timestams: true }

)

const productmodel = mongoose.model('product',productschema)
module.exports = productmodel;