import React, { useState } from "react";
import "./TempControl.css";

export default function TempControl() {
  const [formData, setFormData] = useState({
    room: "",
    temperature: "",
    observations: "",
  });
  const [submissions, setSubmissions] = useState([]);

  const rooms = [
    "Câmara de Resfriados",
    "Câmara de Congelados",
    "Sala da Industrialização",
    "Rotulagem e Expedição",
    "Desossa",
    "Câmara de Carcaças",
    "Câmara de Massas",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.room && formData.temperature) {
      const now = new Date();
      setSubmissions((prev) => [
        ...prev,
        {
          ...formData,
          id: Date.now(),
          timestamp: now.toLocaleString("pt-BR"),
        },
      ]);
      setFormData({
        room: "",
        temperature: "",
        observations: "",
      });
    }
  };

  return (
    <div className="temp-control">
      <h2 className="temp-control__title">Controle de Temperaturas</h2>
      <form className="temp-control__form" onSubmit={handleSubmit}>
        <label className="temp-control__form-label" htmlFor="room-select">
          Selecione a câmara ou sala:
        </label>
        <select
          className="temp-control__form-input"
          id="room-select"
          name="room"
          value={formData.room}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            -- Selecione uma opção --
          </option>
          {rooms.map((room) => (
            <option key={room} value={room}>
              {room}
            </option>
          ))}
        </select>
        <label className="temp-control__form-label" htmlFor="temperature-input">
          Temperatura Atual:
        </label>
        <input
          className="temp-control__form-input"
          type="number"
          autoComplete="off"
          name="temperature"
          min="-200"
          max="100"
          step="0.1"
          id="temperature-input"
          value={formData.temperature}
          onChange={handleChange}
          required
        />
        <label className="temp-control__form-label" htmlFor="observations-input">
          Observações:
        </label>
        <textarea
          className="temp-control__form-input"
          id="observations-input"
          name="observations"
          rows="4"
          cols="50"
          maxLength="100"
          value={formData.observations}
          onChange={handleChange}
        />
        <button className="temp-control__form-button" type="submit">
          Registrar Temperatura
        </button>
      </form>

      {submissions.length > 0 && (
        <div className="temp-control__submissions">
          <h3 className="temp-control__submissions-title">Registros:</h3>
          {submissions.map((submission) => (
            <div key={submission.id} className="temp-control__submission-item">
              <p><strong>Data/Hora:</strong> {submission.timestamp}</p>
              <p><strong>Câmara:</strong> {submission.room}</p>
              <p><strong>Temperatura:</strong> {submission.temperature}°C</p>
              {submission.observations && (
                <p><strong>Observações:</strong> {submission.observations}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
