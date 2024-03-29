import { createContext, useMemo } from 'react';
import PropTypes from 'prop-types';

export const AppContext = createContext(1);

export function Context({ children }) {
  const value = useMemo(() => {
    return 55;
  }, []);

  return <AppContext.Provider value={value}>
    {children}
  </AppContext.Provider>
}

Context.propTypes = {
  children: PropTypes.element,
};
