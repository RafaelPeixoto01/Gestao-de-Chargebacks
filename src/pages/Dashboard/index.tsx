import React from 'react';
import './Dashboard.css';
import { mockMetrics, mockChargebacks } from '../../services/mockData';
import { TrendingUp, TrendingDown, Clock, CheckCircle, XCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Dashboard() {
    const navigate = useNavigate();

    const getStatusIcon = (status: string) => {
        switch (status) {
            case "Pendente": return <Clock size={16} className="text-warning" />;
            case "Respondido": return <CheckCircle size={16} className="text-accent" />;
            case "Ganho": return <CheckCircle size={16} className="text-success" />;
            case "Perdido": return <XCircle size={16} className="text-danger" />;
            default: return null;
        }
    };

    const getStatusClass = (status: string) => {
        switch (status) {
            case "Pendente": return "badge-warning";
            case "Respondido": return "badge-accent";
            case "Ganho": return "badge-success";
            case "Perdido": return "badge-danger";
            default: return "";
        }
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <div>
                    <h1 className="page-title">Pesquisa de caso</h1>
                    <p className="page-subtitle">Filtre os casos usando a pesquisa abaixo</p>
                </div>
            </div>

            <div className="metrics-wrapper">
                <div className="metrics-grid">
                    {mockMetrics.map((metric, idx) => (
                        <div key={idx} className="metric-card">
                            <h3 className="metric-title">{metric.title}</h3>
                            <div className="metric-value-container">
                                <span className="metric-value">{metric.value}</span>
                                {metric.trend && (
                                    <div className={`metric-trend ${metric.trend === 'up' ? 'trend-up' : 'trend-down'}`}>
                                        {metric.trend === 'up' ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                                        <span>{metric.trendValue}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="table-container">
                <div className="table-header">
                    <h2 className="section-title">Disputas Recentes</h2>
                    <div className="table-actions" style={{ marginLeft: "auto" }}>
                        <select className="input-text" style={{ width: '200px' }}>
                            <option>Todos os status</option>
                            <option>Pendente</option>
                            <option>Respondido</option>
                        </select>
                    </div>
                </div>

                <table className="data-table">
                    <thead>
                        <tr>
                            <th>ID da Disputa</th>
                            <th>Estabelecimento</th>
                            <th>Data</th>
                            <th>Valor</th>
                            <th>Status</th>
                            <th>Ação / Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockChargebacks.map((cb) => (
                            <tr
                                key={cb.id}
                                onClick={() => navigate(`/chargeback/${cb.id}`)}
                                className="clickable-row"
                            >
                                <td className="font-medium">{cb.id}</td>
                                <td>{cb.merchantName}</td>
                                <td>{new Date(cb.date).toLocaleDateString('pt-BR')}</td>
                                <td className="font-semibold">
                                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(cb.amount)}
                                </td>
                                <td>
                                    <div className={`status-badge ${getStatusClass(cb.status)}`}>
                                        {getStatusIcon(cb.status)}
                                        <span>{cb.status}</span>
                                    </div>
                                </td>
                                <td>
                                    {cb.actionRequired && cb.score ? (
                                        <div className="action-required-cell">
                                            <div className="score-indicator">
                                                <div className="score-bar-bg">
                                                    <div
                                                        className={`score-bar-fill ${cb.score >= 70 ? 'bg-success' : 'bg-warning'}`}
                                                        style={{ width: `${cb.score}%` }}
                                                    ></div>
                                                </div>
                                                <span className="score-text">{cb.score}% Win </span>
                                            </div>
                                            <button className="btn btn-sm btn-outline">Analisar</button>
                                        </div>
                                    ) : (
                                        <span className="text-muted">Nenhuma</span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
