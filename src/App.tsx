import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '@/layouts/Main';
import loadable from '@loadable/component';

// 코드 스플리팅 (페이지 단위로 하는게 좋다)
const LogIn = loadable(() => import('@/pages/LogIn'));
const SignUp = loadable(() => import('@/pages/SignUp'));

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
