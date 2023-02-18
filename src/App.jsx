import { GlobalProvider } from "./components/useContext";
import { Routes, Route } from "react-router";
import LandingPage from "./components/LandingPage";
import Signup, { Signin } from "./components/signup_pages";
import { UserAuthProvider } from "./components/signup_pages/UserContext";
import DashBoard from "./components/Admin";
function App() {
  return (
    <div>
      <>
        <UserAuthProvider>
          <GlobalProvider>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/dashboard" element={<DashBoard />} />
            </Routes>
          </GlobalProvider>
        </UserAuthProvider>
      </>
    </div>
  );
}

export default App;
