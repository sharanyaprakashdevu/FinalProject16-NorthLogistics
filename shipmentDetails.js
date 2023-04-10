const mongoose=require("mongoose");

const ShipmentDetailsSchema=new mongoose.Schema(
    {
      fname:String,
      phone:Number,
      addressFrom:String,
      addressTo:String,
      selectedShip:String,
      selectedService:String,
      dimensions:Number,
      
    },
    {
        collection:"ShipmentInfo",
    }
);

mongoose.model("ShipmentInfo",ShipmentDetailsSchema);