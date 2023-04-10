const mongoose=require("mongoose");

const ParkDetailSchema=new mongoose.Schema(
    {
      fname:String,
      phone:Number,
      vehicleName:String,
      vehicleNumber:Number,
      vehicleType:String,
      parkingDate:Date,
      parkingDuration:Number,
      
    },
    {
        collection:"ParkingInfo",
    }
);

mongoose.model("ParkingInfo",ParkDetailSchema);