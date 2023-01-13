import React from 'react';
import ReactDOM from 'react-dom/client';
import { CiAirportSign1, CiAlarmOn } from "react-icons/ci";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <h1>Airfort <CiAirportSign1/></h1>
  <h1>AlarmOn <CiAlarmOn /></h1>
  </React.StrictMode>
);



