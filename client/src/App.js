import React, { useContext } from 'react';
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Quotes from "./pages/Quotes/Quotes";
// import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { AppContext, ContextProvider } from './context/AppContext';
import "@mantine/notifications/styles.css";
import "@mantine/core/styles.css";
import "./App.css";

function App() {
  const { loggedInUser } = useContext(AppContext);

  return (
    <div>
      {loggedInUser && <Header />}
      <main className="main-app">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/quotes" element={<Quotes />} />
          
        </Routes>
      </main>
      {loggedInUser &&<Footer />}
    </div>
  );
}

export default App

