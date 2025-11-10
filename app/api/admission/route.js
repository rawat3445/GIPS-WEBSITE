import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import Admission from '@/models/Admission';
import cloudinary from '@/lib/cloudinary'; // create lib/cloudinary.js as explained before
import { writeFile } from 'fs/promises';
import path from 'path';

export async function POST(request) {
  try {
    await connectDB();

    // ✅ 1. Parse multipart form data
    const formData = await request.formData();

    // Extract text fields
    const getValue = (name) => formData.get(name) || '';

    // ✅ 2. Handle File Uploads to Cloudinary
    const uploadToCloudinary = async (file, folder) => {
      if (!file || file.size === 0) return '';
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const tempFilePath = path.join(process.cwd(), 'public', file.name);
      await writeFile(tempFilePath, buffer);

      const result = await cloudinary.uploader.upload(tempFilePath, {
        folder,
        resource_type: 'auto', // allows PDF, image, etc.
      });
      return result.secure_url;
    };

    const photoUrl = await uploadToCloudinary(formData.get('photo'), 'admissions');
    const signatureUrl = await uploadToCloudinary(formData.get('signature'), 'admissions');
    const tenthUrl = await uploadToCloudinary(formData.get('tenthMarksheet'), 'admissions');
    const twelfthUrl = await uploadToCloudinary(formData.get('twelfthMarksheet'), 'admissions');
    const tcUrl = await uploadToCloudinary(formData.get('transferCertificate'), 'admissions');
    const aadharUrl = await uploadToCloudinary(formData.get('aadharCard'), 'admissions');
    const incomeUrl = await uploadToCloudinary(formData.get('incomeCertificate'), 'admissions');
    const categoryUrl = await uploadToCloudinary(formData.get('categoryCertificate'), 'admissions');

    // ✅ 3. Create Unique Application ID
    const applicationId = `GIPS${Date.now()}`;

    // ✅ 4. Save in MongoDB
    const admission = new Admission({
      firstName: getValue('firstName'),
      middleName: getValue('middleName'),
      lastName: getValue('lastName'),
      dateOfBirth: getValue('dateOfBirth'),
      gender: getValue('gender'),
      bloodGroup: getValue('bloodGroup'),
      aadharNumber: getValue('aadharNumber'),

      email: getValue('email'),
      phone: getValue('phone'),
      alternatePhone: getValue('alternatePhone'),

      streetAddress: getValue('streetAddress'),
      city: getValue('city'),
      state: getValue('state'),
      country: getValue('country'),
      pinCode: getValue('pinCode'),

      permanentStreet: getValue('permanentStreet'),
      permanentCity: getValue('permanentCity'),
      permanentState: getValue('permanentState'),
      permanentCountry: getValue('permanentCountry'),
      permanentPinCode: getValue('permanentPinCode'),

      tenthBoard: getValue('tenthBoard'),
      tenthSchool: getValue('tenthSchool'),
      tenthYear: getValue('tenthYear'),
      tenthPercentage: getValue('tenthPercentage'),
      tenthRollNumber: getValue('tenthRollNumber'),

      twelfthBoard: getValue('twelfthBoard'),
      twelfthSchool: getValue('twelfthSchool'),
      twelfthYear: getValue('twelfthYear'),
      twelfthPercentage: getValue('twelfthPercentage'),
      twelfthRollNumber: getValue('twelfthRollNumber'),
      twelfthStream: getValue('twelfthStream'),

      physicsMarks: getValue('physicsMarks'),
      chemistryMarks: getValue('chemistryMarks'),
      biologyMarks: getValue('biologyMarks'),

      courseApplied: getValue('courseApplied'),
      secondPreference: getValue('secondPreference'),

      fatherName: getValue('fatherName'),
      fatherOccupation: getValue('fatherOccupation'),
      fatherPhone: getValue('fatherPhone'),
      motherName: getValue('motherName'),
      motherOccupation: getValue('motherOccupation'),
      motherPhone: getValue('motherPhone'),
      guardianName: getValue('guardianName'),
      guardianRelation: getValue('guardianRelation'),
      guardianPhone: getValue('guardianPhone'),

      annualIncome: getValue('annualIncome'),
      category: getValue('category'),

      // ✅ Store URLs instead of file names
      photo: photoUrl,
      signature: signatureUrl,
      tenthMarksheet: tenthUrl,
      twelfthMarksheet: twelfthUrl,
      transferCertificate: tcUrl,
      aadharCard: aadharUrl,
      incomeCertificate: incomeUrl,
      categoryCertificate: categoryUrl,

      applicationId,
      status: 'pending',
    });

    const savedAdmission = await admission.save();

    return NextResponse.json({
      success: true,
      message: 'Application submitted successfully!',
      applicationId,
      admissionId: savedAdmission._id.toString(),
    });

  } catch (error) {
    console.error('❌ Admission submission error:', error);
    return NextResponse.json(
      { success: false, message: 'Error submitting form', error: error.message },
      { status: 500 }
    );
  }
}
