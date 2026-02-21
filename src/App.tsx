import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainShell } from './components/layout/MainShell';
import { Dashboard } from './pages/Dashboard/index';
import { ChargebackDetail } from './pages/ChargebackDetail/index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainShell />}>
          <Route index element={<Dashboard />} />
          <Route path="chargeback/:id" element={<ChargebackDetail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
