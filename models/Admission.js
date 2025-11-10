import mongoose from "mongoose";

const AdmissionSchema = new mongoose.Schema(
  {
    // Personal Information
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
    dateOfBirth: { type: String, required: true },
    gender: { type: String, required: true },
    bloodGroup: { type: String },
    aadharNumber: { type: String, required: true },

    // Contact Information
    email: { type: String, required: true },
    phone: { type: String, required: true },
    alternatePhone: { type: String },

    // Current Address
    streetAddress: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    pinCode: { type: String, required: true },

    // Permanent Address
    permanentStreet: { type: String, required: true },
    permanentCity: { type: String, required: true },
    permanentState: { type: String, required: true },
    permanentCountry: { type: String, required: true },
    permanentPinCode: { type: String, required: true },

    // 10th Standard Information
    tenthBoard: { type: String, required: true },
    tenthSchool: { type: String, required: true },
    tenthYear: { type: String, required: true },
    tenthPercentage: { type: String, required: true },
    tenthRollNumber: { type: String, required: true },

    // 12th Standard Information
    twelfthBoard: { type: String, required: true },
    twelfthSchool: { type: String, required: true },
    twelfthYear: { type: String, required: true },
    twelfthPercentage: { type: String, required: true },
    twelfthRollNumber: { type: String, required: true },
    twelfthStream: { type: String, required: true },

    // Subject Marks
    physicsMarks: { type: String },
    chemistryMarks: { type: String },
    biologyMarks: { type: String },

    // Course Information
    courseApplied: { type: String, required: true },
    secondPreference: { type: String },

    // Family Information
    fatherName: { type: String, required: true },
    fatherOccupation: { type: String },
    fatherPhone: { type: String },
    motherName: { type: String, required: true },
    motherOccupation: { type: String },
    motherPhone: { type: String },
    guardianName: { type: String },
    guardianRelation: { type: String },
    guardianPhone: { type: String },

    // Financial & Category
    annualIncome: { type: String },
    category: { type: String, required: true },

    // Documents (file names or URLs)
    photo: { type: String },
    signature: { type: String },
    tenthMarksheet: { type: String },
    twelfthMarksheet: { type: String },
    transferCertificate: { type: String },
    aadharCard: { type: String },
    incomeCertificate: { type: String },
    categoryCertificate: { type: String },

    // Application Metadata
    applicationId: { type: String, unique: true },
    status: { type: String, default: 'pending' },
  },
  { timestamps: true }
);

export default mongoose.models.Admission || mongoose.model("Admission", AdmissionSchema);
