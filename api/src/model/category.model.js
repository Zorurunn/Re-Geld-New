const mongoose = require("mongoose");

const Category = mongoose.model("Category", {
  userId: mongoose.Schema.Types.ObjectId,
  name: String,
  icon: String,
  color: String,
  updatedAt: Date,
  createdAt: Date,
});

module.exports = {
  Category,
};
