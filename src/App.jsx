import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Desktop from "./components/Desktop";
import NotFound from "./pages/NotFound";
import SearchNumberDoc from "./components/SearchNumberDoc";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Desktop>
            <Route exact path="/home" component={Home} />
            <Route
              exact
              path="/documents/SearchByNumber"
              component={SearchNumberDoc}
            />
          </Desktop>
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
