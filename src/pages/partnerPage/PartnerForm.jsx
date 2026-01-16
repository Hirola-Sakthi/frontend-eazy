import React, { useEffect, useState, useRef } from "react";

const defaultForm = {
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
  portfolioFileName: "",
  acceptTerms: false,
};

const ALL_PRODUCTS = [
  "CRM",
  "HRMS",
  "Accounting",
  "POS",
  "Inventory",
  "ERP",
  "AI Tools",
];

const PARTNER_TYPES = [
  "Reseller",
  "Technology Integration",
  "Consulting / Implementation",
  "Affiliate",
  "OEM / White-label",
];

export function PartnerForm() {
  const [form, setForm] = useState(() => {
    try {
      const raw = localStorage.getItem("partnerApplicationDraft");
      return raw ? JSON.parse(raw) : defaultForm;
    } catch (e) {
      return defaultForm;
    }
  });

  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [uploadFile, setUploadFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(null);
  const autoSaveRef = useRef(null);

  useEffect(() => {
    if (autoSaveRef.current) clearTimeout(autoSaveRef.current);
    autoSaveRef.current = setTimeout(() => {
      localStorage.setItem("partnerApplicationDraft", JSON.stringify(form));
    }, 500);
    return () => clearTimeout(autoSaveRef.current);
  }, [form]);

  useEffect(() => {
    if (submitSuccess) localStorage.removeItem("partnerApplicationDraft");
  }, [submitSuccess]);

  function updateField(name, value) {
    setForm((s) => ({ ...s, [name]: value }));
  }

  function toggleArrayField(name, value) {
    setForm((s) => {
      const setv = new Set(s[name] || []);
      if (setv.has(value)) setv.delete(value);
      else setv.add(value);
      return { ...s, [name]: Array.from(setv) };
    });
  }

  function validate(s) {
    const e = {};
    if (s === 1) {
      if (!form.fullName) e.fullName = "Full name required";
      if (!form.email) e.email = "Email required";
      else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = "Invalid email";
      if (!form.phone) e.phone = "Phone required";
    }
    if (s === 2) {
      if (!form.companyName) e.companyName = "Company name required";
    }
    if (s === 3) {
      if (!form.partnerTypes || form.partnerTypes.length === 0) e.partnerTypes = "Select a partner type";
    }
    if (s === 6) {
      if (!form.acceptTerms) e.acceptTerms = "Accept terms to continue";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function next() {
    if (validate(step)) setStep((p) => Math.min(6, p + 1));
  }
  function prev() {
    setStep((p) => Math.max(1, p - 1));
  }

  function onFileChange(e) {
    const f = e.target.files[0];
    if (!f) return;
    setUploadFile(f);
    setForm((s) => ({ ...s, portfolioFileName: f.name }));
  }

  async function submit(e) {
    e.preventDefault();
    if (!validate(6)) return;
    setSubmitting(true);
    setErrors({});
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => {
        if (Array.isArray(v)) fd.append(k, JSON.stringify(v));
        else fd.append(k, v === undefined || v === null ? "" : v);
      });
      if (uploadFile) fd.append("portfolio", uploadFile);

      const res = await fetch("/api/partners", { method: "POST", body: fd });
      if (!res.ok) throw new Error("Network error");
      setSubmitSuccess(true);
    } catch (err) {
      setSubmitSuccess(false);
      setErrors({ submit: err.message || "Submit failed" });
    } finally {
      setSubmitting(false);
    }
  }

  const progress = Math.round(((step - 1) / (6 - 1)) * 100);

  return (
    <div id="partner-form" className="partner-form section panel">
      <div className="section-outer panel py-4 md:py-6 xl:py-8">
        <div className="container xl:max-w-xl">
          <div className="section-inner panel">
            <div className="panel border rounded-1-5 p-4 bg-white/04">
              <div className="vstack gap-3">
                <div className="hstack justify-between items-center">
                  <div className="fs-7 fw-bold">Apply to become a partner</div>
                  <div className="fs-8 text-opacity-70">
                    Step {step} of 6 — {progress}%
                  </div>
                </div>

                <form onSubmit={submit}>
                  {/* Step 1: Contact */}
                  {step === 1 && (
                    <div className="panel p-2">
                      <div className="row child-cols-12 md:child-cols-6 g-2">
                        <div className="col">
                          <label className="fs-8">Full name</label>
                          <input
                            className="form-control"
                            name="fullName"
                            value={form.fullName}
                            onChange={(e) => updateField("fullName", e.target.value)}
                          />
                          {errors.fullName && <div className="fs-9 text-rose">{errors.fullName}</div>}
                        </div>

                        <div className="col">
                          <label className="fs-8">Email</label>
                          <input className="form-control" name="email" value={form.email} onChange={(e) => updateField("email", e.target.value)} />
                          {errors.email && <div className="fs-9 text-rose">{errors.email}</div>}
                        </div>

                        <div className="col">
                          <label className="fs-8">Phone</label>
                          <input className="form-control" name="phone" value={form.phone} onChange={(e) => updateField("phone", e.target.value)} />
                          {errors.phone && <div className="fs-9 text-rose">{errors.phone}</div>}
                        </div>

                        <div className="col">
                          <label className="fs-8">Role</label>
                          <input className="form-control" name="role" value={form.role} onChange={(e) => updateField("role", e.target.value)} />
                        </div>
                      </div>

                      <div className="hstack justify-end gap-2 mt-3">
                        <button type="button" className="btn btn-sm btn-primary" onClick={next}>
                          Next
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Company */}
                  {step === 2 && (
                    <div className="panel p-2">
                      <div className="row child-cols-12 md:child-cols-6 g-2">
                        <div className="col">
                          <label className="fs-8">Company name</label>
                          <input className="form-control" value={form.companyName} onChange={(e) => updateField("companyName", e.target.value)} />
                          {errors.companyName && <div className="fs-9 text-rose">{errors.companyName}</div>}
                        </div>

                        <div className="col">
                          <label className="fs-8">Website</label>
                          <input className="form-control" value={form.website} onChange={(e) => updateField("website", e.target.value)} />
                        </div>

                        <div className="col">
                          <label className="fs-8">Country</label>
                          <input className="form-control" value={form.country} onChange={(e) => updateField("country", e.target.value)} />
                        </div>

                        <div className="col">
                          <label className="fs-8">Year established</label>
                          <input
                            className="form-control"
                            type="number"
                            value={form.yearEstablished}
                            onChange={(e) => updateField("yearEstablished", e.target.value)}
                          />
                        </div>

                        <div className="col">
                          <label className="fs-8">Company size</label>
                          <select className="form-control" value={form.companySize} onChange={(e) => updateField("companySize", e.target.value)}>
                            <option value="">Select</option>
                            <option>1-10</option>
                            <option>10-50</option>
                            <option>50-200</option>
                            <option>200+</option>
                          </select>
                        </div>

                        <div className="col">
                          <label className="fs-8">Annual revenue (optional)</label>
                          <input className="form-control" value={form.annualRevenue} onChange={(e) => updateField("annualRevenue", e.target.value)} />
                        </div>
                      </div>

                      <div className="hstack justify-between mt-3">
                        <button type="button" className="btn btn-sm btn-light" onClick={prev}>
                          Back
                        </button>
                        <button type="button" className="btn btn-sm btn-primary" onClick={next}>
                          Next
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Partner type */}
                  {step === 3 && (
                    <div className="panel p-2">
                      <label className="fs-8">Partner types (choose all that apply)</label>
                      <div className="row child-cols-12 md:child-cols-6 g-2 mt-2">
                        {PARTNER_TYPES.map((t) => (
                          <div key={t} className="col">
                            <button
                              type="button"
                              className={`panel p-2 rounded-1-5 ${form.partnerTypes.includes(t) ? "border-primary bg-white/06" : "border panel-bg"}`}
                              onClick={() => toggleArrayField("partnerTypes", t)}>
                              <div className="vstack gap-1">
                                <div className="fw-bold">{t}</div>
                                <div className="fs-8 text-opacity-70">{t === "Reseller" ? "Sell products to your customers" : ""}</div>
                              </div>
                            </button>
                          </div>
                        ))}
                      </div>

                      {form.partnerTypes.includes("Reseller") && (
                        <div className="mt-2">
                          <label className="fs-8">Target regions</label>
                          <input
                            className="form-control"
                            value={form.targetRegions || ""}
                            onChange={(e) => updateField("targetRegions", e.target.value)}
                            placeholder="E.g. APAC, North America"
                          />
                        </div>
                      )}

                      <div className="hstack justify-between mt-3">
                        <button type="button" className="btn btn-sm btn-light" onClick={prev}>
                          Back
                        </button>
                        <button type="button" className="btn btn-sm btn-primary" onClick={next}>
                          Next
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 4: Products */}
                  {step === 4 && (
                    <div className="panel p-2">
                      <label className="fs-8">Products of interest</label>
                      <div className="row child-cols-12 md:child-cols-6 lg:child-cols-3 g-2 mt-2">
                        {ALL_PRODUCTS.map((p) => (
                          <div key={p} className="col">
                            <button
                              type="button"
                              className={`panel p-2 rounded-1-5 ${form.products.includes(p) ? "border-primary bg-white/06" : "border panel-bg"}`}
                              onClick={() => toggleArrayField("products", p)}>
                              <div className="vstack gap-1">
                                <div className="fw-bold">{p}</div>
                                <div className="fs-8 text-opacity-70">{p === "AI Tools" ? "Advanced integrations" : ""}</div>
                              </div>
                            </button>
                          </div>
                        ))}
                      </div>

                      <div className="hstack justify-between mt-3">
                        <button type="button" className="btn btn-sm btn-light" onClick={prev}>
                          Back
                        </button>
                        <button type="button" className="btn btn-sm btn-primary" onClick={next}>
                          Next
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 5: Capability */}
                  {step === 5 && (
                    <div className="panel p-2">
                      <div className="row child-cols-12 md:child-cols-6 g-2">
                        <div className="col">
                          <label className="fs-8">Existing clients</label>
                          <input
                            className="form-control"
                            value={form.existingClients}
                            onChange={(e) => updateField("existingClients", e.target.value)}
                          />
                        </div>

                        <div className="col">
                          <label className="fs-8">Sales team</label>
                          <select className="form-control" value={form.salesTeam} onChange={(e) => updateField("salesTeam", e.target.value)}>
                            <option value="">Select</option>
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </div>

                        <div className="col">
                          <label className="fs-8">Technical team</label>
                          <select className="form-control" value={form.technicalTeam} onChange={(e) => updateField("technicalTeam", e.target.value)}>
                            <option value="">Select</option>
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </div>

                        <div className="col">
                          <label className="fs-8">Business model</label>
                          <div className="vstack gap-2 mt-1">
                            {["Consultation", "Reselling", "Implementation", "Support services"].map((m) => (
                              <label key={m} className="hstack gap-2 items-center">
                                <input
                                  type="checkbox"
                                  checked={form.businessModel.includes(m)}
                                  onChange={() => toggleArrayField("businessModel", m)}
                                />
                                <span className="fs-8">{m}</span>
                              </label>
                            ))}
                          </div>
                        </div>

                        <div className="col">
                          <label className="fs-8">LinkedIn / Profile</label>
                          <input className="form-control" value={form.linkedin} onChange={(e) => updateField("linkedin", e.target.value)} />
                        </div>

                        <div className="col">
                          <label className="fs-8">Upload portfolio</label>
                          <input type="file" className="form-control" onChange={onFileChange} />
                          {form.portfolioFileName && <div className="fs-9 text-muted">Selected: {form.portfolioFileName}</div>}
                        </div>
                      </div>

                      <div className="hstack justify-between mt-3">
                        <button type="button" className="btn btn-sm btn-light" onClick={prev}>
                          Back
                        </button>
                        <button type="button" className="btn btn-sm btn-primary" onClick={next}>
                          Next
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 6: Agreement */}
                  {step === 6 && (
                    <div className="panel p-2">
                      <div className="vstack gap-2">
                        <label className="hstack gap-2 items-center">
                          <input type="checkbox" checked={form.acceptTerms} onChange={(e) => updateField("acceptTerms", e.target.checked)} />
                          <span className="fs-8">
                            I accept the{" "}
                            <a href="#" className="uc-link">
                              Partner Terms
                            </a>{" "}
                            and{" "}
                            <a href="#" className="uc-link">
                              Privacy Policy
                            </a>
                            .
                          </span>
                        </label>
                        {errors.acceptTerms && <div className="fs-9 text-rose">{errors.acceptTerms}</div>}

                        {errors.submit && <div className="fs-9 text-rose">{errors.submit}</div>}

                        <div className="hstack justify-between mt-3">
                          <button type="button" className="btn btn-sm btn-light" onClick={prev}>
                            Back
                          </button>
                          <div className="hstack gap-2">
                            <button type="submit" disabled={submitting} className="btn btn-sm btn-primary">
                              {submitting ? "Submitting..." : "Submit application"}
                            </button>
                          </div>
                        </div>

                        {submitSuccess === true && (
                          <div className="fs-9 text-success">Application submitted — we'll contact you within 3 business days.</div>
                        )}
                        {submitSuccess === false && <div className="fs-9 text-rose">Submission failed. Try again later.</div>}
                      </div>
                    </div>
                  )}
                </form>

                <div className="fs-9 text-muted mt-2">Progress is auto-saved locally. You can complete the form later.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
