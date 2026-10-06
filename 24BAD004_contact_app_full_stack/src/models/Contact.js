const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
  {
    contactId: {
      type: String,
      required: [true, "contactId is required"],
      unique: true,
      trim: true,
    },
    name: {
      type: String,
      required: [true, "name is required"],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, "phone is required"],
      trim: true,
      match: [/^\d{10}$/, "phone must be exactly 10 digits"],
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "email must be a valid email address"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", ContactSchema);