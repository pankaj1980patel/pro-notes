import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import icon from '../../assets/icon.svg';
import './App.css';
import Layout from '@/renderer/components/Layout/Layout';

function Hello() {
  window.electron.ipcRenderer.sendMessage('ipc-example', 'ping');
  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="*" element={<Hello />} />
        </Route>
      </Routes>
    </Router>
  );
}
