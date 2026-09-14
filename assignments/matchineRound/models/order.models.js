import mongoose from "mongoose"

const orderSchema =  new mongoose.Schema({
    productName : {
        type : String,
        required : true,
        trim : true
    },
    amount : {
        type : Number,  
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
        required : true
    }
})

const Order = mongoose.model("order",orderSchema);
export default Order