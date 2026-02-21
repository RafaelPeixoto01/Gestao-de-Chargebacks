import React from 'react';
import './Sidebar.css';
import {
    Home,
    CreditCard,
    BarChart2,
    Settings,
    HelpCircle,
    LogOut
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

export function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                {/* Koin Logo Placeholder */}
                <div className="logo-container">
                    <div className="logo-icon">k</div>
                    <span className="logo-text">koin</span>
                    <span className="logo-badge">Anti-fraud</span>
                </div>
            </div>

            <nav className="sidebar-nav">
                <ul className="nav-list">
                    <li className="nav-item">
                        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                            <Home size={20} />
                            <span>Dashboard</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/disputes" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                            <CreditCard size={20} />
                            <span>Disputas</span>
                            <span className="nav-badge">12</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/reports" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                            <BarChart2 size={20} />
                            <span>Relatórios</span>
                        </NavLink>
                    </li>
                </ul>

                <div className="nav-separator"></div>

                <ul className="nav-list">
                    <li className="nav-item">
                        <NavLink to="/settings" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                            <Settings size={20} />
                            <span>Configurações</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/help" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                            <HelpCircle size={20} />
                            <span>Centra de Ajuda</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <div className="sidebar-footer">
                <div className="user-profile">
                    <div className="avatar">A</div>
                    <div className="user-info">
                        <span className="user-name">Analista Koin</span>
                        <span className="user-role">Admin</span>
                    </div>
                </div>
                <button className="logout-button">
                    <LogOut size={18} />
                </button>
            </div>
        </aside>
    );
}
