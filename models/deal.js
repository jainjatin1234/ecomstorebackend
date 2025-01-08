const mongoose = require('mongoose')
const dealschema = new  mongoose.Schema(
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

        sold:{
            type:Number,
            require:true,

        },
        available:{
            type:Number,
            require:true,
        }

    },
    { timestams: true }

)

const dealmodel = mongoose.model('deal',dealschema)
module.exports = dealmodel;