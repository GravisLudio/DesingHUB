import React, { useState } from 'react';
import { PatternView } from './components/PatternView';
import { PatternKey } from './types';

// Simple placeholder image for Mafalda since original source is likely local/broken
const mafaldaUrl = "https://picsum.photos/400/400?grayscale";

function App() {
  const [currentView, setCurrentView] = useState<'hub' | 'pattern'>('hub');
  const [selectedPattern, setSelectedPattern] = useState<PatternKey>('mariposa');

  const openPattern = (key: PatternKey) => {
    setSelectedPattern(key);
    setCurrentView('pattern');
  };

  if (currentView === 'pattern') {
    return <PatternView patternKey={selectedPattern} onBack={() => setCurrentView('hub')} />;
  }

  return (
    <div className="container mx-auto px-4 py-12 animate-fadeIn">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-black text-indigo-950 mb-4 tracking-tighter uppercase">Miyuki Design Hub</h1>
        <p className="text-xl text-gray-500 font-medium">Panel de Producción Técnica</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        
        {/* Card Mariposa */}
        <div onClick={() => openPattern('mariposa')} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all cursor-pointer transform hover:-translate-y-2 border-4 border-transparent hover:border-indigo-200 text-center">
          <div className="h-48 bg-gradient-to-br from-orange-400 to-yellow-300 flex items-center justify-center text-7xl transition-transform duration-500 group-hover:scale-110">🦋</div>
          <div className="p-6">
            <h3 className="text-xl font-black text-gray-800 uppercase">Mariposa</h3>
            <div className="mt-2 flex items-center justify-center gap-1 text-indigo-600 font-black">🏷️ $1.000 COP</div>
          </div>
        </div>

        {/* Card Virgen */}
        <div onClick={() => openPattern('virgen')} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all cursor-pointer transform hover:-translate-y-2 border-4 border-transparent hover:border-purple-200 text-center">
          <div className="h-48 bg-gradient-to-br from-indigo-600 to-purple-500 flex items-center justify-center text-7xl transition-transform duration-500 group-hover:scale-110">🙏</div>
          <div className="p-6">
            <h3 className="text-xl font-black text-gray-800 uppercase">Virgen María</h3>
            <div className="mt-2 flex items-center justify-center gap-1 text-indigo-600 font-black">🏷️ $4.000 COP</div>
          </div>
        </div>

        {/* Card Frida */}
        <div onClick={() => openPattern('frida')} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all cursor-pointer transform hover:-translate-y-2 border-4 border-transparent hover:border-rose-200 text-center">
          <div className="h-48 bg-gradient-to-br from-rose-500 to-amber-400 flex items-center justify-center text-7xl transition-transform duration-500 group-hover:scale-110">👩‍🎨</div>
          <div className="p-6">
            <h3 className="text-xl font-black text-gray-800 uppercase">Frida Kahlo</h3>
            <div className="mt-2 flex items-center justify-center gap-1 text-indigo-600 font-black">🏷️ $1.000 COP</div>
          </div>
        </div>

        {/* Card Mafalda */}
        <div onClick={() => openPattern('mafalda')} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all cursor-pointer transform hover:-translate-y-2 border-4 border-transparent hover:border-red-200 text-center text-center">
          <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden relative">
             <div className="absolute inset-0 flex items-center justify-center text-7xl z-0 opacity-50">👧</div>
             {/* Using a placeholder or styled div since original image was likely local */}
             <div className="z-10 w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500" style={{ backgroundImage: `url(${mafaldaUrl})` }}></div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-black text-gray-800 uppercase">Mafalda</h3>
            <div className="mt-2 flex items-center justify-center gap-1 text-indigo-600 font-black">🏷️ $1.000 COP</div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;