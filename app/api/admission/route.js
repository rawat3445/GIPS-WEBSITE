import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Admission from "@/models/Admission";
import cloudinary from "@/lib/cloudinary";

// ❌ REMOVE THIS - It's deprecated in Next.js 16
// export const config = {
//   api: { bodyParser: false },
// };

// ✅ Add this instead (optional but recommended)
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(request) {
  try {
    await connectDB();

    const formData = await request.formData();

    const getValue = (name) => formData.get(name) || "";

    // Upload file helper (buffer → cloudinary direct)
    const uploadCloudinary = async (file, folder) => {
      if (!file || file.size === 0) return "";

      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      return new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream(
            {
              folder,
              resource_type: "auto",
            },
            (error, result) => {
              if (error) reject(error);
              else resolve(result.secure_url);
            }
          )
          .end(buffer);
      });
    };

    // Uploading all files
    const photoUrl = await uploadCloudinary(
      formData.get("photo"),
      "admissions"
    );
    const signatureUrl = await uploadCloudinary(
      formData.get("signature"),
      "admissions"
    );
    const tenthUrl = await uploadCloudinary(
      formData.get("tenthMarksheet"),
      "admissions"
    );
    const twelfthUrl = await uploadCloudinary(
      formData.get("twelfthMarksheet"),
      "admissions"
    );
    const tcUrl = await uploadCloudinary(
      formData.get("transferCertificate"),
      "admissions"
    );
    const aadharUrl = await uploadCloudinary(
      formData.get("aadharCard"),
      "admissions"
    );
    const incomeUrl = await uploadCloudinary(
      formData.get("incomeCertificate"),
      "admissions"
    );
    const categoryUrl = await uploadCloudinary(
      formData.get("categoryCertificate"),
      "admissions"
    );

    // Unique ID
    const applicationId = `GIPS${Date.now()}`;

    const admission = new Admission({
      firstName: getValue("firstName"),
      middleName: getValue("middleName"),
      lastName: getValue("lastName"),
      dateOfBirth: getValue("dateOfBirth"),
      gender: getValue("gender"),
      bloodGroup: getValue("bloodGroup"),

      aadharNumber: getValue("aadharNumber"),
      email: getValue("email"),
      phone: getValue("phone"),
      alternatePhone: getValue("alternatePhone"),

      streetAddress: getValue("streetAddress"),
      city: getValue("city"),
      state: getValue("state"),
      country: getValue("country"),
      pinCode: getValue("pinCode"),

      permanentStreet: getValue("permanentStreet"),
      permanentCity: getValue("permanentCity"),
      permanentState: getValue("permanentState"),
      permanentCountry: getValue("permanentCountry"),
      permanentPinCode: getValue("permanentPinCode"),

      tenthBoard: getValue("tenthBoard"),
      tenthSchool: getValue("tenthSchool"),
      tenthYear: getValue("tenthYear"),
      tenthPercentage: getValue("tenthPercentage"),
      tenthRollNumber: getValue("tenthRollNumber"),

      twelfthBoard: getValue("twelfthBoard"),
      twelfthSchool: getValue("twelfthSchool"),
      twelfthYear: getValue("twelfthYear"),
      twelfthPercentage: getValue("twelfthPercentage"),
      twelfthRollNumber: getValue("twelfthRollNumber"),
      twelfthStream: getValue("twelfthStream"),

      physicsMarks: getValue("physicsMarks"),
      chemistryMarks: getValue("chemistryMarks"),
      biologyMarks: getValue("biologyMarks"),

      courseApplied: getValue("courseApplied"),
      secondPreference: getValue("secondPreference"),

      fatherName: getValue("fatherName"),
      fatherOccupation: getValue("fatherOccupation"),
      fatherPhone: getValue("fatherPhone"),
      motherName: getValue("motherName"),
      motherOccupation: getValue("motherOccupation"),
      motherPhone: getValue("motherPhone"),
      guardianName: getValue("guardianName"),
      guardianRelation: getValue("guardianRelation"),
      guardianPhone: getValue("guardianPhone"),

      annualIncome: getValue("annualIncome"),
      category: getValue("category"),

      // Store uploaded URLs
      photo: photoUrl,
      signature: signatureUrl,
      tenthMarksheet: tenthUrl,
      twelfthMarksheet: twelfthUrl,
      transferCertificate: tcUrl,
      aadharCard: aadharUrl,
      incomeCertificate: incomeUrl,
      categoryCertificate: categoryUrl,

      applicationId,
      status: "pending",
    });

    const savedAdmission = await admission.save();

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully!",
      applicationId,
      admissionId: savedAdmission._id.toString(),
    });
  } catch (error) {
    console.error("❌ Admission error:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
