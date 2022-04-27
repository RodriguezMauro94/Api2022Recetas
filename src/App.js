import './App.css';
import NonnaAppBar from "./components/NonnaAppBar";
import NonnaFooter from "./components/NonnnaFooter";
import { Outlet } from "react-router-dom";
import { CssBaseline } from '@mui/material';


function App() {
  return (
    <div>
      <CssBaseline />
      <NonnaAppBar />
      <Outlet />
      <NonnaFooter />
    </div>
  );
}

export default App;
