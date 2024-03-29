import { useContext } from 'react';
import { AppContext } from './Context';

export function useLevel() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return context;
}
