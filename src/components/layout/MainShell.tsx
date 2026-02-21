import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import './MainShell.css';

export function MainShell() {
    return (
        <div className="main-shell">
            <div className="top-green-bar">
                <span>Ambiente de prueba | Headers activos: xdesp-sandbox</span>
            </div>
            <Header />
            <main className="content-area">
                <div className="content-wrapper">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}
