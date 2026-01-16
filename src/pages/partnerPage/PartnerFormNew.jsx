import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { backendUrl } from "@/backendUrl";
import { GraduationCap, Plug, Trophy } from "lucide-react";

export default function PartnerFormNew() {
  const initialData = {
    fullName: "",
    email: "",
    phone: "",
    role: "",
    companyName: "",
    website: "",
    country: "",
    yearEstablished: "",
    companySize: "",
    annualRevenue: "",
    industry: [],
    partnerTypes: [],
    products: [],
    existingClients: "",
    salesTeam: "",
    technicalTeam: "",
    businessModel: [],
    linkedin: "",
    acceptTerms: false,
  };

  const [data, setData] = useState(() => {
    try {
      const raw = localStorage.getItem("partnerApplicationDraft");
      return raw ? JSON.parse(raw) : initialData;
    } catch (e) {
      return initialData;
    }
  });

  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(null);
  const autoSaveTimer = useRef(null);

  useEffect(() => {
    // Auto-save debounce
    if (autoSaveTimer.current) clearTimeout(autoSaveTimer.current);
    autoSaveTimer.current = setTimeout(() => {
      localStorage.setItem("partnerApplicationDraft", JSON.stringify(data));
    }, 600);

    return () => {
      if (autoSaveTimer.current) clearTimeout(autoSaveTimer.current);
    };
  }, [data]);

  useEffect(() => {
    // clear draft on success
    if (submitSuccess) localStorage.removeItem("partnerApplicationDraft");
  }, [submitSuccess]);

  const allProducts = [
    "CRM",
    "HRMS",
    "Accounting",
    "POS",
    "Inventory",
    "ERP",
    "AI Tools",
  ];

  const partnerTypeOptions = [
    "Reseller",
    "Technology Integration",
    "Consulting / Implementation",
    "Affiliate",
    "OEM / White-label",
  ];

  const industryOptions = [
    "Retail",
    "Healthcare",
    "Finance",
    "Manufacturing",
    "Education",
    "Hospitality",
    "Other",
  ];

  // Basic inline validation per-step
  function validateStep(s) {
    const e = {};
    if (s === 1) {
      if (!data.fullName) e.fullName = "Full name is required";
      if (!data.email) e.email = "Email is required";
      else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email))
        e.email = "Email is invalid";
      if (!data.phone) e.phone = "Phone number is required";
    }
    if (s === 2) {
      if (!data.companyName) e.companyName = "Company name is required";
      if (!data.website) e.website = "Website is recommended";
    }
    if (s === 3) {
      if (!data.partnerTypes || data.partnerTypes.length === 0)
        e.partnerTypes = "Select at least one partner type";
    }
    if (s === 6) {
      if (!data.acceptTerms) e.acceptTerms = "You must accept partner terms";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function nextStep() {
    if (validateStep(step)) setStep((p) => Math.min(6, p + 1));
  }

  function prevStep() {
    setStep((p) => Math.max(1, p - 1));
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox" && name === "acceptTerms") {
      setData((d) => ({ ...d, [name]: checked }));
      return;
    }
    setData((d) => ({ ...d, [name]: value }));
  }

  function toggleMulti(name, value) {
    setData((d) => {
      const arr = new Set(d[name]);
      if (arr.has(value)) arr.delete(value);
      else arr.add(value);
      return { ...d, [name]: Array.from(arr) };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validateStep(6)) return;
    setSubmitting(true);
    setErrors({});

    try {
      const form = new FormData();
      Object.entries(data).forEach(([k, v]) => {
        if (Array.isArray(v)) form.append(k, JSON.stringify(v));
        else form.append(k, v === null || v === undefined ? "" : v);
      });

      const resp = await fetch(`${backendUrl}/api/v1/website/partners`, {
        method: "POST",
        body: form,
      });

      console.log("Submit response:", resp);

      if (!resp.ok) {
        const text = await resp.text();
        throw new Error(text || "Failed to submit");
      }

      setSubmitSuccess(true);
      localStorage.removeItem("partnerApplicationDraft");
    } catch (err) {
      console.error(err);
      setSubmitSuccess(false);
      setErrors({ submit: err.message || "Submit failed" });
    } finally {
      setSubmitting(false);
    }
  }

  // Progress percentage
  const progress = Math.round(((step - 1) / (6 - 1)) * 100);

  return (
    <div
      id="partner-form"
      className="min-h-screen w-full flex items-center justify-center p-3"
      style={{
        background: "linear-gradient(135deg, #1338be, #2a2a72)",
      }}
    >
      <div className="max-w-6xl lg:py-6 lg:px-6 w-full bg-white/5 backdrop-blur-md rounded-2 shadow-2xl overflow-hidden border border-white/10">
        <div className="panel row child-cols-12 lg:child-cols">
          {/* Left visual / pitch */}
          <div className="p-8 md:p-6 lg:p-6 text-white">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
                Partner with Us
              </h1>
              <p className="mt-4 text-white/90">
                Grow your business by joining our partner network — access
                market-leading software products, dedicated support, and
                co-marketing opportunities.
              </p>

              <div className="mt-8 vstack row child-cols-12 lg:child-cols gap-4">
                {/* <div className="hstack items-start gap-3"> */}
                {/* <div className="w-10 h-10 rounded-3 bg-white/10 row items-center justify-center"> */}
                {/* <TrophyIcon size={20} color="#000" fill="#000" /> */}
                {/* </div> */}
                {/* <div>
                    <p className="fs-5 fw-bold">Competitive commissions</p>
                    <p className="fs-7 mt-0 text-white/80">
                      Earn recurring revenue
                    </p>
                  </div>
                </div> */}

                <div className="hstack items-start gap-3">
                  <div className=" rounded-lg bg-white/10 row items-center justify-center icon-box w-48px h-48px rounded-1-5 cstack grey-gradient">
                    <Trophy size={22} color="#213092" />
                  </div>
                  <div>
                    <p className="fs-5 fw-bold">Competitive commissions</p>
                    <p className="fs-7 mt-0 text-white/80">
                      Earn recurring revenue
                    </p>
                  </div>
                </div>

                <div className="hstack items-start gap-3">
                  <div className=" rounded-lg bg-white/10 row items-center justify-center icon-box w-48px h-48px rounded-1-5 cstack grey-gradient">
                    <Plug size={22} color="#213092" />
                  </div>
                  <div>
                    <p className="fs-5 fw-bold">API & Integrations</p>
                    <p className="fs-7 mt-0 text-white/80">
                      Technical docs and sandbox access
                    </p>
                  </div>
                </div>

                <div className="hstack items-start gap-3">
                  <div className=" rounded-lg bg-white/10 row items-center justify-center icon-box w-48px h-48px rounded-1-5 cstack grey-gradient">
                    <GraduationCap size={22} color="#213092" />
                  </div>
                  <div>
                    <p className="fs-5 fw-bold">Certifications & Training</p>
                    <p className="fs-7 mt-0 text-white/80">
                      Partner-only learning paths
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={() => setStep(1)}
                  className="px-4 py-2 bg-white text-indigo-900 rounded-2 font-semibold shadow-sm"
                >
                  Apply Now
                </button>
              </div>

              <div className="mt-8 text-xs text-white/80">
                <p>
                  Already a partner?{" "}
                  <a href="#" className="underline policy-text">
                    Sign in
                  </a>
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: Form area */}
          <div className="sm:p-3 md:p-10 lg:p-12 bg-white/6">
            <div className="max-w-2xl mx-auto bg-white/5 rounded-xl p-1 md:p-8">
              {/* Progress */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-xs text-white/80">
                  <div className="text-white">Step {step} of 6</div>
                  <div className="text-white">{progress}%</div>
                </div>
                <div
                  className="w-full h-2 bg-white rounded-pill mt-2 overflow-hidden"
                  style={{ height: "4px" }}
                >
                  <div
                    className="h-full bg-linear from-indigo via-indigo to-white"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Step 1: Contact */}
                {step === 1 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <h3 className="text-lg font-semibold text-white">
                      Contact Details
                    </h3>
                    <p className="text-sm text-white mt-2">
                      Who should we reach out to?
                    </p>

                    <div className="mt-4 row child-cols-6 lg:child-cols-6">
                      <div>
                        <label className="text-xs text-white pt-1">
                          Full name
                        </label>
                        <input
                          name="fullName"
                          value={data.fullName}
                          onChange={handleChange}
                          className="w-full mt-1 p-1 rounded-default bg-white text-dark"
                        />
                        {errors.fullName && (
                          <p className="text-red text-xs mt-1">
                            {errors.fullName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="text-xs text-white">Email</label>
                        <input
                          name="email"
                          value={data.email}
                          onChange={handleChange}
                          type="email"
                          className="w-full mt-1 p-1 rounded-default bg-white text-dark"
                        />
                        {errors.email && (
                          <p className="text-red text-xs mt-1">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="text-xs text-white pt-2">Phone</label>
                        <input
                          name="phone"
                          value={data.phone}
                          onChange={handleChange}
                          className="w-full mt-1 p-1 rounded-default bg-white text-dark"
                        />
                        {errors.phone && (
                          <p className="text-red text-xs mt-1">
                            {errors.phone}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="text-xs text-white pt-2">Role</label>
                        <input
                          name="role"
                          value={data.role}
                          onChange={handleChange}
                          className="w-full mt-1 p-1 rounded-default bg-white text-dark"
                        />
                      </div>
                    </div>

                    <div className="mt-4 flex justify-end gap-2">
                      <button
                        type="button"
                        onClick={nextStep}
                        className="px-4 py-1 rounded-2 bg-indigo-600 text-dark"
                      >
                        Next
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Company info */}
                {step === 2 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <h3 className="text-lg font-semibold text-white">
                      Company Information
                    </h3>
                    <div className="mt-3 row child-cols-6 lg:child-cols-6 ">
                      <div>
                        <label className="text-xs text-white">
                          Company name
                        </label>
                        <input
                          name="companyName"
                          value={data.companyName}
                          onChange={handleChange}
                          className="w-full mt-1 p-1 rounded-default bg-white text-dark"
                        />
                        {errors.companyName && (
                          <p className="text-red text-xs mt-1">
                            {errors.companyName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="text-xs text-white">Website</label>
                        <input
                          name="website"
                          value={data.website}
                          onChange={handleChange}
                          className="w-full mt-1 p-1 rounded-default bg-white text-dark"
                        />
                      </div>

                      <div>
                        <label className="text-xs text-white pt-2">
                          Country
                        </label>
                        <input
                          name="country"
                          value={data.country}
                          onChange={handleChange}
                          className="w-full mt-1 p-1 rounded-default bg-white text-dark"
                        />
                      </div>

                      <div>
                        <label className="text-xs text-white pt-2">
                          Year Established
                        </label>
                        <input
                          name="yearEstablished"
                          value={data.yearEstablished}
                          onChange={handleChange}
                          type="text"
                          className="w-full mt-1 p-1 rounded-default bg-white text-dark"
                        />
                      </div>

                      <div>
                        <label className="text-xs text-white pt-2">
                          Company size
                        </label>
                        <select
                          name="companySize"
                          value={data.companySize}
                          onChange={handleChange}
                          className="w-full mt-1 p-1 rounded-default bg-white text-dark"
                        >
                          <option value="">Select</option>
                          <option value={"1-10"}>1-10</option>
                          <option value={"10-50"}>10-50</option>
                          <option value={"50-200"}>50-200</option>
                          <option value={"200+"}>200+</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-xs text-white pt-2">
                          Annual revenue (optional)
                        </label>
                        <input
                          name="annualRevenue"
                          value={data.annualRevenue}
                          onChange={handleChange}
                          className="w-full mt-1 p-1 rounded-default bg-white text-dark"
                        />
                      </div>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="px-2 py-1 rounded-2 bg-white text-dark"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={nextStep}
                        className="px-2 py-1 rounded-2 bg-indigo-600 text-dark"
                        style={{ marginLeft: "10px" }}
                      >
                        Next
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Partner Type */}
                {step === 3 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <h3 className="text-lg font-semibold text-white">
                      Partner Type
                    </h3>
                    <p className="text-sm text-white mt-2">
                      Choose all that apply
                    </p>

                    <div className="mt-4 row child-cols-6-45 lg:child-cols-6-45 gap-2">
                      {partnerTypeOptions.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => toggleMulti("partnerTypes", t)}
                          className={`p-1 text-left rounded-default border-full-white ${
                            data.partnerTypes.includes(t)
                              ? "border-full-white easy-main-gradient text-white"
                              : "border-white bg-white text-dark"
                          }`}
                        >
                          <div
                            className={`fw-bold text-dark ${
                              data.partnerTypes.includes(t)
                                ? "text-white"
                                : "text-dark"
                            }`}
                          >
                            {t}
                          </div>
                          {/* <div className={`fs-7 text-dark mt-1 ${data.partnerTypes.includes(t) ? "text-white" : "text-dark"}`}>{t === "Reseller" ? "Sell our products to your customers" : ""}</div> */}
                        </button>
                      ))}
                    </div>
                    {errors.partnerTypes && (
                      <p className="text-red text-xs mt-2">
                        {errors.partnerTypes}
                      </p>
                    )}

                    {/* conditional example */}
                    {data.partnerTypes.includes("Reseller") && (
                      <div className="mt-4">
                        <label className="text-xs text-white">
                          Target region(s)
                        </label>
                        <input
                          name="targetRegions"
                          onChange={handleChange}
                          className="w-full mt-1 p-1 rounded-default bg-white text-dark"
                          placeholder="E.g. APAC, North America"
                        />
                      </div>
                    )}

                    {data.partnerTypes.includes("Technology Integration") && (
                      <div className="mt-2">
                        <label className="text-xs text-white">
                          Need API access?
                        </label>
                        <select
                          name="needApi"
                          onChange={handleChange}
                          className="w-full mt-1 p-1 rounded-default bg-white text-dark"
                        >
                          <option value="">Select</option>
                          <option value={"Yes"}>Yes</option>
                          <option value={"No"}>No</option>
                        </select>
                      </div>
                    )}

                    <div className="mt-4 flex justify-between">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="px-4 py-1 rounded-2 bg-white text-dark"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={nextStep}
                        className="px-4 py-1 rounded-2 bg-indigo-600 text-dark"
                      >
                        Next
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Products of interest */}
                {step === 4 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <h3 className="text-lg font-semibold text-white">
                      Products of Interest
                    </h3>
                    <p className="text-sm text-white mt-2">
                      Select the software products you want to partner on
                    </p>

                    <div className="mt-4 row child-cols-3 lg:child-cols-3 gap-3">
                      {allProducts.map((p) => (
                        <button
                          key={p}
                          type="button"
                          onClick={() => toggleMulti("products", p)}
                          className={`p-2 rounded-default border-full-white text-white text-left ${
                            data.products.includes(p)
                              ? "border-full-white easy-main-gradient text-white"
                              : "border-white bg-white text-dark"
                          }`}
                        >
                          <div
                            className={`fw-bold text-dark ${
                              data.products.includes(p)
                                ? "border-indigo-400 easy-main-gradient text-white"
                                : "border-white bg-white text-dark"
                            }`}
                          >
                            {p}
                          </div>
                          {/* <div className="fs-7 text-dark mt-1">{p === "AI Tools" ? "Advanced integrations available" : ""}</div> */}
                        </button>
                      ))}
                    </div>

                    <div className="mt-4 flex justify-between">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="px-4 py-1 rounded-2 bg-white text-dark"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={nextStep}
                        style={{ marginLeft: "10px" }}
                        className="px-4 py-1 rounded-2 bg-indigo-600 text-dark"
                      >
                        Next
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 5: Business capability */}
                {step === 5 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <h3 className="text-lg font-semibold text-white">
                      Business Capability
                    </h3>

                    <div className="mt-3 row child-cols-6-45 lg:child-cols-6-45 gap-2">
                      <div>
                        <label className="text-xs text-white">
                          Number of existing clients
                        </label>
                        <input
                          name="existingClients"
                          value={data.existingClients}
                          onChange={handleChange}
                          className="w-full mt-1 p-1 rounded-2 bg-white/10 text-dark"
                        />
                      </div>

                      <div>
                        <label className="text-xs text-white">
                          Do you have a sales team?
                        </label>
                        <select
                          name="salesTeam"
                          value={data.salesTeam}
                          onChange={handleChange}
                          className="w-full mt-1 p-1 rounded-2 bg-white/10 text-dark"
                        >
                          <option value="">Select</option>
                          <option value={"Yes"}>Yes</option>
                          <option value={"No"}>No</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-xs text-white ">
                          Technical team available?
                        </label>
                        <select
                          name="technicalTeam"
                          value={data.technicalTeam}
                          onChange={handleChange}
                          className="w-full mt-1 p-1 rounded-2 bg-white text-dark"
                        >
                          <option value="">Select</option>
                          <option value={"Yes"}>Yes</option>
                          <option value={"No"}>No</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-xs text-white">
                          LinkedIn / Profile URL
                        </label>
                        <input
                          name="linkedin"
                          value={data.linkedin}
                          onChange={handleChange}
                          className="w-full mt-1 p-1 rounded-2 bg-white/10 text-dark"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-white pt-2">
                        Business model (pick all)
                      </label>
                      <div className="mt-2 row child-cols-6 lg:child-cols-6">
                        {[
                          "Consultation",
                          "Reselling",
                          "Implementation",
                          "Support services",
                        ].map((m) => (
                          <label
                            key={m}
                            className="flex items-center gap-2 text-white"
                          >
                            <input
                              type="checkbox"
                              checked={data.businessModel.includes(m)}
                              onChange={() => toggleMulti("businessModel", m)}
                            />
                            <span className="text-sm pl-10px">{m}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 flex justify-between">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="px-4 py-1 rounded-2 bg-white text-dark"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={nextStep}
                        style={{ marginLeft: "10px" }}
                        className="px-4 py-1 rounded-2 bg-indigo-600 text-dark"
                      >
                        Next
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 6: Agreement & submit */}
                {step === 6 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <h3 className="text-lg font-semibold text-white">
                      Agreement & Submit
                    </h3>

                    <div className="mt-3 text-white text-sm">
                      <p>
                        Please review our Partner Terms and Privacy Policy
                        before submitting.
                      </p>
                    </div>

                    <div className="mt-4">
                      <label className="flex items-center gap-3 text-white">
                        <input
                          type="checkbox"
                          name="acceptTerms"
                          checked={data.acceptTerms}
                          onChange={handleChange}
                        />
                        <span>
                          I have read and accept the{" "}
                          <a href="#" className="underline policy-text">
                            Partner Terms
                          </a>{" "}
                          and{" "}
                          <a href="#" className="underline policy-text">
                            Privacy Policy
                          </a>
                          .
                        </span>
                      </label>
                      {errors.acceptTerms && (
                        <p className="text-red text-xs mt-1">
                          {errors.acceptTerms}
                        </p>
                      )}
                    </div>

                    {errors.submit && (
                      <p className="text-red text-sm mt-2">{errors.submit}</p>
                    )}

                    <div className="mt-6 row gap-2 items-center">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="w-1/3 px-4 py-1 rounded-2 bg-white text-dark"
                      >
                        Back
                      </button>

                      {/* <div className="flex items-center gap-3"> */}
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-1/3 px-5 py-1 rounded-2 bg-white text-dark fw-bold"
                      >
                        {submitting ? "Submitting..." : "Submit Application"}
                      </button>
                      {/* </div> */}
                    </div>

                    {submitSuccess === true && (
                      <p className="text-white text-sm mt-3">
                        Application submitted — we will contact you in shortly.
                      </p>
                    )}
                    {submitSuccess === false && (
                      <p className="text-red text-sm mt-3">
                        There was an error submitting. Please try again later.
                      </p>
                    )}
                  </motion.div>
                )}
              </form>
            </div>

            <div className="mt-4 text-white text-xs text-center">
              We save progress locally. You can continue later.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
