import React, { useState, useEffect } from 'react';
import { PatternKey } from '../types';
import { PATTERNS } from '../constants';
import { getBeads, getColorHex, standardizeText } from '../utils';
import { Bead } from './Bead';
import { MaterialsModal } from './MaterialsModal';

interface PatternViewProps {
  patternKey: PatternKey;
  onBack: () => void;
}

export const PatternView: React.FC<PatternViewProps> = ({ patternKey, onBack }) => {
  const [stepIndex, setStepIndex] = useState(0);
  const [isLeftBranch, setIsLeftBranch] = useState(false);
  const [themeKey, setThemeKey] = useState('orange');
  const [showMaterials, setShowMaterials] = useState(false);
  const [showReductionInfo, setShowReductionInfo] = useState(false);

  const patternData = PATTERNS[patternKey];
  
  // Determine which list of steps to use
  const stepList = (patternKey === 'virgen' && isLeftBranch) 
    ? patternData.leftSteps 
    : (patternData.mainSteps || patternData.steps || []);
    
  const currentStep = stepList?.[stepIndex];

  // Reset steps when switching patterns
  useEffect(() => {
    setStepIndex(0);
    setIsLeftBranch(false);
  }, [patternKey]);

  const handleNext = () => {
    if (stepIndex < (stepList?.length || 0) - 1) setStepIndex(prev => prev + 1);
  };

  const handlePrev = () => {
    if (stepIndex > 0) setStepIndex(prev => prev - 1);
  };

  // Process text for display
  const rawText = patternKey === 'mariposa' ? null : currentStep?.pattern;
  const beadsArray = patternKey === 'mariposa' ? currentStep?.beads : getBeads(currentStep?.pattern);
  const standardizedText = standardizeText(rawText || undefined, beadsArray, patternKey, themeKey);
  const displayText = (currentStep?.note ? currentStep.note + ": " : "") + standardizedText;
  
  const hasReduction = displayText.includes("REDUCCION");
  const displayHtml = hasReduction 
    ? displayText.replace("REDUCCION", "") 
    : displayText;

  return (
    <div className="container mx-auto px-4 py-6 animate-fadeIn">
      <div className="max-w-4xl mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden border-4 border-white">
        
        {/* Header */}
        <div className="bg-indigo-950 p-6 flex flex-col md:flex-row justify-between items-center text-white gap-4">
          <button onClick={onBack} className="flex items-center gap-2 bg-indigo-900 hover:bg-white hover:text-indigo-950 px-6 py-3 rounded-2xl transition-all font-black text-xs tracking-widest uppercase w-full md:w-auto justify-center">
            ← HUB
          </button>
          <button onClick={() => setShowMaterials(true)} className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-3 rounded-2xl transition-all font-black text-xs tracking-widest uppercase shadow-lg flex items-center justify-center gap-2 w-full md:w-auto">
            📦 VER MATERIALES
          </button>
          <div className="font-black tracking-widest text-indigo-200 text-sm uppercase">
            ETAPA {stepIndex + 1} / {stepList?.length || 0}
          </div>
        </div>

        <div className="p-8">
          {/* Mariposa Theme Selectors */}
          {patternKey === 'mariposa' && (
            <div className="mb-10 text-center">
              <div className="flex justify-center gap-4 flex-wrap">
                 {[
                   {k: 'orange', c: 'bg-orange-500'}, {k: 'blue', c: 'bg-blue-500'}, 
                   {k: 'pink', c: 'bg-[#FFB6C1]'}, {k: 'red_white', c: 'bg-red-600'},
                   {k: 'black_gold', c: 'bg-black'}, {k: 'orange_green', c: 'bg-[#2E7D32]'},
                   {k: 'red_green_v2', c: 'bg-[#f1948a]'}, {k: 'purple_yellow', c: 'bg-[#4A235A]'}
                 ].map(t => (
                   <div 
                    key={t.k}
                    onClick={() => setThemeKey(t.k)} 
                    className={`w-10 h-10 rounded-full border-4 border-white shadow-lg cursor-pointer ${t.c} hover:scale-110 transition ${themeKey === t.k ? 'ring-2 ring-indigo-500' : ''}`}
                   />
                 ))}
              </div>
            </div>
          )}

          {/* Glossary */}
          <div className="mb-8">
            <div className="p-6 bg-indigo-50 rounded-3xl border-2 border-indigo-100">
              <h4 className="font-black text-indigo-900 text-xs mb-4 uppercase tracking-widest flex items-center gap-2">🎨 Glosario de Colores:</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 text-[10px] font-black uppercase text-indigo-700">
                {(() => {
                  let map: {[key:string]: string} = {};
                   if (patternKey === 'virgen') map = { D: 'Dorado', N: 'Negro', P: 'Piel', V: 'Verde', C: 'Café', R: 'Rojo', M: 'Morado' };
                   else if (patternKey === 'frida') map = { D: 'Dorado', N: 'Negro', P: 'Piel', V: 'Verde', A: 'Amarillo', O: 'Naranja', M: 'Morado', R: 'Rojo' };
                   else if (patternKey === 'mafalda') map = { R: 'Rojo', B: 'Blanco', Be: 'Beige', N: 'Negro', Ro: 'Rosado' };
                   else if (PATTERNS.mariposa.themes) map = PATTERNS.mariposa.themes[themeKey].names;

                   return Object.keys(map).map(code => (
                     <div key={code} className="flex items-center gap-2">
                       <span className="w-4 h-4 rounded-full shadow-inner block" style={{backgroundColor: getColorHex(code, patternKey, themeKey)}} />
                       {code}: {map[code]}
                     </div>
                   ));
                })()}
              </div>
            </div>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight">
              {isLeftBranch ? "Sección Cabeza" : patternData.title}
            </h2>
          </div>

          {/* Image Container */}
          {patternKey !== 'mariposa' && patternKey !== 'frida' && (
             <div className="flex justify-center mb-8 min-h-[100px]">
               {currentStep?.imageUrl || currentStep?.img ? (
                 <img src={currentStep.imageUrl || currentStep.img} alt="Guía" className="w-80 h-auto rounded-[2rem] shadow-2xl border-8 border-white object-cover" />
               ) : null}
               {patternKey === 'mafalda' && (
                 <div className="w-full h-40 bg-gray-100 rounded-3xl flex items-center justify-center text-gray-300 text-4xl">👧</div>
               )}
             </div>
          )}

          {/* Progress Bar */}
          <div className="w-full bg-gray-100 h-3 rounded-full mb-8 overflow-hidden">
            <div 
              className="bg-indigo-600 h-full transition-all duration-500 ease-out" 
              style={{width: `${((stepIndex + 1) / (stepList?.length || 1)) * 100}%`}}
            />
          </div>

          {/* Instructions */}
          <div className="min-h-[140px] bg-amber-50 border-l-[12px] border-amber-400 p-8 rounded-3xl font-bold text-amber-950 mb-10 flex flex-col items-center justify-center text-center text-xl md:text-2xl leading-tight shadow-sm">
             <div>
               {displayHtml}
               {hasReduction && (
                 <button onClick={() => setShowReductionInfo(true)} className="text-indigo-700 underline cursor-pointer font-black ml-2 hover:text-indigo-900">
                   (Ver Reducción Tipo 2)
                 </button>
               )}
             </div>
          </div>

          {/* Bead Display */}
          <div className="flex justify-center flex-wrap gap-4 mb-10 p-10 bg-white rounded-[2.5rem] border-4 border-gray-100 min-h-[120px] shadow-inner transition-all">
            {beadsArray?.map((code, idx) => (
              <Bead key={`${code}-${idx}`} color={getColorHex(code, patternKey, themeKey)} />
            ))}
          </div>

          {/* Slider */}
          <div className="mb-12 px-4">
            <input 
              type="range" 
              min={0} 
              max={(stepList?.length || 1) - 1} 
              value={stepIndex} 
              onChange={(e) => setStepIndex(parseInt(e.target.value))}
              className="w-full h-4 bg-gray-200 rounded-2xl appearance-none cursor-pointer accent-indigo-600" 
            />
          </div>

          {/* Controls */}
          <div className="grid grid-cols-2 gap-6">
            <button 
              onClick={handlePrev} 
              disabled={stepIndex === 0}
              className="py-6 bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed text-gray-700 font-black rounded-[2rem] transition-all text-xl uppercase tracking-widest shadow-lg"
            >
              Anterior
            </button>
            <button 
              onClick={handleNext}
              disabled={stepIndex === (stepList?.length || 1) - 1}
              className="py-6 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 text-white font-black rounded-[2rem] transition-all text-xl uppercase tracking-widest shadow-xl"
            >
              Siguiente
            </button>
          </div>

          {/* Branch Button (Virgen only) */}
          {patternKey === 'virgen' && (
            <button 
              onClick={() => { setIsLeftBranch(!isLeftBranch); setStepIndex(0); }}
              className={`w-full py-6 font-black rounded-[2rem] transition-all shadow-lg uppercase tracking-widest text-xl mt-6 ${isLeftBranch ? 'bg-gray-700 text-white' : 'bg-rose-600 text-white animate-pulse'}`}
            >
              {isLeftBranch ? "← VOLVER A CUERPO" : "IR A SECCIÓN CABEZA →"}
            </button>
          )}

        </div>
      </div>

      <MaterialsModal 
        isOpen={showMaterials} 
        onClose={() => setShowMaterials(false)} 
        currentKey={patternKey} 
        currentThemeKey={themeKey} 
      />

      {/* Reduction Modal (Simple inline implementation for brevity) */}
      {showReductionInfo && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/70 flex justify-center items-center z-[1000] p-4">
           <div className="bg-white p-12 rounded-[3rem] shadow-2xl max-w-xl w-[90%] relative border-4 border-indigo-50">
            <button onClick={() => setShowReductionInfo(false)} className="absolute top-8 right-10 text-4xl font-black text-gray-300 hover:text-gray-500 transition">&times;</button>
            <h3 className="text-3xl font-black text-indigo-950 mb-6 uppercase tracking-tight">Técnica de Reducción</h3>
            <p className="text-gray-600 text-lg leading-relaxed font-medium">
              Tras insertar la última pepa de la reducción, se forma un escalón. El hilo queda en la pepa de la fila previa. Inserta el hilo en la pepa anterior inmediata. Luego, en la penúltima columna, cuenta 3 pepas hacia el centro. Inserta en la 3ra, regresa por la 2da y sal por la puesta.
            </p>
            <button onClick={() => setShowReductionInfo(false)} className="mt-10 w-full py-5 bg-indigo-600 text-white font-black rounded-2xl uppercase tracking-widest shadow-xl">Entendido</button>
          </div>
        </div>
      )}
    </div>
  );
};