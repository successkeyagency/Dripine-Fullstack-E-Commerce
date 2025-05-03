import React from "react";
import Nav from "./components/Nav";
import SideB from "./components/SideB";
import { Routes, Route } from "react-router-dom";
import Add from "./views/Add";
import Orders from "./views/Orders";
import List from "./views/List";
import { useState } from "react";
import Login from "./components/Login";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";

export const backendUrl = import.meta.env.VITE_BACKEND_URL;
export const currency = '$'

const App = () => {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  return (
    <div className="flex flex-col min-h-screen">
      <ToastContainer />
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <Nav setToken={setToken} />
          <div className="flex flex-1">
            <SideB />
            <div className="">
              <Routes>
                <Route path="/add" element={<Add token={token} />} />
                <Route path="/list" element={<List token={token} />} />
                <Route path="/orders" element={<Orders token={token} />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
