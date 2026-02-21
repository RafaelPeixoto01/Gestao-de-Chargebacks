import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, XCircle, FileText, AlertTriangle } from 'lucide-react';
import { mockChargebacks } from '../../services/mockData';
import './Detail.css';

export function ChargebackDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    // Fake fetch by id
    const dispute = mockChargebacks.find(cb => cb.id === id) || mockChargebacks[0];

    return (
        <div className="detail-container">
            <button className="back-button" onClick={() => navigate(-1)}>
                <ArrowLeft size={18} />
                <span>Voltar para Disputas</span>
            </button>

            <div className="detail-header">
                <div>
                    <div className="title-row">
                        <h1 className="page-title">Disputa {dispute.id}</h1>
                        <span className={`status-badge ${dispute.status === 'Pendente' ? 'badge-warning' : 'badge-accent'}`}>
                            {dispute.status}
                        </span>
                    </div>
                    <p className="page-subtitle">Recebido em {new Date(dispute.date).toLocaleDateString('pt-BR')} • {dispute.merchantName}</p>
                </div>
                <div className="header-actions">
                    <button className="btn btn-outline">Ver Histórico</button>
                </div>
            </div>

            <div className="detail-grid">
                <div className="detail-main">
                    {dispute.actionRequired && (
                        <div className="decision-card">
                            <div className="decision-header">
                                <div className="decision-icon">
                                    <AlertTriangle size={24} className="text-warning" />
                                </div>
                                <div>
                                    <h3 className="decision-title">Motor de Decisão KOIN</h3>
                                    <p className="decision-desc">Análise baseada no histórico do cliente e regras da bandeira.</p>
                                </div>
                            </div>

                            <div className="decision-body">
                                <div className="score-display">
                                    <div className="score-circle">
                                        <svg viewBox="0 0 36 36" className="circular-chart warning">
                                            <path className="circle-bg"
                                                d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                                            />
                                            <path className="circle"
                                                strokeDasharray={`${dispute.score}, 100`}
                                                d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                                            />
                                        </svg>
                                        <div className="score-value">{dispute.score}%</div>
                                    </div>
                                    <div className="score-label">Probabilidade de Vitória</div>
                                </div>

                                <div className="recommendation">
                                    <h4>Recomendação: <span className="text-warning">DISPUTAR</span></h4>
                                    <ul className="reasons-list">
                                        <li><CheckCircle size={14} className="text-success" /> Histórico limpo do comprador na rede Koin</li>
                                        <li><CheckCircle size={14} className="text-success" /> Entrega confirmada com assinatura via transportadora</li>
                                        <li><CheckCircle size={14} className="text-success" /> Device ID e IP sem anomalias conhecidas</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="decision-actions">
                                <button className="btn btn-primary btn-large w-full">Gerar Evidências e Disputar</button>
                                <button className="btn btn-outline btn-large w-full">Aceitar Perda</button>
                            </div>
                        </div>
                    )}

                    <div className="info-card">
                        <h3 className="section-title">Detalhes da Transação</h3>
                        <div className="info-grid">
                            <div className="info-group">
                                <span className="info-label">Valor</span>
                                <span className="info-value text-accent font-semibold">
                                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(dispute.amount)}
                                </span>
                            </div>
                            <div className="info-group">
                                <span className="info-label">Motivo (Reason Code)</span>
                                <span className="info-value">10.4 - Outras Fraudes</span>
                            </div>
                            <div className="info-group">
                                <span className="info-label">Bandeira</span>
                                <span className="info-value">Mastercard</span>
                            </div>
                            <div className="info-group">
                                <span className="info-label">Cartão</span>
                                <span className="info-value">•••• 4567</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="detail-sidebar">
                    <div className="info-card">
                        <h3 className="section-title">Evidências Disponíveis</h3>
                        <p className="text-muted text-sm mb-4">Arquivos extraídos automaticamente dos sistemas Koin.</p>

                        <div className="document-list">
                            <div className="document-item">
                                <FileText size={16} className="text-accent" />
                                <span className="doc-name">resumo_transacao.pdf</span>
                            </div>
                            <div className="document-item">
                                <FileText size={16} className="text-accent" />
                                <span className="doc-name">comprovante_entrega.jpg</span>
                            </div>
                            <div className="document-item">
                                <FileText size={16} className="text-accent" />
                                <span className="doc-name">analise_antifraude.pdf</span>
                            </div>
                        </div>

                        <button className="btn btn-outline w-full mt-4">Adicionar Documento</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
