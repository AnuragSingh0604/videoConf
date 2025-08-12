import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing";
import Authentication from "./pages/auth";
import { AuthProvider } from "./contexts/AuthContext";
function App(){
    return(<div className="App">

      <Router>

        <AuthProvider>


          <Routes>

            <Route path='/' element={<LandingPage />} />

            <Route path='/auth' element={<Authentication />} />

            
          </Routes>
        </AuthProvider>

      </Router>
    </div>)
}
export default App;