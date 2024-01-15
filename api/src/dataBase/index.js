const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://zorurunn:test@zoloocluster.kz13ip4.mongodb.net/income?retryWrites=true&w=majority"
    );

    console.log("Succesfully Connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  connectDatabase,
};
