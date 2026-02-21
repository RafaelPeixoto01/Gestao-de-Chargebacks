import { Search, BarChart2, Globe, Clock } from 'lucide-react';
import './Header.css';

export function Header() {
    return (
        <header className="koin-header">
            <div className="header-container">

                {/* Logo and App Name */}
                <div className="header-brand">
                    <div className="logo-placeholder">koin</div>
                    <span className="app-badge">
                        <Globe size={14} className="badge-icon" />
                        Antifraude
                    </span>
                </div>

                {/* Navigation Tabs */}
                <nav className="header-nav">
                    <div className="nav-item active">
                        <Search size={16} />
                        <span>Pesquisa</span>
                    </div>
                    <div className="nav-item">
                        <BarChart2 size={16} />
                        <span>Métricas</span>
                    </div>
                </nav>

                {/* Right Actions */}
                <div className="header-actions">
                    <div className="action-tag">
                        <Globe size={14} />
                        <span>PT v</span>
                    </div>
                    <div className="action-tag black-tag">
                        <Clock size={14} />
                        <span>UTC-3 (Hora local)</span>
                    </div>
                    <div className="user-avatar">
                        R
                    </div>
                </div>

            </div>
        </header>
    );
}
