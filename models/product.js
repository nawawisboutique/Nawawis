import mongoose from "mongoose";

const productschema = new mongoose.Schema ({

    name_product:{
        type: String,
        required: true,
        maxlength: 200
    },
    img:{
        type: [String],
        required: true,
        maxlength:200
    },
    desc:{
        type: String, 
        required: true,
        maxlength:1500 
    },
    price:{
        type: [Number],
        required: true,
        maxlength:200 
    },
    sold:{
        type: Number,
        default: 0
    },
    stock:{
        type: Number,
        default: 0
    },
    type:{
        type: String, 
        required: true,
        maxlength:200 
    }
   

},{timestamps: true}
)

module.exports = mongoose.models.product || mongoose.model('product', productschema);