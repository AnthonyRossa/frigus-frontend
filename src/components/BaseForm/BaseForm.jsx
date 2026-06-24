import React, { useState } from "react";
import './BaseForm.css'

export default function BaseForm({ fields, onSubmit, initialValues = {} }) {
  if (!fields) return null;

  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => {
      acc[field.name] = initialValues[field.name] || "";
      return acc;
    }, {}),
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="base-form">

      {fields.map((field) => (
        <div key={field.name} className="base-form__container">
          <label htmlFor={field.name} className="base-form__label">
            {field.label}
          </label>

          {field.type === "select" ? (
            <select
              id={field.name}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              required={field.required}
              className="base-form__input"
            >
              <option value="" disabled>
                Select an Option
              </option>
              {field.options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          ) : field.type === "number" ? (
            <input
              type="number"
              id={field.name}
              name={field.name}
              step={field.step}
              value={formData[field.name]}
              onChange={handleChange}
              required={field.required}
              placeholder={field.placeholder || "Enter number"}
              className="base-form__input"
            />
          ) : field.type === "textarea" ? (
            <textarea
              id={field.name}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              required={field.required}
              placeholder={field.placeholder || ""}
              maxLength={field.maxLength}
              rows={field.rows || 4}
              className="base-form__input"
            />
          ) : (
            <input
              type={field.type || "text"}
              id={field.name}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              required={field.required}
              placeholder={field.placeholder || ""}
              className="base-form__input"
            />
          )}
        </div>
      ))}

      <button type="submit" className="base-form__button">
        Submit
      </button>
    </form>
  );
}
