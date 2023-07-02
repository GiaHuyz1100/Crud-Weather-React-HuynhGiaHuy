import React, { useEffect, useState } from 'react';
import {  Route, Routes } from "react-router-dom";
import EmpListing from '../../Pages/EmpListing';
import EmpCreate from '../../Pages/EmpCreate';
import EmpDetail from '../../Pages/EmpDetail';
import EmpEdit from '../../Pages/EmpEdit';
import LoginForm from "../../Pages/LoginForm";
import Weather from "../../Pages/WeatherApp";

const storage = {
  set(key, value){
    localStorage.setItem(key, JSON.stringify(value));
  },
  get(key){
    return JSON.parse(localStorage.getItem(key));
  }
}
function AppRoutes() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(storage.get('isLoggedIn') ?? false);
  }, []);

  return (
    <Routes>
          {!isLoggedIn && <Route path="/" element={<LoginForm setIsLoggedIn={setIsLoggedIn} />} />}
          <Route path='/user' element={<EmpListing />}></Route>
          <Route path='/create' element={<EmpCreate />}></Route>

          <Route path='/detail/:empid' element={<EmpDetail />}></Route>
          <Route path='/edit/:empid' element={<EmpEdit />}></Route>
          <Route path='/weather' element={<Weather />}></Route>
    </Routes>
  );
}
export default AppRoutes;
