import React, { useState } from "react";
import './TempControl.css'
import BaseForm from "../BaseForm/BaseForm";

export default function TempControl() {
    const [submissions, setSubmissions] = useState([]);

  const formFields = [
    {
      name: "room",
      label: "Selecione a câmara ou sala:",
      type: "select",
      required: true,
      options: [
        "Câmara de Resfriados",
        "Câmara de Congelados",
        "Sala da Industrialização",
        "Rotulagem e Expedição",
        "Desossa",
        "Câmara de Carcaças",
        "Câmara de Massas",
      ].map((room) => ({ value: room, label: room })),
    },
    {
      name: "temperature",
      label: "Temperatura Atual:",
      type: "number",
      required: true,
      placeholder: "Ex: -18.5",
      min: -200,
      max: 100,
      step: 0.1,
    },
    {
      name: "observations",
      label: "Observações:",
      type: "textarea",
      placeholder: "Digite observações aqui...",
      maxLength: 100,
    },
  ];

  const handleFormSubmit = (data) => {
    if (!data.room || !data.temperature) return;

    const now = new Date();
    const newSubmission = {
      ...data,
      id: Date.now(),
      timestamp: now.toLocaleString("pt-BR"),
    };

    setSubmissions((prev) => [...prev, newSubmission]);
    
    console.log("Novo registro:", newSubmission);
  };

  return (
    <div className="temp-control">
      <h2 className="temp-control__title">Controle de Temperaturas</h2>
      
      <div className="temp-control__form-wrapper">
        <BaseForm
          fields={formFields}
          onSubmit={handleFormSubmit}
        />
      </div>

      {submissions.length > 0 && (
        <div className="temp-control__submissions">
          <h3 className="temp-control__submissions-title">Registros:</h3>
          {submissions.map((submission) => (
            <div key={submission.id} className="temp-control__submission-item">
              <p>
                <strong>Sala/Câmara:</strong> {submission.room}
              </p>
              <p>
                <strong>Data/Hora:</strong> {submission.timestamp}
              </p>
              <p>
                <strong>Temperatura:</strong> {submission.temperature}°C
              </p>
              {submission.observations && (
                <p>
                  <strong>Observações:</strong> {submission.observations}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}