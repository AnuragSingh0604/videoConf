import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing";
import VideoMeetComponent from "./pages/VideoMeet";
import Authentication from "./pages/auth";
import { AuthProvider } from "./contexts/AuthContext";
import HomeComponent from "./pages/Home";
function App(){
    return(<div className="App">

      <Router>

        <AuthProvider>


          <Routes>

            <Route path='/' element={<LandingPage />} />

            <Route path='/auth' element={<Authentication />} />
            <Route path="/:url" element={<VideoMeetComponent/>}></Route>
            <Route path='/home's element={<HomeComponent />} />
            <Route path='/history' element={<History />} />
            <Route path='/:url' element={<VideoMeetComponent />} />

            
          </Routes>
        </AuthProvider>

      </Router>
    </div>)
}
export default App;