import { Routes as Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { AuthContextProvider } from "./context/AuthContext";
import { ToastContextProvider } from "./context/ToastContext";
import Particles from './components/Particles';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateContact from "./pages/CreateContact";
import AllContact from "./pages/AllContact";
import EditContact from "./pages/EditContact";

const App = () => {
  return (
    <ToastContextProvider>
      <AuthContextProvider>
        <Layout>
          <Switch>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/create" element={<CreateContact />} />
            <Route path="/mycontacts" element={<AllContact />} />
            <Route path="/edit/:id" element={<EditContact />} />
          </Switch>
<div className="App">
      
        <a
          className="App-link"
          href="https://particles.js.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          To experience the Animation, click multiple times on the blank screen!!
        </a>
      
      <Particles id="tsparticles" />
    </div>
        </Layout>
      </AuthContextProvider>
    </ToastContextProvider>
  );
};

export default App;