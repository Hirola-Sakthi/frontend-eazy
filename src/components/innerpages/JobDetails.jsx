import { benefits, requirement, tasks } from "@/data/jobDetails";
import React, { useState } from "react";
import getSymbolFromCurrency from "currency-symbol-map";
import DOMPurify from "dompurify";
import { backendUrl } from "@/backendUrl";

export default function JobDetails({ job }) {
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    portfolio: "",
    coverLetter: "",
    experienceYears: "",
    experienceDetails: "",
    skills: "",
    education: "",
    notes: "",
  });

  const [resumeFile, setResumeFile] = useState(null);
  const [resumeURL, setResumeURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const openCareerModal = () => {
    setOpenModal(true);
    // Reset states when opening modal
    setSubmitSuccess(false);
    setSubmitError("");
    setErrors({});
  };

  const closeCareerModal = () => {
    setOpenModal(false);
    // Reset form after closing
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        portfolio: "",
        coverLetter: "",
        experienceYears: "",
        experienceDetails: "",
        skills: "",
        education: "",
        notes: "",
      });
      setResumeFile(null);
      setResumeURL("");
      setErrors({});
      setSubmitSuccess(false);
      setSubmitError("");
    }, 300);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s-()]+$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    // Experience validation
    if (!formData.experienceYears) {
      newErrors.experienceYears = "Years of experience is required";
    } else if (formData.experienceYears < 0) {
      newErrors.experienceYears = "Experience cannot be negative";
    }

    // Experience details validation
    if (!formData.experienceDetails.trim()) {
      newErrors.experienceDetails = "Experience details are required";
    }

    // Skills validation
    if (!formData.skills.trim()) {
      newErrors.skills = "Skills are required";
    }

    // Education validation
    if (!formData.education.trim()) {
      newErrors.education = "Education is required";
    }

    // Resume validation
    if (!resumeURL && !resumeFile) {
      newErrors.resume = "Resume is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    const allowedTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];

    if (!allowedTypes.includes(file.type)) {
      setErrors((prev) => ({
        ...prev,
        resume: "Please upload a PDF or DOC file",
      }));
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setErrors((prev) => ({
        ...prev,
        resume: "File size must be less than 5MB",
      }));
      return;
    }

    setLoading(true);
    setResumeFile(file);

    try {
      // Convert file to Base64
      const toBase64 = (file) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = (error) => reject(error);
        });

      const base64File = await toBase64(file);

      // Send to backend
      const response = await fetch(`${backendUrl}/api/v1/website/upload-resume`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          file: base64File,
          name: file.name,
        }),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message || "Upload failed");
      }

      // Store Cloudinary URL
      setResumeURL(data.url);

      // Clear errors
      setErrors((prev) => {
        const { resume, ...rest } = prev;
        return rest;
      });
    } catch (error) {
      console.error("Upload error:", error);
      setErrors((prev) => ({
        ...prev,
        resume: "Failed to upload resume. Please try again.",
      }));
      setResumeURL("");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    // Validate form
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setSubmitError("");

    try {
      // Prepare submission data
      const submissionData = new FormData();
      submissionData.append("jobId", job._id);

      Object.keys(formData).forEach((key) => {
        submissionData.append(key, formData[key]);
      });
      
      submissionData.append("resumeURL", resumeURL);

      // Replace with your actual API endpoint
      const response = await fetch(`${backendUrl}/api/v1/website/job/apply`, {
        method: "POST",
        body: submissionData,
      });

      if (!response.ok) {
        throw new Error("Failed to submit application");
      }

      const result = await response.json();

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Show success message
      setSubmitSuccess(true);

      // Close modal after success
      setTimeout(() => {
        closeCareerModal();
      }, 2000);

      // Optional: You can also log or track the submission
      alert("Application submitted successfully!");
      console.log("Application submitted:", {
        ...formData,
        resumeFile: resumeFile?.name,
      });
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitError("Failed to submit application. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div id="job_details" className="job-details section panel pb-6 xl:pb-9">
        <div className="section-outer panel">
          <div className="container max-w-lg">
            <div className="section-inner panel">
              <div className="panel fs-6 md:fs-5 text-dark dark:text-white text-opacity-70">
                <div className="row g-3 gy-6 lg:g-6 lg:gy-8" data-uc-grid="">
                  <div className="col-12 md:col-8 md:order-2">
                    <div className="panel fs-5 vstack gap-2">
                      <p>{job?.description}</p>
                      <div className="job-description-content">
                        <h3 className="h5 mt-2 mb-2">Job Description:</h3>
                        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(job?.fullDescription) }} />
                      </div>
                      <h3 className="h5 mt-2 mb-0">Responsibility:</h3>
                      <ul className="m-0">
                        {job?.responsibilities?.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                      <h3 className="h5 mt-2 mb-0">Requirements:</h3>
                      <ul className="m-0">
                        {job?.requirements.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                      <h3 className="h5 mt-2 mb-0">Benefits:</h3>
                      <div className="row child-cols-6 col-match g-1">
                        {job?.benefits.map((benefit, index) => (
                          <div key={index}>
                            <div className="panel hstack gap-1">
                              <i className="icon icon-1 unicon-checkmark-outline text-primary" />
                              <span className="fs-6 md:fs-5 text-dark dark:text-white text-opacity-70">{benefit}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-12 md:col-4 order-1">
                    <div data-uc-sticky="end: #job_details; offset: 80; media: @m;">
                      <div className="panel vstack gap-3 lg:gap-4 p-2 lg:p-3 rounded bg-secondary dark:bg-gray-800">
                        <h4 className="h5 m-0 pb-2 border-bottom">Job details</h4>
                        <div className="vstack gap-2">
                          <div className="hstack gap-1">
                            <i className="icon-1 unicon-portfolio" />
                            <h5 className="h6 m-0">Job type</h5>
                          </div>
                          <div className="hstack gap-narrow fs-7 fw-bold">
                            <span className="px-1 py-narrow bg-white dark:bg-gray-800 rounded-3">{job.type}</span>
                            {job.remote && <span className="px-1 py-narrow bg-white dark:bg-gray-800 rounded-3">Remotely</span>}
                          </div>
                        </div>
                        <div className="vstack gap-1">
                          <div className="hstack gap-1">
                            <i className="icon-1 unicon-location" />
                            <h5 className="h6 m-0">Location</h5>
                          </div>
                          <div className="hstack gap-narrow fs-7 fw-bold">
                            <span>{job?.location}</span>
                          </div>
                        </div>
                        <div className="vstack gap-1">
                          <div className="hstack gap-1">
                            <i className="icon-1 unicon-money" />
                            <h5 className="h6 m-0">Salary</h5>
                          </div>
                          <div className="hstack gap-narrow fs-7 fw-bold">
                            <span>
                              {getSymbolFromCurrency(job.salary.currency)}
                              {job.salary.min} – {job.salary.max} {job.salary.currency}
                            </span>
                          </div>
                        </div>
                        <div>
                          <div onClick={openCareerModal} className="btn btn-md btn-primary text-white w-100">
                            Apply job
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {openModal && (
        <div
          className="modal-overlay"
          onClick={closeCareerModal}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            padding: "1rem",
            overflowY: "auto",
          }}>
          <div
            className="bg-white dark:bg-gray-900 rounded shadow-xl"
            style={{
              backgroundColor: "#ffffff",
              padding: "2rem",
              borderRadius: "8px",
              maxWidth: "600px",
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              position: "relative",
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={closeCareerModal}
              style={{
                position: "absolute",
                top: "0.5rem",
                right: "0.5rem",
                fontSize: "1.5rem",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0.5rem",
                lineHeight: 1,
                opacity: 0.7,
              }}
              onMouseEnter={(e) => (e.target.style.opacity = "1")}
              onMouseLeave={(e) => (e.target.style.opacity = "0.7")}
              aria-label="Close modal">
              ✕
            </button>

            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginBottom: "1.5rem",
                marginTop: "0.5rem",
                color: "#000",
              }}>
              Apply for this Job
            </h3>

            {submitSuccess ? (
              <div
                style={{
                  padding: "1rem",
                  backgroundColor: "#d1fae5",
                  color: "#065f46",
                  borderRadius: "6px",
                  marginBottom: "1rem",
                }}>
                ✓ Application submitted successfully! We'll be in touch soon.
              </div>
            ) : (
              <>
                {submitError && (
                  <div
                    style={{
                      padding: "0.75rem",
                      backgroundColor: "#fee2e2",
                      color: "#991b1b",
                      borderRadius: "6px",
                      marginBottom: "1rem",
                    }}>
                    {submitError}
                  </div>
                )}

                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {/* Name */}
                  <div>
                    <input
                      name="name"
                      type="text"
                      placeholder="Full Name *"
                      className="form-control"
                      style={{
                        width: "100%",
                        padding: "0.75rem",
                        fontSize: "1rem",
                        border: errors.name ? "2px solid #ef4444" : "1px solid #d1d5db",
                        borderRadius: "6px",
                        outline: "none",
                      }}
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={(e) => (e.target.style.borderColor = "#3b82f6")}
                      onBlur={(e) => (e.target.style.borderColor = errors.name ? "#ef4444" : "#d1d5db")}
                    />
                    {errors.name && (
                      <span style={{ color: "#ef4444", fontSize: "0.875rem", marginTop: "0.25rem", display: "block" }}>{errors.name}</span>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <input
                      name="email"
                      type="email"
                      placeholder="Email Address *"
                      className="form-control"
                      style={{
                        width: "100%",
                        padding: "0.75rem",
                        fontSize: "1rem",
                        border: errors.email ? "2px solid #ef4444" : "1px solid #d1d5db",
                        borderRadius: "6px",
                        outline: "none",
                      }}
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={(e) => (e.target.style.borderColor = "#3b82f6")}
                      onBlur={(e) => (e.target.style.borderColor = errors.email ? "#ef4444" : "#d1d5db")}
                    />
                    {errors.email && (
                      <span style={{ color: "#ef4444", fontSize: "0.875rem", marginTop: "0.25rem", display: "block" }}>{errors.email}</span>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <input
                      name="phone"
                      type="text"
                      placeholder="Phone Number *"
                      className="form-control"
                      style={{
                        width: "100%",
                        padding: "0.75rem",
                        fontSize: "1rem",
                        border: errors.phone ? "2px solid #ef4444" : "1px solid #d1d5db",
                        borderRadius: "6px",
                        outline: "none",
                      }}
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={(e) => (e.target.style.borderColor = "#3b82f6")}
                      onBlur={(e) => (e.target.style.borderColor = errors.phone ? "#ef4444" : "#d1d5db")}
                    />
                    {errors.phone && (
                      <span style={{ color: "#ef4444", fontSize: "0.875rem", marginTop: "0.25rem", display: "block" }}>{errors.phone}</span>
                    )}
                  </div>

                  {/* Experience (Years) */}
                  <div>
                    <input
                      name="experienceYears"
                      type="number"
                      placeholder="Years of Experience *"
                      className="form-control"
                      style={{
                        width: "100%",
                        padding: "0.75rem",
                        fontSize: "1rem",
                        border: errors.experienceYears ? "2px solid #ef4444" : "1px solid #d1d5db",
                        borderRadius: "6px",
                        outline: "none",
                      }}
                      value={formData.experienceYears}
                      onChange={handleChange}
                      onFocus={(e) => (e.target.style.borderColor = "#3b82f6")}
                      onBlur={(e) => (e.target.style.borderColor = errors.experienceYears ? "#ef4444" : "#d1d5db")}
                      min="0"
                    />
                    {errors.experienceYears && (
                      <span style={{ color: "#ef4444", fontSize: "0.875rem", marginTop: "0.25rem", display: "block" }}>{errors.experienceYears}</span>
                    )}
                  </div>

                  {/* Experience Details */}
                  <div>
                    <textarea
                      name="experienceDetails"
                      rows="3"
                      placeholder="Describe your professional experience *"
                      className="form-control"
                      style={{
                        width: "100%",
                        padding: "0.75rem",
                        fontSize: "1rem",
                        border: errors.experienceDetails ? "2px solid #ef4444" : "1px solid #d1d5db",
                        borderRadius: "6px",
                        outline: "none",
                        fontFamily: "inherit",
                        resize: "vertical",
                      }}
                      value={formData.experienceDetails}
                      onChange={handleChange}
                      onFocus={(e) => (e.target.style.borderColor = "#3b82f6")}
                      onBlur={(e) => (e.target.style.borderColor = errors.experienceDetails ? "#ef4444" : "#d1d5db")}
                    />
                    {errors.experienceDetails && (
                      <span style={{ color: "#ef4444", fontSize: "0.875rem", marginTop: "0.25rem", display: "block" }}>
                        {errors.experienceDetails}
                      </span>
                    )}
                  </div>

                  {/* Skills */}
                  <div>
                    <textarea
                      name="skills"
                      rows="2"
                      placeholder="List your key skills (comma separated) *"
                      className="form-control"
                      style={{
                        width: "100%",
                        padding: "0.75rem",
                        fontSize: "1rem",
                        border: errors.skills ? "2px solid #ef4444" : "1px solid #d1d5db",
                        borderRadius: "6px",
                        outline: "none",
                        fontFamily: "inherit",
                        resize: "vertical",
                      }}
                      value={formData.skills}
                      onChange={handleChange}
                      onFocus={(e) => (e.target.style.borderColor = "#3b82f6")}
                      onBlur={(e) => (e.target.style.borderColor = errors.skills ? "#ef4444" : "#d1d5db")}
                    />
                    {errors.skills && (
                      <span style={{ color: "#ef4444", fontSize: "0.875rem", marginTop: "0.25rem", display: "block" }}>{errors.skills}</span>
                    )}
                  </div>

                  {/* Education */}
                  <div>
                    <input
                      name="education"
                      type="text"
                      placeholder="Highest Education Qualification *"
                      className="form-control"
                      style={{
                        width: "100%",
                        padding: "0.75rem",
                        fontSize: "1rem",
                        border: errors.education ? "2px solid #ef4444" : "1px solid #d1d5db",
                        borderRadius: "6px",
                        outline: "none",
                      }}
                      value={formData.education}
                      onChange={handleChange}
                      onFocus={(e) => (e.target.style.borderColor = "#3b82f6")}
                      onBlur={(e) => (e.target.style.borderColor = errors.education ? "#ef4444" : "#d1d5db")}
                    />
                    {errors.education && (
                      <span style={{ color: "#ef4444", fontSize: "0.875rem", marginTop: "0.25rem", display: "block" }}>{errors.education}</span>
                    )}
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <textarea
                      name="notes"
                      rows="2"
                      placeholder="Additional Notes (optional)"
                      className="form-control"
                      style={{
                        width: "100%",
                        padding: "0.75rem",
                        fontSize: "1rem",
                        border: "1px solid #d1d5db",
                        borderRadius: "6px",
                        outline: "none",
                        fontFamily: "inherit",
                        resize: "vertical",
                      }}
                      value={formData.notes}
                      onChange={handleChange}
                      onFocus={(e) => (e.target.style.borderColor = "#3b82f6")}
                      onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
                    />
                  </div>

                  {/* Resume Upload */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <label style={{ fontWeight: "bold", color: "#000" }}>Upload Resume *</label>

                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="form-control"
                      style={{
                        width: "100%",
                        padding: "0.5rem",
                        fontSize: "1rem",
                        border: errors.resume ? "2px solid #ef4444" : "1px solid #d1d5db",
                        borderRadius: "6px",
                        outline: "none",
                        cursor: "pointer",
                      }}
                      onChange={handleUpload}
                      disabled={loading}
                    />

                    {errors.resume && <span style={{ color: "#ef4444", fontSize: "0.875rem" }}>{errors.resume}</span>}

                    {loading && <p style={{ color: "#3b82f6", fontSize: "0.875rem" }}>Uploading...</p>}

                    {resumeURL && !loading && (
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#10b981", fontSize: "0.875rem" }}>
                        <span>✓ Resume uploaded: {resumeFile?.name}</span>
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="btn btn-primary"
                    style={{
                      width: "100%",
                      // padding: '0.75rem 1.5rem',
                      fontSize: "1rem",
                      fontWeight: "bold",
                      color: "#ffffff",
                      backgroundColor: loading ? "#9ca3af" : "#3b82f6",
                      border: "none",
                      borderRadius: "6px",
                      cursor: loading ? "not-allowed" : "pointer",
                      marginTop: "0.5rem",
                      transition: "background-color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      if (!loading) e.target.style.backgroundColor = "#2563eb";
                    }}
                    onMouseLeave={(e) => {
                      if (!loading) e.target.style.backgroundColor = "#3b82f6";
                    }}>
                    {loading ? "Submitting..." : "Submit Application"}
                  </button>

                  <p style={{ fontSize: "0.75rem", color: "#6b7280", textAlign: "center" }}>* Required fields</p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
