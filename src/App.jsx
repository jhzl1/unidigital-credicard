import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Desktop from "./components/Desktop";
import NotFound from "./pages/NotFound";
import SearchNumberDoc from "./components/SearchNumberDoc";
import Home from "./pages/Home";
import SearchByControl from "./pages/SearchByControl";
import SearchByFiscalRegistry from "./pages/SearchByFiscalRegistry";
import SearchByProduct from "./pages/SearchByProduct";
import BatchList from "./pages/BatchList";
import SearchBook from "./pages/SearchBook";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Desktop>
            <Route exact path="/home" component={Home} />
            <Route
              exact
              path="/documents/SearchByNumber"
              component={SearchNumberDoc}
            />
            <Route
              exact
              path="/documents/SearchByControl"
              component={SearchByControl}
            />
            <Route
              exact
              path="/documents/SearchByFiscalRegistry"
              component={SearchByFiscalRegistry}
            />
            <Route
              exact
              path="/documents/SearchByProduct"
              component={SearchByProduct}
            />
            <Route exact path="/BatchList" component={BatchList} />
            <Route exact path="/SearchBook" component={SearchBook} />
            <Route exact path="/Admin" component={AdminPage} />
          </Desktop>
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
