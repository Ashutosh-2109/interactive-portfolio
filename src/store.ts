import { create } from 'zustand';

type Phase = 'landing' | 'waving' | 'dropping' | 'zooming' | 'portfolio';

interface AppState {
  phase: Phase;
  setPhase: (phase: Phase) => void;
}

export const useAppStore = create<AppState>((set) => ({
  phase: 'landing',
  setPhase: (phase) => set({ phase }),
}));
