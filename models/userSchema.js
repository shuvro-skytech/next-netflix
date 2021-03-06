import mongoose from "mongoose";
import validator from "validator";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      validate: [validator.isEmail, "Please enter valid email address"],
      unique: true,
    },
    password: {
      type: String,
    },
    resetToken: { type: String },
    update: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
