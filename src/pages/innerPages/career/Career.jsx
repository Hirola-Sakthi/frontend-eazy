import React, { useState, useRef, useEffect } from "react";
import getSymbolFromCurrency from "currency-symbol-map";

// Sample job data - replace with your actual data source
const jobListingsData = [
  {
    id: 1,
    title: "Senior Product Designer",
    department: "Design",
    location: "Salé, Morocco",
    type: "Full-time",
    remote: true,
    salary: { min: 60000, max: 90000, currency: "INR" },
    experience: "5+ years",
    posted: "2024-01-15",
    description: "Lead product design initiatives and mentor junior designers.",
    skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
    urgent: true,
  },
  {
    id: 2,
    title: "Frontend Developer",
    department: "Engineering",
    location: "Bangalore, India",
    type: "Full-time",
    remote: true,
    salary: { min: 80000, max: 120000, currency: "INR" },
    experience: "3+ years",
    posted: "2024-01-18",
    description: "Build responsive web applications using React and modern tools.",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    urgent: false,
  },
  {
    id: 3,
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    remote: true,
    salary: { min: 90000, max: 140000, currency: "INR" },
    experience: "4+ years",
    posted: "2024-01-10",
    description: "Manage cloud infrastructure and CI/CD pipelines.",
    skills: ["AWS", "Docker", "Kubernetes", "Terraform"],
    urgent: false,
  },
  {
    id: 4,
    title: "Marketing Manager",
    department: "Marketing",
    location: "Dubai, UAE",
    type: "Full-time",
    remote: false,
    salary: { min: 70000, max: 100000, currency: "INR" },
    experience: "5+ years",
    posted: "2024-01-20",
    description: "Drive brand awareness and lead generation campaigns.",
    skills: ["SEO", "Content Strategy", "Analytics", "Social Media"],
    urgent: true,
  },
  {
    id: 5,
    title: "Data Analyst",
    department: "Data",
    location: "London, UK",
    type: "Contract",
    remote: true,
    salary: { min: 50000, max: 75000, currency: "INR" },
    experience: "2+ years",
    posted: "2024-01-22",
    description: "Analyze data to provide actionable business insights.",
    skills: ["Python", "SQL", "Tableau", "Statistical Analysis"],
    urgent: false,
  },
  {
    id: 6,
    title: "UX Researcher",
    department: "Design",
    location: "San Francisco, USA",
    type: "Full-time",
    remote: true,
    salary: { min: 85000, max: 130000, currency: "INR" },
    experience: "3+ years",
    posted: "2024-01-25",
    description: "Conduct user research to inform product decisions.",
    skills: ["User Interviews", "Usability Testing", "Survey Design", "Data Analysis"],
    urgent: false,
  },
];

const departments = ["All", "Design", "Engineering", "Marketing", "Data", "Sales", "Operations"];
const jobTypes = ["All", "Full-time", "Part-time", "Contract", "Internship"];
const experienceLevels = ["All", "Entry Level", "1-2 years", "2+ years", "3+ years", "4+ years", "5+ years", "7+ years"];
const locations = ["All", "Remote", "Salé, Morocco", "Bangalore, India", "Dubai, UAE", "London, UK", "San Francisco, USA"];

// Application Modal Component
function ApplicationModal({ isOpen, onClose, job }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedin: "",
    portfolio: "",
    experience: "",
    coverLetter: "",
    resume: null,
  });
  const [dragActive, setDragActive] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const fileInputRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setSubmitSuccess(false);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        linkedin: "",
        portfolio: "",
        experience: "",
        coverLetter: "",
        resume: null,
      });
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFile = (file) => {
    const validTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    if (validTypes.includes(file.type)) {
      setFormData({ ...formData, resume: file });
    } else {
      alert("Please upload a PDF or Word document");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm" />
      
      {/* Modal */}
      <div 
        ref={modalRef}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 rounded-2 shadow-2xl"
        style={{
          animation: "modalSlideIn 0.3s ease-out",
        }}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-4 lg:p-6">
          <div className="hstack justify-between items-start">
            <div className="vstack gap-1">
              <span className="fs-7 fw-bold text-uppercase text-primary tracking-wide">
                Apply for Position
              </span>
              <h3 className="h4 lg:h3 m-0">{job?.title}</h3>
              <div className="hstack gap-2 fs-7 text-dark dark:text-white text-opacity-60">
                <span>{job?.location}</span>
                <span>•</span>
                <span>{job?.type}</span>
                {job?.remote && (
                  <>
                    <span>•</span>
                    <span className="text-primary">Remote Available</span>
                  </>
                )}
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <i className="icon icon-1 unicon-close" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 lg:p-6">
          {submitSuccess ? (
            <div className="vstack items-center justify-center gap-4 py-8 text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <i className="icon icon-2 unicon-checkmark text-green-600 dark:text-green-400" />
              </div>
              <div className="vstack gap-2">
                <h4 className="h4 m-0">Application Submitted!</h4>
                <p className="fs-6 text-dark dark:text-white text-opacity-70 max-w-sm">
                  Thank you for applying. We'll review your application and get back to you within 5-7 business days.
                </p>
              </div>
              <button
                onClick={onClose}
                className="btn btn-md btn-primary text-white mt-4"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="vstack gap-4">
              {/* Personal Information */}
              <div className="vstack gap-3">
                <h5 className="h6 m-0 pb-2 border-b border-gray-200 dark:border-gray-700">
                  Personal Information
                </h5>
                <div className="row g-3">
                  <div className="col-12 lg:col-6">
                    <label className="fs-7 fw-medium mb-1 block">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3 py-2 rounded bg-secondary dark:bg-gray-800 border border-transparent focus:border-primary focus:outline-none transition-colors fs-6"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="col-12 lg:col-6">
                    <label className="fs-7 fw-medium mb-1 block">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 rounded bg-secondary dark:bg-gray-800 border border-transparent focus:border-primary focus:outline-none transition-colors fs-6"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="col-12 lg:col-6">
                    <label className="fs-7 fw-medium mb-1 block">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 rounded bg-secondary dark:bg-gray-800 border border-transparent focus:border-primary focus:outline-none transition-colors fs-6"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div className="col-12 lg:col-6">
                    <label className="fs-7 fw-medium mb-1 block">
                      Years of Experience <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full px-3 py-2 rounded bg-secondary dark:bg-gray-800 border border-transparent focus:border-primary focus:outline-none transition-colors fs-6"
                    >
                      <option value="">Select experience</option>
                      <option value="0-1">Less than 1 year</option>
                      <option value="1-2">1-2 years</option>
                      <option value="2-4">2-4 years</option>
                      <option value="4-6">4-6 years</option>
                      <option value="6-10">6-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Professional Links */}
              <div className="vstack gap-3">
                <h5 className="h6 m-0 pb-2 border-b border-gray-200 dark:border-gray-700">
                  Professional Links
                </h5>
                <div className="row g-3">
                  <div className="col-12 lg:col-6">
                    <label className="fs-7 fw-medium mb-1 block">
                      LinkedIn Profile
                    </label>
                    <input
                      type="url"
                      value={formData.linkedin}
                      onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                      className="w-full px-3 py-2 rounded bg-secondary dark:bg-gray-800 border border-transparent focus:border-primary focus:outline-none transition-colors fs-6"
                      placeholder="https://linkedin.com/in/johndoe"
                    />
                  </div>
                  <div className="col-12 lg:col-6">
                    <label className="fs-7 fw-medium mb-1 block">
                      Portfolio / Website
                    </label>
                    <input
                      type="url"
                      value={formData.portfolio}
                      onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                      className="w-full px-3 py-2 rounded bg-secondary dark:bg-gray-800 border border-transparent focus:border-primary focus:outline-none transition-colors fs-6"
                      placeholder="https://johndoe.com"
                    />
                  </div>
                </div>
              </div>

              {/* Resume Upload */}
              <div className="vstack gap-3">
                <h5 className="h6 m-0 pb-2 border-b border-gray-200 dark:border-gray-700">
                  Resume / CV <span className="text-red-500">*</span>
                </h5>
                <div
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={`
                    relative p-6 rounded-lg border-2 border-dashed cursor-pointer transition-all duration-200
                    ${dragActive 
                      ? "border-primary bg-primary/5" 
                      : formData.resume 
                        ? "border-green-500 bg-green-50 dark:bg-green-900/20" 
                        : "border-gray-300 dark:border-gray-600 hover:border-primary hover:bg-gray-50 dark:hover:bg-gray-800"
                    }
                  `}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
                    className="hidden"
                  />
                  <div className="vstack items-center gap-2 text-center">
                    {formData.resume ? (
                      <>
                        <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                          <i className="icon icon-1 unicon-document text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                          <p className="fs-6 fw-medium m-0">{formData.resume.name}</p>
                          <p className="fs-7 text-dark dark:text-white text-opacity-60 m-0">
                            {(formData.resume.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setFormData({ ...formData, resume: null });
                          }}
                          className="fs-7 text-red-500 hover:text-red-600 fw-medium"
                        >
                          Remove file
                        </button>
                      </>
                    ) : (
                      <>
                        <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                          <i className="icon icon-1 unicon-cloud-upload text-gray-500" />
                        </div>
                        <div>
                          <p className="fs-6 fw-medium m-0">
                            <span className="text-primary">Click to upload</span> or drag and drop
                          </p>
                          <p className="fs-7 text-dark dark:text-white text-opacity-60 m-0">
                            PDF, DOC, DOCX (Max 10MB)
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Cover Letter */}
              <div className="vstack gap-2">
                <label className="fs-7 fw-medium">
                  Cover Letter (Optional)
                </label>
                <textarea
                  value={formData.coverLetter}
                  onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                  rows={5}
                  className="w-full px-3 py-2 rounded bg-secondary dark:bg-gray-800 border border-transparent focus:border-primary focus:outline-none transition-colors fs-6 resize-none"
                  placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                />
              </div>

              {/* Submit Button */}
              <div className="hstack justify-end gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button
                  type="button"
                  onClick={onClose}
                  className="btn btn-md btn-outline-secondary"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting || !formData.resume}
                  className="btn btn-md btn-primary text-white min-w-[140px] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="hstack gap-2 items-center justify-center">
                      <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                      Submitting...
                    </span>
                  ) : (
                    "Submit Application"
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}

// Job Card Component
function JobCard({ job, onApply }) {
  const daysAgo = Math.floor((new Date() - new Date(job.posted)) / (1000 * 60 * 60 * 24));
  
  return (
    <div 
      className="panel vstack gap-3 p-4 lg:p-5 rounded-lg lg:rounded-2 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
    >
      {/* Header */}
      <div className="hstack justify-between items-start">
        <div className="vstack gap-1">
          <div className="hstack gap-2 items-center">
            <h4 className="h5 lg:h4 m-0 group-hover:text-primary transition-colors">
              {job.title}
            </h4>
            {job.urgent && (
              <span className="px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 fs-8 fw-bold uppercase">
                Urgent
              </span>
            )}
          </div>
          <div className="hstack gap-2 flex-wrap fs-7 text-dark dark:text-white text-opacity-60">
            <span className="hstack gap-1 items-center">
              <i className="icon-narrow unicon-building" />
              {job.department}
            </span>
            <span>•</span>
            <span className="hstack gap-1 items-center">
              <i className="icon-narrow unicon-location" />
              {job.location}
            </span>
            <span>•</span>
            <span>{daysAgo === 0 ? "Today" : `${daysAgo}d ago`}</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="fs-6 text-dark dark:text-white text-opacity-70 m-0 line-clamp-2">
        {job.description}
      </p>

      {/* Skills */}
      <div className="hstack gap-2 flex-wrap">
        {job.skills.slice(0, 4).map((skill, index) => (
          <span 
            key={index}
            className="px-2 py-1 rounded bg-secondary dark:bg-gray-700 fs-7 fw-medium"
          >
            {skill}
          </span>
        ))}
        {job.skills.length > 4 && (
          <span className="px-2 py-1 fs-7 text-dark dark:text-white text-opacity-60">
            +{job.skills.length - 4} more
          </span>
        )}
      </div>

      {/* Footer */}
      <div className="hstack justify-between items-center pt-3 border-t border-gray-100 dark:border-gray-700">
        <div className="hstack gap-3">
          <div className="hstack gap-2 items-center">
            <span className="px-2 py-1 rounded bg-primary/10 text-primary fs-7 fw-medium">
              {job.type}
            </span>
            {job.remote && (
              <span className="px-2 py-1 rounded bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 fs-7 fw-medium">
                Remote
              </span>
            )}
          </div>
          <span className="fs-7 fw-bold text-dark dark:text-white">
            {getSymbolFromCurrency(job.salary.currency)}{(job.salary.min / 1000).toFixed(0)}k – {getSymbolFromCurrency(job.salary.currency)}{(job.salary.max / 1000).toFixed(0)}k
          </span>
        </div>
        <button
          onClick={() => onApply(job)}
          className="btn btn-sm btn-primary text-white hstack gap-1 items-center"
        >
          <span>Apply</span>
          <i className="icon icon-narrow unicon-arrow-up-right fw-bold rtl:-rotate-90" />
        </button>
      </div>
    </div>
  );
}

// Main Career Portal Component
export default function CareerPortal() {
  const [jobs, setJobs] = useState(jobListingsData);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedExperience, setSelectedExperience] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [remoteOnly, setRemoteOnly] = useState(false);
  const [sortBy, setSortBy] = useState("newest");
  const [showFilters, setShowFilters] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  // Filter and sort jobs
  const filteredJobs = jobs
    .filter((job) => {
      const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesDepartment = selectedDepartment === "All" || job.department === selectedDepartment;
      const matchesType = selectedType === "All" || job.type === selectedType;
      const matchesLocation = selectedLocation === "All" || job.location === selectedLocation;
      const matchesRemote = !remoteOnly || job.remote;
      const matchesExperience = selectedExperience === "All" || job.experience.includes(selectedExperience.replace(" years", "").replace("+", ""));
      
      return matchesSearch && matchesDepartment && matchesType && matchesLocation && matchesRemote && matchesExperience;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return new Date(b.posted) - new Date(a.posted);
        case "oldest":
          return new Date(a.posted) - new Date(b.posted);
        case "salary-high":
          return b.salary.max - a.salary.max;
        case "salary-low":
          return a.salary.min - b.salary.min;
        default:
          return 0;
      }
    });

  const activeFiltersCount = [
    selectedDepartment !== "All",
    selectedType !== "All",
    selectedExperience !== "All",
    selectedLocation !== "All",
    remoteOnly,
  ].filter(Boolean).length;

  const clearFilters = () => {
    setSelectedDepartment("All");
    setSelectedType("All");
    setSelectedExperience("All");
    setSelectedLocation("All");
    setRemoteOnly(false);
    setSearchQuery("");
  };

  const handleApply = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  return (
    <div id="career_portal" className="career-portal section panel overflow-hidden">
      {/* Hero Section */}
      <div className="section-outer panel py-6 xl:py-9 bg-linear-to-br from-primary/5 via-transparent to-secondary/30 dark:from-primary/10 dark:to-gray-800">
        <div className="container max-w-lg">
          <div className="section-inner panel">
            <div 
              className="panel vstack items-center text-center gap-4 max-w-700px mx-auto"
              data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
            >
              <span className="fs-7 fw-bold text-uppercase text-primary tracking-wide">
                Join Our Team
              </span>
              <h1 className="h3 sm:h2 lg:h1 m-0">
                Find Your Dream <span className="text-primary">Career</span>
              </h1>
              <p className="fs-5 lg:fs-4 text-dark dark:text-white text-opacity-70 m-0">
                Discover exciting opportunities and take the next step in your professional journey with us.
              </p>

              {/* Search Bar */}
              <div className="w-full max-w-600px mt-2">
                <div className="relative">
                  <i className="icon icon-1 unicon-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search jobs by title, skill, or keyword..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 lg:py-4 rounded-lg lg:rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all fs-6 shadow-sm"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <i className="icon icon-narrow unicon-close" />
                    </button>
                  )}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="hstack gap-6 lg:gap-8 mt-2">
                <div className="vstack items-center">
                  <span className="h4 lg:h3 m-0 text-primary fw-bold">{jobs.length}</span>
                  <span className="fs-7 text-dark dark:text-white text-opacity-60">Open Positions</span>
                </div>
                <div className="w-px h-10 bg-gray-200 dark:bg-gray-700" />
                <div className="vstack items-center">
                  <span className="h4 lg:h3 m-0 text-primary fw-bold">{departments.length - 1}</span>
                  <span className="fs-7 text-dark dark:text-white text-opacity-60">Departments</span>
                </div>
                <div className="w-px h-10 bg-gray-200 dark:bg-gray-700" />
                <div className="vstack items-center">
                  <span className="h4 lg:h3 m-0 text-primary fw-bold">{locations.length - 1}</span>
                  <span className="fs-7 text-dark dark:text-white text-opacity-60">Locations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters & Job Listings */}
      <div className="section-outer panel py-6 xl:py-9">
        <div className="container max-w-lg">
          <div className="section-inner panel">
            {/* Filter Controls */}
            <div 
              className="panel vstack gap-4 mb-6"
              data-anime="onview: -100; translateY: [24, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 200;"
            >
              {/* Filter Header */}
              <div className="hstack justify-between items-center flex-wrap gap-3">
                <div className="hstack gap-3 items-center">
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className={`btn btn-sm ${showFilters ? "btn-primary text-white" : "btn-outline-secondary"} hstack gap-2 items-center`}
                  >
                    <i className="icon icon-narrow unicon-filter" />
                    <span>Filters</span>
                    {activeFiltersCount > 0 && (
                      <span className="w-5 h-5 rounded-full bg-white text-primary fs-8 fw-bold flex items-center justify-center">
                        {activeFiltersCount}
                      </span>
                    )}
                  </button>
                  {activeFiltersCount > 0 && (
                    <button
                      onClick={clearFilters}
                      className="fs-7 text-primary hover:text-primary-dark fw-medium"
                    >
                      Clear all
                    </button>
                  )}
                </div>

                <div className="hstack gap-3 items-center">
                  <span className="fs-7 text-dark dark:text-white text-opacity-60">
                    {filteredJobs.length} {filteredJobs.length === 1 ? "job" : "jobs"} found
                  </span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 rounded bg-secondary dark:bg-gray-800 border-0 fs-7 fw-medium focus:outline-none cursor-pointer"
                  >
                    <option value="newest">Newest first</option>
                    <option value="oldest">Oldest first</option>
                    <option value="salary-high">Highest salary</option>
                    <option value="salary-low">Lowest salary</option>
                  </select>
                </div>
              </div>

              {/* Filter Panel */}
              {showFilters && (
                <div className="panel p-4 lg:p-5 rounded-lg lg:rounded-xl bg-secondary dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                  <div className="row g-4">
                    <div className="col-12 sm:col-6 lg:col-3">
                      <label className="fs-7 fw-medium mb-2 block text-dark dark:text-white text-opacity-70">
                        Department
                      </label>
                      <select
                        value={selectedDepartment}
                        onChange={(e) => setSelectedDepartment(e.target.value)}
                        className="w-full px-3 py-2 rounded bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-600 fs-6 focus:border-primary focus:outline-none cursor-pointer"
                      >
                        {departments.map((dept) => (
                          <option key={dept} value={dept}>{dept}</option>
                        ))}
                      </select>
                    </div>
                    <div className="col-12 sm:col-6 lg:col-3">
                      <label className="fs-7 fw-medium mb-2 block text-dark dark:text-white text-opacity-70">
                        Job Type
                      </label>
                      <select
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                        className="w-full px-3 py-2 rounded bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-600 fs-6 focus:border-primary focus:outline-none cursor-pointer"
                      >
                        {jobTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    <div className="col-12 sm:col-6 lg:col-3">
                      <label className="fs-7 fw-medium mb-2 block text-dark dark:text-white text-opacity-70">
                        Experience
                      </label>
                      <select
                        value={selectedExperience}
                        onChange={(e) => setSelectedExperience(e.target.value)}
                        className="w-full px-3 py-2 rounded bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-600 fs-6 focus:border-primary focus:outline-none cursor-pointer"
                      >
                        {experienceLevels.map((exp) => (
                          <option key={exp} value={exp}>{exp}</option>
                        ))}
                      </select>
                    </div>
                    <div className="col-12 sm:col-6 lg:col-3">
                      <label className="fs-7 fw-medium mb-2 block text-dark dark:text-white text-opacity-70">
                        Location
                      </label>
                      <select
                        value={selectedLocation}
                        onChange={(e) => setSelectedLocation(e.target.value)}
                        className="w-full px-3 py-2 rounded bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-600 fs-6 focus:border-primary focus:outline-none cursor-pointer"
                      >
                        {locations.map((loc) => (
                          <option key={loc} value={loc}>{loc}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  {/* Remote Toggle */}
                  <div className="hstack gap-3 items-center mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                    <label className="hstack gap-2 items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={remoteOnly}
                        onChange={(e) => setRemoteOnly(e.target.checked)}
                        className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
                      />
                      <span className="fs-6 fw-medium">Remote positions only</span>
                    </label>
                  </div>
                </div>
              )}

              {/* Active Filter Tags */}
              {activeFiltersCount > 0 && (
                <div className="hstack gap-2 flex-wrap">
                  {selectedDepartment !== "All" && (
                    <span className="hstack gap-1 items-center px-3 py-1 rounded-full bg-primary/10 text-primary fs-7 fw-medium">
                      {selectedDepartment}
                      <button onClick={() => setSelectedDepartment("All")} className="hover:text-primary-dark">
                        <i className="icon icon-narrow unicon-close" />
                      </button>
                    </span>
                  )}
                  {selectedType !== "All" && (
                    <span className="hstack gap-1 items-center px-3 py-1 rounded-full bg-primary/10 text-primary fs-7 fw-medium">
                      {selectedType}
                      <button onClick={() => setSelectedType("All")} className="hover:text-primary-dark">
                        <i className="icon icon-narrow unicon-close" />
                      </button>
                    </span>
                  )}
                  {selectedExperience !== "All" && (
                    <span className="hstack gap-1 items-center px-3 py-1 rounded-full bg-primary/10 text-primary fs-7 fw-medium">
                      {selectedExperience}
                      <button onClick={() => setSelectedExperience("All")} className="hover:text-primary-dark">
                        <i className="icon icon-narrow unicon-close" />
                      </button>
                    </span>
                  )}
                  {selectedLocation !== "All" && (
                    <span className="hstack gap-1 items-center px-3 py-1 rounded-full bg-primary/10 text-primary fs-7 fw-medium">
                      {selectedLocation}
                      <button onClick={() => setSelectedLocation("All")} className="hover:text-primary-dark">
                        <i className="icon icon-narrow unicon-close" />
                      </button>
                    </span>
                  )}
                  {remoteOnly && (
                    <span className="hstack gap-1 items-center px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 fs-7 fw-medium">
                      Remote Only
                      <button onClick={() => setRemoteOnly(false)} className="hover:text-green-700">
                        <i className="icon icon-narrow unicon-close" />
                      </button>
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Job Listings */}
            <div 
              className="panel vstack gap-4"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 300});"
            >
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <JobCard key={job.id} job={job} onApply={handleApply} />
                ))
              ) : (
                <div className="panel vstack items-center justify-center gap-4 py-12 text-center">
                  <div className="w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <i className="icon icon-2 unicon-search text-gray-400" />
                  </div>
                  <div className="vstack gap-2">
                    <h4 className="h5 m-0">No jobs found</h4>
                    <p className="fs-6 text-dark dark:text-white text-opacity-60 m-0 max-w-sm">
                      We couldn't find any jobs matching your criteria. Try adjusting your filters or search terms.
                    </p>
                  </div>
                  <button
                    onClick={clearFilters}
                    className="btn btn-md btn-primary text-white mt-2"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Application Modal */}
      <ApplicationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        job={selectedJob}
      />
    </div>
  );
}
