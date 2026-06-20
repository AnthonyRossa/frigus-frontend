import { Link } from "react-router-dom";
import './Dashboard.css';

export default function Dashboard() {
  return (
    <div className="dashboard">
      <h2 className="dashboard__title">Painel</h2>
      <Link to="/temperature-control" className="dashboard__item-link">
      <div className="dashboard__item">Controle de Temperaturas de Câmaras e Salas</div>
      </Link>
    </div>
  );
}
