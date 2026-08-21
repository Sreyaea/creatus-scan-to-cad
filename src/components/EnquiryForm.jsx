import { useState } from 'react';
import { Upload, X, Lock, ShieldCheck } from 'lucide-react';
import '../styles/EnquiryForm.css';

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comments: '',
    file: null
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [dragActive, setDragActive] = useState(false);

  const validateName = (name) => {
    return /^[A-Za-z\s]{2,50}$/.test(name.trim());
  };

  const validateEmail = (email) => {
    const re =
    /^[A-Za-z0-9](?:[A-Za-z0-9._%+-]*[A-Za-z0-9])?@[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?(?:\.[A-Za-z]{2,})+$/;
    return re.test(email.trim());
  };

  const validatePhone = (phone) => {
    const cleanedPhone = phone.replace(/[\s-]/g, '');

    return /^(?:\+91|91)?[6-9]\d{9}$/.test(cleanedPhone);
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (!validateName(formData.name)) {
      newErrors.name = 'Please enter a valid name';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setDragActive(false);

    const files = e.dataTransfer.files;

    if (files && files[0]) {
      setFormData(prev => ({
        ...prev,
        file: files[0]
      }));
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        file: e.target.files[0]
      }));
    }
  };

  const removeFile = () => {
    setFormData(prev => ({
      ...prev,
      file: null
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setSubmitted(true);

      // Reset form after 5 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          comments: '',
          file: null
        });

        setSubmitted(false);
      }, 5000);
    }
  };

  if (submitted) {
    return (
      <section className="enquiry-form" id="enquiry-form">
        <div className="enquiry-form-container">
          <div className="enquiry-form-card">
            <div className="success-message">
              <div className="success-icon">✓</div>

              <h2>Thank you for your enquiry!</h2>

              <p className="success-main">
                Your enquiry has been received. Our team will get back to you shortly.
              </p>

              <div className="success-info">
                <div className="trust-item">
                  <Lock size={16} />
                  <span>
                    Your information is secure and will not be shared.
                  </span>
                </div>

                <div className="trust-item">
                  <ShieldCheck size={16} />
                  <span>
                    We typically respond within one business day.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="enquiry-form" id="enquiry-form">
      <div className="enquiry-form-container">
        <div className="enquiry-form-card">
          <h2 className="enquiry-form-title">Request an Enquiry</h2>

          <form onSubmit={handleSubmit} className="enquiry-form-content">

            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name *
              </label>

              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`form-input ${
                  errors.name ? 'form-input-error' : ''
                }`}
                placeholder="Your full name"
                maxLength={50}
                autoComplete="name"
              />

              {errors.name && (
                <span className="form-error">
                  {errors.name}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email *
              </label>

              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`form-input ${
                  errors.email ? 'form-input-error' : ''
                }`}
                placeholder="your@email.com"
                autoComplete="email"
              />

              {errors.email && (
                <span className="form-error">
                  {errors.email}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Phone *
              </label>

              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`form-input ${
                  errors.phone ? 'form-input-error' : ''
                }`}
                placeholder="+91 XXXXX XXXXX"
                maxLength={15}
                autoComplete="tel"
              />

              {errors.phone && (
                <span className="form-error">
                  {errors.phone}
                </span>
              )}
            </div>

            <div className="form-group">
              <label className="form-label">
                File Upload (optional)
              </label>

              <div
                className={`file-upload-area ${
                  dragActive ? 'active' : ''
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                {formData.file ? (
                  <div className="file-selected">
                    <div className="file-info">
                      <p className="file-name">
                        {formData.file.name}
                      </p>

                      <p className="file-size">
                        {(formData.file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={removeFile}
                      className="file-remove"
                      title="Remove file"
                    >
                      <X size={18} />
                    </button>
                  </div>
                ) : (
                  <>
                    <Upload size={32} />

                    <p className="file-upload-text">
                      Drag and drop your file here, or click to browse
                    </p>

                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="file-input"
                    />
                  </>
                )}
              </div>
            </div>

            <div className="form-group">
              <label
                htmlFor="comments"
                className="form-label"
              >
                Comments (optional)
              </label>

              <textarea
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                className="form-textarea"
                placeholder="Tell us about your project..."
                rows="4"
              />
            </div>

            <button
              type="submit"
              className="form-submit"
            >
              SUBMIT ENQUIRY →
            </button>

            <div className="form-trust-message">
              <div className="trust-item">
                <Lock size={16} />
                <span>
                  Your information is secure and will not be shared.
                </span>
              </div>

              <div className="trust-item">
                <ShieldCheck size={16} />
                <span>
                  We typically respond within one business day.
                </span>
              </div>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}
