//library for routing functionality (Lets pages load w/o refreshing)
import { Route, Routes } from "react-router-dom"

//relative HTML
import Navbar from "./Navbar"
import Game from "./Game"
import Home from "./Home"
import Login from "./Login"
import Rules from "./Rules"

function App() {
  return (
    <>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/game" element={ <Game />} />
        <Route path="/login" element={ <Login />} />
        <Route path="/rules" element={ <Rules />} />
      </Routes>
    </div>
   </>
  );
}

export default App;
