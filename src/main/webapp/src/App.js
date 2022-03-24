import Register from "./modules/auth/Register";
import Login from "./modules/auth/Login";
import Main from "./modules/pages/Main";
import Missing from "./modules/pages/Missing";
import {Route, Routes} from "react-router-dom";
import Unauthorized from "./modules/pages/Unauthorized";
import RequireAuth from "./components/RequireAuth";
import PersistLogin from "./components/PersistLogin";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/unauthorized" element={<Unauthorized />} />

      <Route element={<PersistLogin />} >
          <Route element={<RequireAuth />}>
              <Route path="/*" element={<Main />} />
          </Route>
      </Route>

      <Route path="/*" element={<Missing />} />
    </Routes>
  );
}

export default App;
