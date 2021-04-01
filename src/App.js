import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { AdminPanel } from "./Components/AdminPanel/AdminPanel";
import {AgentPanel } from "./Components/AgentPanel/AgentPanel";
import { ExcleForm } from "./Components/ExcelForm/ExcleForm";
import { Login } from "./Components/Login/Login";
import { PrivateRoute } from "./Components/PrivateRoute/PrivateRoute";

function App() {
  return (
   <Router>
   <Switch>
   <Route  exact path="/">
       <Login/>
     </Route>
     <PrivateRoute  exact path="/agentcsv">
    <AgentPanel/> 
     </PrivateRoute>
     <Route   path="/admin">
       <AdminPanel/>
     </Route>
     <PrivateRoute  path="/ExcleForm">
       <ExcleForm/>
     </PrivateRoute>
   </Switch>
   
   </Router>
  );
}

export default App;
