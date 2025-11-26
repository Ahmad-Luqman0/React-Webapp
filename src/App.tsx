
import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="h-screen flex flex-col font-sans text-sm bg-gray-50">
      <Header />
      <main className="flex-grow overflow-y-auto">
        <MainContent />
      </main>
      <Footer />
    </div>
  );
};

export default App;
