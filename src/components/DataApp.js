import React, { useEffect, useState } from 'react';

// Create context for app-wide state management
export const DataAppContext = React.createContext();

const DataAppProvider = ({ children }) => {
  // Initial application state
  const initialState = {
    loginStatus: false,
    username: ''
  };

  // Retrieve state from localStorage or use initial state
  const [appState, setAppState] = useState(() => {
    try {
      const savedState = localStorage.getItem('appState');
      return savedState ? JSON.parse(savedState) : initialState;
    } catch (error) {
      console.error('Error reading from localStorage', error);
      return initialState;
    }
  });

  // Persist appState to localStorage on any state change
  useEffect(() => {
    try {
      localStorage.setItem('appState', JSON.stringify(appState));
    } catch (error) {
      console.error('Error saving to localStorage', error);
    }
  }, [appState]);

  return (
    <DataAppContext.Provider value={{ appState, setAppState }}>
      {children}
    </DataAppContext.Provider>
  );
};

export default DataAppProvider;
