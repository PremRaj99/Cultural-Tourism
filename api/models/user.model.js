import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    profilePicture: {
      type: String,
      default:
        "https://static-00.iconduck.com/assets.00/profile-circle-icon-512x512-zxne30hp.png",
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isPartner: {
      type: Boolean,
      default: false,
    },
    Partner: {
      type: String,
      default: ""
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
