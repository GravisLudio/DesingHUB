import { PatternData, PatternKey } from './types';

export const COLOR_GLOSSARY: { [key: string]: string } = {
  D: 'Dorado', N: 'Negro', P: 'Piel', V: 'Verde', C: 'Café', R: 'Rojo',
  A: 'Amarillo', O: 'Naranja', M: 'Morado', B: 'Blanco', Be: 'Beige', Ro: 'Rosado'
};

export const STANDARD_COLORS: { [key: string]: string } = {
  D: '#daa520', N: '#222', P: '#ffdbac', V: '#2d5a27', C: '#5d4037', R: '#b71c1c',
  A: '#FFEB3B', O: '#FF5722', M: '#A569BD', B: '#ffffff', Be: '#f5f5dc', Ro: '#ffc0cb'
};

export const PATTERNS: Record<PatternKey, PatternData> = {
  mariposa: {
    title: "Mariposa Monarca",
    themes: {
      orange: { c1: "#ffd700", c2: "#ffb347", c3: "#e65c00", extra: "#daa520", neg: "#222", blan: "#fff", names: { c1: "Amarillo", c2: "Naranja Claro", c3: "Naranja Oscuro", extra: "Dorado", neg: "Negro", blan: "Blanco" } },
      blue: { c1: "#AED6F1", c2: "#1ABC9C", c3: "#2E86C1", extra: "#daa520", neg: "#154360", blan: "#A569BD", names: { c1: "Azul Claro", c2: "Verde Azulado", c3: "Azul", extra: "Dorado", neg: "Azul Marino", blan: "Morado" } },
      pink: { c1: "#FFB6C1", c2: "#F5F5DC", c3: "#F5F5DC", extra: "#daa520", neg: "#9370DB", blan: "#4B0082", names: { c1: "Rosado Claro", c2: "Beige", c3: "Beige", extra: "Dorado", neg: "Morado Trans.", blan: "Morado Oscuro Trans." } },
      red_white: { c1: "#e74c3c", c2: "#ffffff", c3: "#ffffff", extra: "#daa520", neg: "#16A085", blan: "#ffd700", names: { c1: "Rojo", c2: "Blanco", c3: "Blanco", extra: "Dorado", neg: "Verde Azulado", blan: "Amarillo" } },
      black_gold: { c1: "#222", c2: "#222", c3: "#222", extra: "#daa520", neg: "#daa520", blan: "#222", names: { c1: "Negro", c2: "Negro", c3: "Negro", extra: "Dorado", neg: "Dorado", blan: "Negro" } },
      orange_green: { c1: "#FF5722", c2: "#2E7D32", c3: "#76FF03", extra: "#daa520", neg: "#1B5E20", blan: "#FFEB3B", names: { c1: "Naranja", c2: "Verde Pasto", c3: "Verde Fosfo", extra: "Dorado", neg: "Verde Mate", blan: "Amarillo" } },
      red_green_v2: { c1: "#76FF03", c2: "#f1948a", c3: "#f1948a", extra: "#daa520", neg: "#8b0000", blan: "#daa520", names: { c1: "Verde Fosfo", c2: "Rojo Claro", c3: "Rojo Claro", extra: "Dorado", neg: "Rojo Oscuro", blan: "Dorado" } },
      purple_yellow: { c1: "#D2B4DE", c2: "#4A235A", c3: "#A569BD", extra: "#daa520", neg: "#D2B4DE", blan: "#FFEB3B", names: { c1: "Morado Trans.", c2: "Morado Oscuro", c3: "Morado Claro", extra: "Dorado", neg: "Morado Trans.", blan: "Amarillo" } }
    },
    steps: [
      { beads: ["c1", "c1", "c2", "neg", "neg", "neg", "c1", "c1", "blan"], note: "Fila inicial. Regresa por la 3ra pepa." },
      { beads: ["c3", "c2", "c2"], note: "Fila de 3 cuentas." },
      { beads: ["c2", "c2", "neg", "c1"] },
      { beads: ["c1", "c3", "c2", "c2"] },
      { beads: ["neg", "c2", "neg", "c3"] },
      { beads: ["neg", "c3", "c2", "neg"] },
      { beads: ["extra", "extra", "extra", "extra"], note: "Cuerpo central." },
      { beads: ["extra", "extra", "extra", "extra"] },
      { beads: ["extra", "extra", "extra", "extra"] },
      { beads: ["neg", "c3", "c2", "neg"] },
      { beads: ["neg", "c2", "neg", "c3"] },
      { beads: ["c1", "c3", "c2", "c2"] },
      { beads: ["c2", "c2", "neg", "c1"] },
      { beads: ["blan", "c3", "c2", "c2"] },
      { beads: ["c1", "c2", "neg", "c1"] },
      { beads: ["c1", "neg", "neg", "c1"], note: "Fin de sección." }
    ]
  },
  virgen: {
    title: "Virgen María",
    mainSteps: [
      { pattern: "Prepara tu espacio de trabajo." },
      { pattern: "1D 2N 10P 1N 1D 4V" }, { pattern: "1D 1N 5P 1N" }, { pattern: "1D 3P 2C 1P 1N 1V" }, { pattern: "1V 1D 1N 3C 1P 1C 1N" }, { pattern: "1D 2C 4P 1N 1V" }, { pattern: "1V 1D 6P 1N" }, { pattern: "1D 3P 2N 1P 1N 1V" }, { pattern: "1V 1D 2P 1N 3P 1N" }, { pattern: "1D 2N 4P 1N 1V" }, { pattern: "1V 1D 4P 1C 2N" }, { pattern: "1D 1C 5P 1N 1V" }, { pattern: "2D 4P 1C 1P 1N" }, { pattern: "1D 1C 1P 1C 3P 1N 1V" }, { pattern: "1V 1D 5P 1C 1N" }, { pattern: "1D 1N 5P 1N 1V" }, { pattern: "1V 1D 2P 2C 1P 1C 1D" }, { pattern: "REDUCCION (Reducción Tipo 2)" }, { pattern: "1N 1M 1P 1M 1P 1M 1N 1V" }, { pattern: "1V 1D 1P 1M 2P 1M 1N" }, { pattern: "Notaras que quedas justo en una pepa negra, debes subir a la dorada y agregaras una dorada" }, { pattern: "Grafica de la reduccion tipo 1" }, { pattern: "Pasar aguja por la negra justo debajo" }, { pattern: "Meter aguja lado contrario al hilo" }, { pattern: "Subes por la dorada" }, { pattern: "Aguja en la dorada puesta" }, { pattern: "1D 1N 1M 1P 1M 1P 1D 1V" }, { pattern: "1D 1V 2P 2M 2N" }, { pattern: "1D 2N 1M 2P 1D 1V" }, { pattern: "2V 3P 3N" }, { pattern: "1D 2N 3P 1D 1V" }, { pattern: "1V 1D 1R 2P 1R 1N 1D" }, { pattern: "1V 1N 5R 1D" }, { pattern: "1V 1D 5R 1D" }, { pattern: "1V 6R 1V" }, { pattern: "1V 1D 5R 1D" }, { pattern: "1V 2R 1P 3R 1V" }, { pattern: "1V 1D 2R 2P 1R 1D" }, { pattern: "1V 1R 1C 2P 2R 1V" }, { pattern: "REDUCCION (Reducción Tipo 2)" }, { pattern: "1D 2R 2P 1R 1D" }, { pattern: "1V 1R 3P 2R" }, { pattern: "REDUCCION (Reducción Tipo 2)" }, { pattern: "1R 2P 1C 1R 1D" }, { pattern: "REDUCCION (Reducción Tipo 2)" }, { pattern: "1R 3P 1R" }, { pattern: "REDUCCION (Reducción Tipo 2)" }, { pattern: "2P 1C 1R" }, { pattern: "REDUCCION (Reducción Tipo 2)" }, { pattern: "3P" }
    ],
    leftSteps: [
      { pattern: "1D 1N 4P 1N 1D 1V" }, { pattern: "2V 1D 1N 3P 1N 1D" }, { pattern: "REDUCCION (Reducción Tipo 2)" }, { pattern: "2N 2P 1N 1D 1V 1D" }, { pattern: "REDUCCION (Reducción Tipo 2)" }, { pattern: "2V 1D 4N" }, { pattern: "Agregar pepa D (igual pasos anteriores)" }, { pattern: "1D 3N 1D 2V" }, { pattern: "PONER UNA V Y PONER EL HILO EN ESA" }, { pattern: "1V 1D 1V 1D 2N 1D" }, { pattern: "REDUCCION (Reducción Tipo 2)" }, { pattern: "1D 1N 1D 3V" }, { pattern: "REDUCCION (Reducción Tipo 2)" }, { pattern: "3V 2D" }, { pattern: "REDUCCION (Reducción Tipo 2)" }, { pattern: "1D 3V" }
    ]
  },
  frida: {
    title: "Frida Kahlo",
    mainSteps: [
      { pattern: "1D 10P" }, { pattern: "1N 1P 1N 1P" }, { pattern: "1N 4P" }, { pattern: "5P" }, { pattern: "2N 2P 1N" }, { pattern: "1P 3N 1P" }, { pattern: "1N 1P 2N 1P" }, { pattern: "1N 3P 1N" }, { pattern: "1V 1N 2P 1N" }, { pattern: "1M 3N 1A" }, { pattern: "2A 2N 1M" }, { pattern: "1D 3N 1D" }, { pattern: "2A 1O 1R 1M" }, { pattern: "1M 2R 1O 1A" }
    ]
  },
  mafalda: {
    title: "Mafalda",
    mainSteps: [
      { pattern: "2R 2B 3Be 2B 2R 2N", note: "Paso Inicial: Devuelve por la tercera" },
      { pattern: "1R 3N 1R", note: "Paso 1" },
      { pattern: "6N", note: "Paso 2" },
      { pattern: "2N 3Be 1N", note: "Paso 3" },
      { pattern: "1N 4Be 1N", note: "Paso 4" },
      { pattern: "1N 2Be 1N 2Be", note: "Paso 5" },
      { pattern: "2Be 2N 2Be", note: "Paso 6" },
      { pattern: "1N 1Be 1N 1Be 1N 1Be", note: "Paso 7" },
      { pattern: "6Be", note: "Paso 8" },
      { pattern: "1N 2Be 1Ro 2Be", note: "Paso 9" },
      { pattern: "1N 4Be 1N", note: "Paso 10" },
      { pattern: "2N 3Be 1N", note: "Paso 11" },
      { pattern: "2N 3Be 1N", note: "Paso 12" },
      { pattern: "1N 1Be 2N 1Be 1N", note: "Paso 13" },
      { pattern: "2N 3Be 1N", note: "Paso 14" },
      { pattern: "1N 4Be 1N", note: "Paso 15" },
      { pattern: "2N 3Be 1N", note: "Paso 16" },
      { pattern: "2N 2Be 2N", note: "Paso 17" },
      { pattern: "6N", note: "Paso 18" },
      { pattern: "6N", note: "Paso 19" }
    ]
  }
};