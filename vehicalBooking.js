const mongoose = require("mongoose");

const vehicalBookingSchema = new mongoose.Schema(
  {
    vehical: Object,
    isBooked: Boolean,
    isPaymentDone: Boolean,
    email: String,
  },
  {
    collection: "vehicalBooking",
  }
);

mongoose.model("vehicalBooking", vehicalBookingSchema);
