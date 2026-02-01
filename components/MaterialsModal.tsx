import React, { useMemo } from 'react';
import { PatternKey, BeadSummary } from '../types';
import { PATTERNS, COLOR_GLOSSARY } from '../constants';
import { getColorHex } from '../utils';

interface MaterialsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentKey: PatternKey;
  currentThemeKey: string;
}

export const MaterialsModal: React.FC<MaterialsModalProps> = ({ isOpen, onClose, currentKey, currentThemeKey }) => {
  const summary = useMemo(() => {
    if (!isOpen) return {};
    
    const result: BeadSummary = {};

    if (currentKey === 'mariposa' && PATTERNS.mariposa.themes) {
      const themeData = PATTERNS.mariposa.themes[currentThemeKey];
      PATTERNS.mariposa.steps?.forEach(step => {
        step.beads?.forEach(beadCode => {
          const name = themeData.names[beadCode];
          if (name) {
            if (!result[name]) {
              // @ts-ignore
              const hex = themeData[beadCode] || getColorHex(beadCode, currentKey, currentThemeKey);
              result[name] = { count: 0, hex };
            }
            result[name].count++;
          }
        });
      });
    } else {
      const patternData = PATTERNS[currentKey];
      const allSteps = [
        ...(patternData.mainSteps || []),
        ...(patternData.leftSteps || [])
      ];

      allSteps.forEach(step => {
        (step.pattern || "").match(/\d+[A-Za-z]+/g)?.forEach(p => {
          const countMatch = p.match(/\d+/);
          const codeMatch = p.match(/[A-Za-z]+/);
          if (countMatch && codeMatch) {
            const count = parseInt(countMatch[0]);
            const code = codeMatch[0];
            const name = COLOR_GLOSSARY[code];
            if (name) {
              if (!result[name]) {
                result[name] = { count: 0, hex: getColorHex(code, currentKey, currentThemeKey) };
              }
              result[name].count += count;
            }
          }
        });
      });
    }
    return result;
  }, [isOpen, currentKey, currentThemeKey]);

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/70 flex justify-center items-center z-[1000] p-4">
      <div className="bg-white p-6 md:p-10 rounded-[3rem] shadow-2xl w-full max-w-lg relative border-4 border-emerald-50 flex flex-col max-h-[85vh]">
        <button onClick={onClose} className="absolute top-6 right-8 text-4xl font-black text-gray-300 hover:text-gray-500 transition">&times;</button>
        <h3 className="text-2xl md:text-3xl font-black text-emerald-950 mb-6 uppercase tracking-tight flex items-center gap-3">
          <span className="bg-emerald-100 p-2 rounded-xl text-xl">📦</span> Material Necesario
        </h3>
        <div className="flex-1 overflow-y-auto pr-2 space-y-3 custom-scroll">
          {Object.keys(summary).sort().map(name => (
            <div key={name} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full border shadow-sm" style={{ backgroundColor: summary[name].hex }}></div>
                <span className="font-bold text-gray-700 uppercase text-sm">{name}</span>
              </div>
              <span className="bg-emerald-100 text-emerald-800 font-black px-3 py-1 rounded-lg">{summary[name].count}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 pt-6 border-t border-gray-100">
          <button onClick={onClose} className="w-full py-5 bg-emerald-600 text-white font-black rounded-2xl uppercase tracking-widest shadow-xl hover:bg-emerald-700 transition">
            Cerrar Reporte
          </button>
        </div>
      </div>
    </div>
  );
};