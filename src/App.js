import './App.css';
import {BrowserRouter as Router ,Switch , Route} from "react-router-dom";
import Header from "./header/Header";
import Home from "./home/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
         <Route path="/login">Login</Route>
         <Route path="/register">Register</Route>
         <Route path="/" component={Home}></Route>
        </Switch>
     </div>
    </Router>
  );
}

export default App;
