export interface PatternStep {
  pattern?: string;
  beads?: string[];
  note?: string;
  imageUrl?: string;
  img?: string;
}

export interface ThemeColors {
  c1: string;
  c2: string;
  c3: string;
  extra: string;
  neg: string;
  blan: string;
  names: { [key: string]: string };
}

export interface PatternData {
  title: string;
  themes?: { [key: string]: ThemeColors };
  steps?: PatternStep[];
  mainSteps?: PatternStep[];
  leftSteps?: PatternStep[];
}

export type PatternKey = 'mariposa' | 'virgen' | 'frida' | 'mafalda';

export interface BeadSummary {
  [key: string]: {
    count: number;
    hex: string;
  };
}