
import { NavigationBarProvider } from "./components/useContext";
import { Routes, Route } from "react-router";
import LandingPage from "./components/LandingPage";
import Signup, { Signin } from "./components/signup_pages";
function App() {
  return (
    <div>
      <NavigationBarProvider>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>

       
      </NavigationBarProvider>
    </div>
  );
}

export default App;
