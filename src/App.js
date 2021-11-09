import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import LandingPage from "./components/landingpage/page";


function App() {
  return (
    <div >
      <Router>
        <LandingPage />
      </Router>


    </div>
  );
}

export default App;
