import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignIn from './Pages/SignInPages/SignIn1';
import Dashboard from "./Pages/dashboard/Dashboard";
import Admin from './Pages/AdminPages/Admin'
import Accueil from "./Pages/Accueil/Accueil";
import AnalysePredictiveAdmin from "./Pages/AnalysePredictiveAdmin/AnalysePredictiveAdmin";
import ResponsableAdmin from "./Pages/ResponsableAdmin/ResponsableAdmin";
import TableauDeBord from "./Pages/TableauDeBord/TableauDeBord";
import TableauDeBordResponsable from "./Pages/TableauDeBordResponsable/TableauDeBordResponsable";
import AnalysePredictiveResponsable from "./Pages/AnalysePredictiveResponsable/AnalysePredictiveResponsable";
function App() {


  return (
    <div className="App">

      <Routes>
        <Route exact path="/" element={<Accueil    />} />
        <Route path="/inscription" element={<SignIn />} />
        <Route path="/Admin" element={<Admin/>} />
        <Route path="/Dashbord" element = {<Dashboard/>} />
        <Route path="/admin/AnalysePredictiveAdmin" element={<AnalysePredictiveAdmin/>} />
        <Route path="/admin/ResponsableAdmin" element={<ResponsableAdmin/>} />
        <Route path="/admin/TableauDeBord" element={<TableauDeBord/>} />
        <Route path="/responsable/TableauDeBord" element={<TableauDeBordResponsable/>} />
        <Route path="/responsable/AnalysePredictiveResponsable" element={<AnalysePredictiveResponsable/>} />
      </Routes>
    </div>
  );
}

export default App;
