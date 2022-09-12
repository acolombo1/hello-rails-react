// Entry point for the build script in your package.json
// import "@hotwired/turbo-rails"
// import "./controllers"
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './index.css';

function App() {
  return (<h1>Hi World!</h1>);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>,
);
