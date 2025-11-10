"use client";

import { useState } from "react";
import {
  GraduationCap,
  User,
  Home,
  FileText,
  Upload,
  CheckCircle,
  ChevronRight,
  ChevronLeft,
  Phone,
  Mail,
  Calendar,
  BookOpen,
} from "lucide-react";

export default function AdmissionPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    middleName: "",
    lastName: "",
    dateOfBirth: "",
    bloodGroup: "",
    gender: "",
    aadharNumber: "",
    email: "",
    phone: "",
    alternatePhone: "",

    // Address Information
    streetAddress: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
    sameAsAbove: false,
    permanentStreet: "",
    permanentCity: "",
    permanentState: "",
    permanentCountry: "",
    permanentPinCode: "",

    // Educational Information
    tenthBoard: "",
    tenthSchool: "",
    tenthYear: "",
    tenthPercentage: "",
    tenthRollNumber: "",
    twelfthBoard: "",
    twelfthSchool: "",
    twelfthYear: "",
    twelfthPercentage: "",
    twelfthRollNumber: "",
    twelfthStream: "",
    physicsMarks: "",
    chemistryMarks: "",
    biologyMarks: "",

    // Course & Parent Information
    courseApplied: "",
    secondPreference: "",
    fatherName: "",
    fatherOccupation: "",
    fatherPhone: "",
    motherName: "",
    motherOccupation: "",
    motherPhone: "",
    guardianName: "",
    guardianRelation: "",
    guardianPhone: "",
    annualIncome: "",
    category: "",

    // Documents
    photo: null,
    signature: null,
    tenthMarksheet: null,
    twelfthMarksheet: null,
    transferCertificate: null,
    aadharCard: null,
    incomeCertificate: null,
    categoryCertificate: null,
  });

  const courses = [
    "Bachelor in Physiotherapy (BPT)",
    "Bachelor in Optometry (B.Optom)",
    "Diploma in Optometry (D.OPTOM)",
    "Bachelor in Medical Radio Imaging Technology (BMRIT)",
    "Bachelor in Operation Theater Technology (BOTT)",
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  const handleSameAddress = (e) => {
    const checked = e.target.checked;
    setFormData((prev) => ({
      ...prev,
      sameAsAbove: checked,
      ...(checked && {
        permanentStreet: prev.streetAddress,
        permanentCity: prev.city,
        permanentState: prev.state,
        permanentCountry: prev.country,
        permanentPinCode: prev.pinCode,
      }),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("📝 Form Data before submission:", formData);

    // Check required fields
    const requiredFields = [
      "firstName",
      "lastName",
      "dateOfBirth",
      "gender",
      "aadharNumber",
      "email",
      "phone",
      "streetAddress",
      "city",
      "state",
      "country",
      "pinCode",
      "permanentStreet",
      "permanentCity",
      "permanentState",
      "permanentCountry",
      "permanentPinCode",
      "tenthBoard",
      "tenthSchool",
      "tenthYear",
      "tenthPercentage",
      "tenthRollNumber",
      "twelfthBoard",
      "twelfthSchool",
      "twelfthYear",
      "twelfthPercentage",
      "twelfthRollNumber",
      "twelfthStream",
      "courseApplied",
      "fatherName",
      "motherName",
      "category",
    ];

    const missingFields = requiredFields.filter(
      (field) =>
        !formData[field] ||
        (typeof formData[field] === "string" && formData[field].trim() === "")
    );

    if (missingFields.length > 0) {
      alert(
        `❌ Please fill all required fields:\n\n${missingFields.join(", ")}`
      );
      console.log("Missing fields:", missingFields);
      return;
    }

    setIsSubmitting(true);

    try {
      // ✅ Create FormData and append all keys
      const sendData = new FormData();
      for (const key in formData) {
        if (formData[key] !== null && formData[key] !== undefined) {
          sendData.append(key, formData[key]);
        }
      }

      // ✅ Now send formData (no headers manually)
      const response = await fetch("/api/admission", {
        method: "POST",
        body: sendData,
      });

      const result = await response.json();
      console.log("📬 Server Response:", result);

      if (result.success) {
        alert(
          `✅ ${result.message}\n\n📋 Application ID: ${result.applicationId}\n\n⚠️ Save this Application ID for future reference!`
        );

        // Reset form
        setFormData({
          firstName: "",
          middleName: "",
          lastName: "",
          dateOfBirth: "",
          gender: "",
          bloodGroup: "",
          aadharNumber: "",
          email: "",
          phone: "",
          alternatePhone: "",
          streetAddress: "",
          city: "",
          state: "",
          country: "",
          pinCode: "",
          sameAsAbove: false,
          permanentStreet: "",
          permanentCity: "",
          permanentState: "",
          permanentCountry: "",
          permanentPinCode: "",
          tenthBoard: "",
          tenthSchool: "",
          tenthYear: "",
          tenthPercentage: "",
          tenthRollNumber: "",
          twelfthBoard: "",
          twelfthSchool: "",
          twelfthYear: "",
          twelfthPercentage: "",
          twelfthRollNumber: "",
          twelfthStream: "",
          physicsMarks: "",
          chemistryMarks: "",
          biologyMarks: "",
          courseApplied: "",
          secondPreference: "",
          fatherName: "",
          fatherOccupation: "",
          fatherPhone: "",
          motherName: "",
          motherOccupation: "",
          motherPhone: "",
          guardianName: "",
          guardianRelation: "",
          guardianPhone: "",
          annualIncome: "",
          category: "",
          photo: null,
          signature: null,
          tenthMarksheet: null,
          twelfthMarksheet: null,
          transferCertificate: null,
          aadharCard: null,
          incomeCertificate: null,
          categoryCertificate: null,
        });

        setCurrentStep(1);
      } else {
        alert(`❌ Error: ${result.message}`);
      }
    } catch (error) {
      console.error("❌ Submission error:", error);
      alert(
        "❌ Network error. Please check your internet connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 5));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const steps = [
    { number: 1, title: "Personal Info", icon: User },
    { number: 2, title: "Address", icon: Home },
    { number: 3, title: "Education", icon: BookOpen },
    { number: 4, title: "Course & Family", icon: GraduationCap },
    { number: 5, title: "Documents", icon: Upload },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-white shadow-xl rounded-3xl p-8 mb-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-full">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Admission Application Form
          </h1>
          <p className="text-lg text-gray-600">
            Garhwal Institute of Paramedical Sciences (GIPS)
          </p>
          <p className="text-sm text-gray-500 mt-2">Academic Year 2025-26</p>
        </div>

        {/* Progress Steps */}
        <div className="bg-white shadow-lg rounded-2xl p-6 mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="flex items-center flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        currentStep >= step.number
                          ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-110"
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {currentStep > step.number ? (
                        <CheckCircle className="w-6 h-6" />
                      ) : (
                        <Icon className="w-6 h-6" />
                      )}
                    </div>
                    <span
                      className={`text-xs mt-2 font-medium ${
                        currentStep >= step.number
                          ? "text-blue-600"
                          : "text-gray-500"
                      }`}
                    >
                      {step.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`h-1 flex-1 mx-2 rounded transition-all duration-300 ${
                        currentStep > step.number
                          ? "bg-gradient-to-r from-blue-600 to-indigo-600"
                          : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="bg-white shadow-xl rounded-3xl p-8 mb-6">
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                    <User className="w-6 h-6 text-blue-600" />
                    Personal Information
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Please provide your basic details
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                      placeholder="Enter first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Middle Name
                    </label>
                    <input
                      type="text"
                      name="middleName"
                      value={formData.middleName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                      placeholder="Enter middle name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                      placeholder="Enter last name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Date of Birth <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Gender <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                    >
                      <option value="">Select gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Blood Group <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="bloodGroup"
                      value={formData.bloodGroup}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                    >
                      <option value="">Select blood group</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Aadhar Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="aadharNumber"
                      value={formData.aadharNumber}
                      onChange={handleInputChange}
                      required
                      maxLength="12"
                      pattern="[0-9]{12}"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                      placeholder="Enter 12-digit Aadhar"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                      placeholder="student@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      pattern="[0-9]{10}"
                      maxLength="10"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                      placeholder="10-digit mobile number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Alternate Phone Number
                  </label>
                  <input
                    type="tel"
                    name="alternatePhone"
                    value={formData.alternatePhone}
                    onChange={handleInputChange}
                    pattern="[0-9]{10}"
                    maxLength="10"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                    placeholder="Optional alternate number"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Address Information */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                    <Home className="w-6 h-6 text-blue-600" />
                    Address Information
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Current and permanent address details
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-3">
                    Current Address
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Street Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="streetAddress"
                        value={formData.streetAddress}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                        placeholder="House no, building, street"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          City <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                          placeholder="City"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          State/Province <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                          placeholder="State"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Country <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                          placeholder="Country"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          PIN Code <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="pinCode"
                          value={formData.pinCode}
                          onChange={handleInputChange}
                          required
                          pattern="[0-9]{6}"
                          maxLength="6"
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                          placeholder="6-digit PIN"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    name="sameAsAbove"
                    checked={formData.sameAsAbove}
                    onChange={handleSameAddress}
                    className="w-5 h-5 text-blue-600 border-2 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                  />
                  <label className="text-sm font-medium text-gray-700">
                    Permanent address same as current address
                  </label>
                </div>

                {!formData.sameAsAbove && (
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-purple-800 mb-3">
                      Permanent Address
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Street Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="permanentStreet"
                          value={formData.permanentStreet}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                          placeholder="House no, building, street"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            City <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="permanentCity"
                            value={formData.permanentCity}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                            placeholder="City"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            State/Province{" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="permanentState"
                            value={formData.permanentState}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                            placeholder="State"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Country <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="permanentCountry"
                            value={formData.permanentCountry}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                            placeholder="Country"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            PIN Code <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="permanentPinCode"
                            value={formData.permanentPinCode}
                            onChange={handleInputChange}
                            required
                            pattern="[0-9]{6}"
                            maxLength="6"
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                            placeholder="6-digit PIN"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Step 3: Educational Information */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                    Educational Qualifications
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    10th and 12th standard details
                  </p>
                </div>

                {/* 10th Details */}
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-3">
                    10th Standard Details
                  </h3>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Board <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="tenthBoard"
                          value={formData.tenthBoard}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                          placeholder="e.g., CBSE, ICSE, State Board"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          School Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="tenthSchool"
                          value={formData.tenthSchool}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                          placeholder="School name"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Year of Passing{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="tenthYear"
                          value={formData.tenthYear}
                          onChange={handleInputChange}
                          required
                          pattern="[0-9]{4}"
                          maxLength="4"
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                          placeholder="YYYY"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Percentage <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="tenthPercentage"
                          value={formData.tenthPercentage}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                          placeholder="e.g., 85.5"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Roll Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="tenthRollNumber"
                          value={formData.tenthRollNumber}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                          placeholder="Roll number"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 12th Details */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-3">
                    12th Standard Details
                  </h3>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Board <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="twelfthBoard"
                          value={formData.twelfthBoard}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                          placeholder="e.g., CBSE, ICSE, State Board"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          School Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="twelfthSchool"
                          value={formData.twelfthSchool}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                          placeholder="School name"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Year of Passing{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="twelfthYear"
                          value={formData.twelfthYear}
                          onChange={handleInputChange}
                          required
                          pattern="[0-9]{4}"
                          maxLength="4"
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                          placeholder="YYYY"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Percentage <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="twelfthPercentage"
                          value={formData.twelfthPercentage}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                          placeholder="e.g., 75.5"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Roll Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="twelfthRollNumber"
                          value={formData.twelfthRollNumber}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                          placeholder="Roll number"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Stream <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="twelfthStream"
                        value={formData.twelfthStream}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                      >
                        <option value="">Select stream</option>
                        <option value="PCB">
                          PCB (Physics, Chemistry, Biology)
                        </option>
                        <option value="PCM">
                          PCM (Physics, Chemistry, Mathematics)
                        </option>
                      </select>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Physics Marks <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="physicsMarks"
                          value={formData.physicsMarks}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                          placeholder="Out of 100"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Chemistry Marks{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="chemistryMarks"
                          value={formData.chemistryMarks}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                          placeholder="Out of 100"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Biology Marks <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="biologyMarks"
                          value={formData.biologyMarks}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                          placeholder="Out of 100"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Course & Family Information */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                    Course Selection & Family Details
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Choose your course and provide parent/guardian information
                  </p>
                </div>

                {/* Course Selection */}
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-indigo-800 mb-3">
                    Course Preferences
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        First Preference <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="courseApplied"
                        value={formData.courseApplied}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                      >
                        <option value="">Select course</option>
                        {courses.map((course, index) => (
                          <option key={index} value={course}>
                            {course}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Second Preference
                      </label>
                      <select
                        name="secondPreference"
                        value={formData.secondPreference}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                      >
                        <option value="">Select course</option>
                        {courses.map((course, index) => (
                          <option key={index} value={course}>
                            {course}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Family Details */}
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-pink-800 mb-3">
                    Parent/Guardian Information
                  </h3>
                  <div className="space-y-4">
                    {/* Father's Details */}
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Father&apos;s Name{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="fatherName"
                          value={formData.fatherName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                          placeholder="Father's name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Occupation <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="fatherOccupation"
                          value={formData.fatherOccupation}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                          placeholder="Occupation"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="fatherPhone"
                          value={formData.fatherPhone}
                          onChange={handleInputChange}
                          required
                          pattern="[0-9]{10}"
                          maxLength="10"
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                          placeholder="10-digit number"
                        />
                      </div>
                    </div>

                    {/* Mother's Details */}
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Mother&apos;s Name{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="motherName"
                          value={formData.motherName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                          placeholder="Mother's name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Occupation <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="motherOccupation"
                          value={formData.motherOccupation}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                          placeholder="Occupation"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="motherPhone"
                          value={formData.motherPhone}
                          onChange={handleInputChange}
                          required
                          pattern="[0-9]{10}"
                          maxLength="10"
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                          placeholder="10-digit number"
                        />
                      </div>
                    </div>

                    {/* Guardian Details (Optional) */}
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Guardian Name (if applicable)
                        </label>
                        <input
                          type="text"
                          name="guardianName"
                          value={formData.guardianName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                          placeholder="Guardian name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Relation
                        </label>
                        <input
                          type="text"
                          name="guardianRelation"
                          value={formData.guardianRelation}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                          placeholder="e.g., Uncle, Aunt"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="guardianPhone"
                          value={formData.guardianPhone}
                          onChange={handleInputChange}
                          pattern="[0-9]{10}"
                          maxLength="10"
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                          placeholder="10-digit number"
                        />
                      </div>
                    </div>

                    {/* Financial & Category Info */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Annual Family Income{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="annualIncome"
                          value={formData.annualIncome}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                        >
                          <option value="">Select range</option>
                          <option value="Below 1 Lakh">Below ₹1 Lakh</option>
                          <option value="1-3 Lakhs">₹1 - 3 Lakhs</option>
                          <option value="3-5 Lakhs">₹3 - 5 Lakhs</option>
                          <option value="5-10 Lakhs">₹5 - 10 Lakhs</option>
                          <option value="Above 10 Lakhs">
                            Above ₹10 Lakhs
                          </option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Category <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="category"
                          value={formData.category}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                        >
                          <option value="">Select category</option>
                          <option value="General">General</option>
                          <option value="OBC">OBC</option>
                          <option value="SC">SC</option>
                          <option value="ST">ST</option>
                          <option value="EWS">EWS</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Document Upload */}
            {currentStep === 5 && (
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                    <Upload className="w-6 h-6 text-blue-600" />
                    Document Upload
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Upload all required documents (PDF/JPG, max 2MB each)
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Passport Photo <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="file"
                      name="photo"
                      onChange={handleInputChange}
                      required
                      accept=".jpg,.jpeg,.png"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      JPG/PNG, max 2MB
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Signature <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="file"
                      name="signature"
                      onChange={handleInputChange}
                      required
                      accept=".jpg,.jpeg,.png"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      JPG/PNG, max 2MB
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      10th Marksheet <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="file"
                      name="tenthMarksheet"
                      onChange={handleInputChange}
                      required
                      accept=".pdf,.jpg,.jpeg,.png"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      PDF/JPG, max 2MB
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      12th Marksheet <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="file"
                      name="twelfthMarksheet"
                      onChange={handleInputChange}
                      required
                      accept=".pdf,.jpg,.jpeg,.png"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      PDF/JPG, max 2MB
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Transfer Certificate{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="file"
                      name="transferCertificate"
                      onChange={handleInputChange}
                      required
                      accept=".pdf,.jpg,.jpeg,.png"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      PDF/JPG, max 2MB
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Aadhar Card <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="file"
                      name="aadharCard"
                      onChange={handleInputChange}
                      required
                      accept=".pdf,.jpg,.jpeg,.png"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      PDF/JPG, max 2MB
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Income Certificate
                    </label>
                    <input
                      type="file"
                      name="incomeCertificate"
                      onChange={handleInputChange}
                      accept=".pdf,.jpg,.jpeg,.png"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      PDF/JPG, max 2MB (if applicable)
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Category Certificate
                    </label>
                    <input
                      type="file"
                      name="categoryCertificate"
                      onChange={handleInputChange}
                      accept=".pdf,.jpg,.jpeg,.png"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      PDF/JPG, max 2MB (if applicable)
                    </p>
                  </div>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg border border-amber-300">
                  <h4 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Declaration
                  </h4>
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      required
                      className="mt-1 w-5 h-5 text-blue-600 border-2 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                    />
                    <p className="text-sm text-gray-700">
                      I hereby declare that all the information provided above
                      is true and correct to the best of my knowledge. I
                      understand that any false information may lead to
                      cancellation of my admission. I agree to abide by all
                      rules and regulations of GIPS.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="flex items-center gap-2 px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-full transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
                Previous
              </button>
            )}

            {currentStep < 5 ? (
              <button
                type="button"
                onClick={nextStep}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-full transition-all ml-auto"
              >
                Next
                <ChevronRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin">⏳</span>
                    Submitting Application...
                  </>
                ) : (
                  <>
                    Submit Application
                    <CheckCircle className="w-5 h-5" />
                  </>
                )}
              </button>
            )}
          </div>
        </form>

        {/* Help Section */}
        <div className="bg-white shadow-lg rounded-2xl p-6 mt-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Need Help?</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-sm font-semibold text-gray-700">Call Us</p>
                <p className="text-sm text-gray-600">+9182739 68106</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-sm font-semibold text-gray-700">Email Us</p>
                <p className="text-sm text-gray-600">
                  garhwalparamedicalinstitute@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-sm font-semibold text-gray-700">
                  Office Hours
                </p>
                <p className="text-sm text-gray-600">Mon-Sat: 9 AM - 5 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
