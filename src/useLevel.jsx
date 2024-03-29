import { useContext } from 'react';
import { LevelContext } from './Context';

export function useLevel() {
  const context = useContext(LevelContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return context;
}
