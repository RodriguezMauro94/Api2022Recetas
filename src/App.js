import './App.css';
import NonnaAppBar from "./components/NonnaAppBar";

import { Outlet } from "react-router-dom";
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <div>
      <CssBaseline />
      <NonnaAppBar />
      <Outlet />
    </div>
  );
}

export default App;
