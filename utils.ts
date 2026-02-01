import { COLOR_GLOSSARY, STANDARD_COLORS, PATTERNS } from './constants';
import { PatternKey } from './types';

export const getColorHex = (code: string, currentKey: PatternKey, currentThemeKey: string): string => {
  if (STANDARD_COLORS[code]) return STANDARD_COLORS[code];
  if (currentKey === 'mariposa' && PATTERNS.mariposa.themes) {
    const theme = PATTERNS.mariposa.themes[currentThemeKey];
    // @ts-ignore - access dynamic property
    if (theme && theme[code]) return theme[code];
  }
  return '#ccc';
};

export const getBeads = (text: string | undefined): string[] => {
  if (!text || ["agrega", "notaras", "explicacion", "sube"].some(w => text.toLowerCase().includes(w))) return [];
  let beads: string[] = [];
  const matches = text.match(/\d+[A-Za-z]+/g);
  (matches || []).forEach((p: string) => {
    const matchCount = p.match(/\d+/);
    const matchCol = p.match(/[A-Za-z]+/);
    if (matchCount && matchCol) {
      const count = parseInt(matchCount[0]);
      const col = matchCol[0];
      for (let i = 0; i < count; i++) beads.push(col);
    }
  });
  return beads;
};

export const standardizeText = (raw: string | undefined, beadsArray: string[] | undefined, currentKey: PatternKey, currentThemeKey: string): string => {
  if (!raw && !beadsArray) return "";
  const text = raw || "";
  
  // Special text cases to leave as-is
  if (text.includes("REDUCCION") || text.includes("Prepara") || text.includes("Notaras") || text.includes("Subes") || text.includes("PONER")) return text;

  // Mariposa specific (using array of codes)
  if (currentKey === 'mariposa' && beadsArray && PATTERNS.mariposa.themes) {
    const themeNames = PATTERNS.mariposa.themes[currentThemeKey].names;
    let groups: string[] = [];
    let i = 0;
    while (i < beadsArray.length) {
      let code = beadsArray[i];
      let count = 0;
      while (i < beadsArray.length && beadsArray[i] === code) {
        count++;
        i++;
      }
      groups.push(`${count} ${themeNames[code] || code}`);
    }
    return groups.join(", ");
  }

  // Standard patterns (parsing "1D 2N")
  const matches = text.trim().match(/\d+[A-Za-z]+/g);
  return (matches || [])
    .map((p: string) => {
      const countMatch = p.match(/\d+/);
      const codeMatch = p.match(/[A-Za-z]+/);
      if (!countMatch || !codeMatch) return p;
      const count = countMatch[0];
      const code = codeMatch[0];
      return `${count} ${COLOR_GLOSSARY[code] || code}`;
    })
    .join(", ");
};