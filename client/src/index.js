import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { ContextProvider } from "./context/AppContext"; 
import { MantineProvider } from '@mantine/core';
import "@mantine/notifications/styles.css";
import { Notifications } from "@mantine/notifications";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ContextProvider>
    <MantineProvider>
      <Notifications/>
    <App />
    </MantineProvider>
    </ContextProvider>
  
    </BrowserRouter>
  </React.StrictMode>
);

