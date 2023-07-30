const moongoose = require('mongoose');
const carModel = new moongoose.Schema({
    name: { type: String, required: true },
    cost: { type: Number, required: true },
    type: { type: String, required: true },
    noOfSeats: { type: Number, required: false },
    noOfDoors: { type: Number, required: false },
    imgLink: { type: String, required: false },
    remarks:{type:String,required:true}
});
module.exports = moongoose.model('Car', carModel);