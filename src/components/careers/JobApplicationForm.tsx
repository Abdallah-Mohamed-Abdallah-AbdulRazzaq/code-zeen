"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
// قمنا بإضافة أيقونة Check للاستخدام داخل الـ Checkbox
import { UploadCloud, CheckCircle, Check, X, AlertCircle, Briefcase, User, Link as LinkIcon, MapPin, Calendar } from "lucide-react";

export default function JobApplicationForm() {
  // --- States ---
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    age: "",
    address: "",
    experience: "",
    employmentStatus: "",
    workedBefore: false,
    remoteWork: false,
    startDate: "",
    portfolioLink: "",
    linkedinProfile: "",
  });

  const [files, setFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // --- Handlers ---
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      const totalFiles = files.length + selectedFiles.length;

      if (totalFiles > 2) {
        setErrors((prev) => ({ ...prev, files: "You can only upload a maximum of 2 files." }));
        return;
      }

      const validFiles = selectedFiles.filter(file => 
        ['image/jpeg', 'image/png', 'application/pdf'].includes(file.type)
      );

      if (validFiles.length !== selectedFiles.length) {
        setErrors((prev) => ({ ...prev, files: "Only PDF, JPG, and PNG formats are allowed." }));
      } else {
         const newErrors = { ...errors };
         delete newErrors.files;
         setErrors(newErrors);
         setFiles((prev) => [...prev, ...validFiles]);
      }
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.fullName) newErrors.fullName = "Full Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.experience) newErrors.experience = "Please select your experience level";

    if (formData.portfolioLink) {
        const secureUrlPattern = /^https:\/\//i;
        if (!secureUrlPattern.test(formData.portfolioLink)) {
            newErrors.portfolioLink = "Link must be secure (start with https://)";
        }
    }

    if (files.length === 0) newErrors.files = "Please upload your CV/Resume";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 2000);
  };

  // --- Success View ---
  if (isSuccess) {
    return (
        <div className="flex flex-col items-center justify-center p-10 bg-[#242424] rounded-2xl border border-brand-700/50 text-center gap-6 animate-fadeIn">
            <div className="w-20 h-20 bg-brand-700/20 rounded-full flex items-center justify-center text-brand-700">
                <CheckCircle size={40} />
            </div>
            <h2 className="text-3xl text-white font-barlow font-semibold">Application Received!</h2>
            <p className="text-neutral-300 font-barlow text-lg max-w-md">
                Thank you, {formData.fullName}. We have received your details and CV. Our HR team will review your application and get back to you shortly.
            </p>
            <button 
                onClick={() => window.location.href = '/careers'}
                className="mt-4 px-8 py-3 bg-brand-700 text-neutral-900 rounded-lg font-medium hover:bg-brand-500 transition-colors"
            >
                Back to Careers
            </button>
        </div>
    );
  }

  // --- Form View ---
  return (
    <div className="w-full max-w-4xl mx-auto bg-neutral-800 rounded-2xl border border-neutral-700 p-6 md:p-10 shadow-2xl">
      
      <div className="mb-10 border-b border-neutral-700 pb-6">
        <h2 className="text-3xl md:text-4xl text-white font-barlow font-semibold mb-2">
            Apply Now
        </h2>
        <p className="text-neutral-400 font-barlow">
            Please fill out the form below to apply. Fields marked with <span className="text-brand-700">*</span> are required.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-10">
        
        {/* 1. Personal Information */}
        <div className="flex flex-col gap-6">
            <h3 className="text-xl text-brand-400 font-barlow font-medium flex items-center gap-2">
                <User size={20} /> Personal Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                    <label className="text-neutral-300 text-sm">Full Name <span className="text-brand-700">*</span></label>
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className={`bg-[#242424] border ${errors.fullName ? "border-red-500" : "border-neutral-700"} rounded-lg p-3 text-white focus:outline-none focus:border-brand-700 transition-colors`} placeholder="Ex: John Doe" />
                    {errors.fullName && <span className="text-red-500 text-xs">{errors.fullName}</span>}
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-neutral-300 text-sm">Age</label>
                    <input type="number" name="age" value={formData.age} onChange={handleChange} className="bg-[#242424] border border-neutral-700 rounded-lg p-3 text-white focus:outline-none focus:border-brand-700 transition-colors" placeholder="Ex: 26" />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-neutral-300 text-sm">Email Address <span className="text-brand-700">*</span></label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className={`bg-[#242424] border ${errors.email ? "border-red-500" : "border-neutral-700"} rounded-lg p-3 text-white focus:outline-none focus:border-brand-700 transition-colors`} placeholder="john@example.com" />
                    {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-neutral-300 text-sm">Phone Number <span className="text-brand-700">*</span></label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={`bg-[#242424] border ${errors.phone ? "border-red-500" : "border-neutral-700"} rounded-lg p-3 text-white focus:outline-none focus:border-brand-700 transition-colors`} placeholder="+1 234 567 890" />
                    {errors.phone && <span className="text-red-500 text-xs">{errors.phone}</span>}
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-neutral-300 text-sm">Current Address <span className="text-brand-700">*</span></label>
                    <div className="relative">
                        <MapPin className="absolute top-3 left-3 text-neutral-500" size={18} />
                        <input type="text" name="address" value={formData.address} onChange={handleChange} className={`bg-[#242424] border ${errors.address ? "border-red-500" : "border-neutral-700"} rounded-lg p-3 pl-10 w-full text-white focus:outline-none focus:border-brand-700 transition-colors`} placeholder="Street, City, Country" />
                    </div>
                    {errors.address && <span className="text-red-500 text-xs">{errors.address}</span>}
                </div>
            </div>
        </div>

        {/* 2. Professional Details */}
        <div className="flex flex-col gap-6 pt-6 border-t border-neutral-700">
            <h3 className="text-xl text-brand-400 font-barlow font-medium flex items-center gap-2">
                <Briefcase size={20} /> Professional Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                    <label className="text-neutral-300 text-sm">Years of Experience <span className="text-brand-700">*</span></label>
                    <select name="experience" value={formData.experience} onChange={handleChange} className={`bg-[#242424] border ${errors.experience ? "border-red-500" : "border-neutral-700"} rounded-lg p-3 text-white focus:outline-none focus:border-brand-700 transition-colors appearance-none cursor-pointer`}>
                        <option value="" disabled>Select Option</option>
                        <option value="fresher">Fresher (0 Years)</option>
                        <option value="1-3">1 - 3 Years</option>
                        <option value="3-5">3 - 5 Years</option>
                        <option value="5+">5+ Years</option>
                        <option value="10+">10+ Years (Expert)</option>
                    </select>
                    {errors.experience && <span className="text-red-500 text-xs">{errors.experience}</span>}
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-neutral-300 text-sm">Current Employment Status</label>
                    <select name="employmentStatus" value={formData.employmentStatus} onChange={handleChange} className="bg-[#242424] border border-neutral-700 rounded-lg p-3 text-white focus:outline-none focus:border-brand-700 transition-colors cursor-pointer">
                        <option value="" disabled>Select Option</option>
                        <option value="employed">Employed</option>
                        <option value="unemployed">Unemployed</option>
                        <option value="freelancing">Freelancing</option>
                        <option value="student">Student</option>
                    </select>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-neutral-300 text-sm">Available Start Date</label>
                    <div className="relative">
                        <Calendar className="absolute top-3 left-3 text-neutral-500" size={18} />
                        <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} className="bg-[#242424] border border-neutral-700 rounded-lg p-3 pl-10 w-full text-white focus:outline-none focus:border-brand-700 transition-colors [color-scheme:dark]" />
                    </div>
                </div>

                {/* --- Custom Styled Checkboxes --- */}
                <div className="flex flex-col justify-center gap-4">
                     {/* Checkbox 1 */}
                     <label className="flex items-center gap-3 cursor-pointer group select-none">
                        <div className="relative flex items-center justify-center">
                            <input 
                                type="checkbox" name="workedBefore" checked={formData.workedBefore} onChange={handleCheckboxChange}
                                className="peer w-6 h-6 appearance-none rounded border border-neutral-600 bg-[#242424] checked:bg-brand-700 checked:border-brand-700 transition-all cursor-pointer"
                            />
                            {/* أيقونة الصح تظهر فقط عند التفعيل */}
                            <Check 
                                size={16} 
                                className="absolute text-neutral-900 opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" 
                                strokeWidth={3}
                            />
                        </div>
                        <span className="text-neutral-300 group-hover:text-white transition-colors">I have previous work experience</span>
                     </label>

                     {/* Checkbox 2 */}
                     <label className="flex items-center gap-3 cursor-pointer group select-none">
                        <div className="relative flex items-center justify-center">
                            <input 
                                type="checkbox" name="remoteWork" checked={formData.remoteWork} onChange={handleCheckboxChange}
                                className="peer w-6 h-6 appearance-none rounded border border-neutral-600 bg-[#242424] checked:bg-brand-700 checked:border-brand-700 transition-all cursor-pointer"
                            />
                            <Check 
                                size={16} 
                                className="absolute text-neutral-900 opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" 
                                strokeWidth={3}
                            />
                        </div>
                        <span className="text-neutral-300 group-hover:text-white transition-colors">I am open to Remote Work</span>
                     </label>
                </div>
            </div>
        </div>

        {/* 3. Portfolio & Attachments */}
        <div className="flex flex-col gap-6 pt-6 border-t border-neutral-700">
            <h3 className="text-xl text-brand-400 font-barlow font-medium flex items-center gap-2">
                <LinkIcon size={20} /> Portfolio & CV
            </h3>

            <div className="flex flex-col gap-2">
                <label className="text-neutral-300 text-sm">Portfolio Link (Must be secure HTTPS link) <span className="text-brand-700">*</span></label>
                <div className="relative">
                     <LinkIcon className="absolute top-3 left-3 text-neutral-500" size={18} />
                     <input type="url" name="portfolioLink" value={formData.portfolioLink} onChange={handleChange} className={`bg-[#242424] border ${errors.portfolioLink ? "border-red-500" : "border-neutral-700"} rounded-lg p-3 pl-10 w-full text-white focus:outline-none focus:border-brand-700 transition-colors`} placeholder="https://www.yourportfolio.com" />
                </div>
                {errors.portfolioLink && <div className="flex items-center gap-2 text-red-500 text-xs mt-1"><AlertCircle size={12} /><span>{errors.portfolioLink}</span></div>}
            </div>

            <div className="flex flex-col gap-2">
                 <label className="text-neutral-300 text-sm">Upload CV/Resume (Max 2 files, PDF/Image) <span className="text-brand-700">*</span></label>
                 <div className={`relative border-2 border-dashed ${errors.files ? "border-red-500 bg-red-500/5" : "border-neutral-600 hover:border-brand-700 hover:bg-[#242424]"} rounded-xl transition-all p-8 flex flex-col items-center justify-center gap-3 cursor-pointer`}>
                    <input type="file" multiple accept=".pdf, .jpg, .jpeg, .png" onChange={handleFileChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                    <div className="w-12 h-12 bg-neutral-700 rounded-full flex items-center justify-center text-neutral-300"><UploadCloud size={24} /></div>
                    <div className="text-center"><p className="text-white font-medium">Click to upload or drag and drop</p><p className="text-neutral-400 text-xs mt-1">PDF, JPG, PNG (Max 5MB)</p></div>
                 </div>
                 {errors.files && <span className="text-red-500 text-xs">{errors.files}</span>}
                 {files.length > 0 && (
                    <div className="flex flex-col gap-2 mt-2">
                        {files.map((file, idx) => (
                            <div key={idx} className="flex items-center justify-between p-3 bg-[#242424] border border-neutral-700 rounded-lg">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-neutral-700 rounded text-brand-400">{file.type.includes('pdf') ? "PDF" : "IMG"}</div>
                                    <div className="flex flex-col"><span className="text-white text-sm truncate max-w-[200px]">{file.name}</span><span className="text-neutral-500 text-xs">{(file.size / 1024 / 1024).toFixed(2)} MB</span></div>
                                </div>
                                <button type="button" onClick={() => removeFile(idx)} className="text-neutral-500 hover:text-red-500"><X size={20} /></button>
                            </div>
                        ))}
                    </div>
                 )}
            </div>
        </div>

        {/* Submit */}
        <div className="pt-6 border-t border-neutral-700">
            <button type="submit" disabled={isSubmitting} className={`w-full py-4 rounded-lg font-barlow text-lg font-semibold transition-all shadow-lg ${isSubmitting ? "bg-neutral-600 text-neutral-300 cursor-not-allowed" : "bg-brand-700 text-neutral-900 hover:bg-brand-500 hover:shadow-brand-700/20"}`}>
                {isSubmitting ? "Submitting Application..." : "Submit Application"}
            </button>
            <p className="text-neutral-500 text-xs text-center mt-4">By clicking submit, you agree to our privacy policy and terms of service regarding data processing.</p>
        </div>

      </form>
    </div>
  );
}