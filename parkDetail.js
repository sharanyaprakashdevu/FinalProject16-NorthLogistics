const mongoose = require("mongoose");

const ParkDetailSchema = new mongoose.Schema(
  {
    fname: String,
    phone: Number,
    vehicleName: String,
    vehicleNumber: Number,
    vehicleType: String,
    parkingDate: Date,
    parkingDuration: Number,
    email: String,
  },
  {
    collection: "ParkingInfo",
  }
);

mongoose.model("ParkingInfo", ParkDetailSchema);
