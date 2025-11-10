import mongoose from "mongoose";

const RegistrationSchema = new mongoose.Schema(
  {
    firstName: String,
    middleName: String,
    lastName: String,
    mobileNo: String,
    streetAddress: String,
    city: String,
    state: String,
    country: String,
    zipCode: String,
    courseName: String,
  },
  { timestamps: true }
);

export default mongoose.models.Registration ||
  mongoose.model("Registration", RegistrationSchema);
