import React from 'react';

import './App.css';
import AppContextProvider from "./AppContextProvider";
import Components from './components/Components';
const { Header, ContentsPanel, Footer } = Components;

function App() {
  return (
      <AppContextProvider>
          <div>
              <Header />
              <ContentsPanel />
              <Footer/>
          </div>
      </AppContextProvider>
  );
}

export default App;
