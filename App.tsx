
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import ChapterView from './components/ChapterView';
import HomeView from './components/HomeView';
import { BOOK_CONTENT } from './constants';

const App: React.FC = () => {
  // Default to home view
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/part/:partId/chapter/:chapterId" element={<ChapterView />} />
          {/* Fallback to home if no match */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
