const mongoose=require("mongoose");

const StoragetDetailsSchema=new mongoose.Schema(
    {
      fname:String,
      phone:Number,
      storageType:String,
      dimensions:String,
      storageDate:Date,
      storageDuration:String,
      
      
    },
    {
        collection:"StorageInfo",
    }
);

mongoose.model("StorageInfo",StoragetDetailsSchema);