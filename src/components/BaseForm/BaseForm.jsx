import React, { useState} from 'react';

export default function BaseForm ([fields, onSubmit, initialValues]) {
    const [formData, setFormData] = useState(
        fields.reduce((acc, field) => {
            acc[field.name] = initialValues[field.name] || '';
            return acc;
        }, {})
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

    return()
}