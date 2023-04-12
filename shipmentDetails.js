const mongoose = require("mongoose");

const ShipmentDetailsSchema = new mongoose.Schema(
  {
    fname: String,
    phone: Number,
    addressFrom: String,
    addressTo: String,
    selectedShip: String,
    selectedService: String,
    dimensions: Number,
    email: String,
  },
  {
    collection: "ShipmentInfo",
  }
);

mongoose.model("ShipmentInfo", ShipmentDetailsSchema);
