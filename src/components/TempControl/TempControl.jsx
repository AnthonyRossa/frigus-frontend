import React, { useState } from "react";
import "./TempControl.css";
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
      placeholder: "0.0",
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

    setSubmissions((prev) => [newSubmission, ...prev]);

    console.log("Novo registro:", newSubmission);
  };

  const renderSubmissionItem = (item) => {
    return (
      <>
        <p>
          <strong>Sala/Câmara:</strong> {item.room}
        </p>
        <p>
          <strong>Data/Hora:</strong> {item.timestamp}
        </p>
        <p>
          <strong>Temperatura:</strong>
          {Number(item.temperature).toLocaleString("pt-BR", {
            minimumFractionDigits: 1,
            maximumFractionDigits: 1,
          })}
          °C
        </p>
        {item.observations && (
          <p>
            <strong>Observações:</strong> {item.observations}
          </p>
        )}
      </>
    );
  };

  return (
    <div className="temp-control">
        <BaseForm
          fields={formFields}
          onSubmit={handleFormSubmit}
          submissions={submissions}
          renderSubmissionItem={renderSubmissionItem}
          title="Controle de Temperaturas"
        />
    </div>
  );
}
