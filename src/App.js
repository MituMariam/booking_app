import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import HotelDetails from "./pages/HotelDetails";
import HotelList from "./pages/HotelList";
import './css/main.css'
function App() {
  return (


    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/hotels" element={<HotelList/>} />
        <Route path="/hotels/:id" element={<HotelDetails/>} />
        {/* <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route> */}
    
    </Routes>
  </BrowserRouter>
    // <div className="App">
    //   hello
    // </div>
  );
}

export default App;
