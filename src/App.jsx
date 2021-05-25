import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Desktop from "./components/Desktop";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import SearchByControl from "./pages/SearchByControl";
import SearchByFiscalRegistry from "./pages/SearchByFiscalRegistry";
import SearchByProduct from "./pages/SearchByProduct";
import BatchList from "./pages/BatchList";
import SearchBook from "./pages/SearchBook";
import AdminPage from "./pages/AdminPage";
import SearchByDocNumber from "./pages/SearchByDocNumber";
import Login from "./pages/Login";
import SearchBatch from "./components/SearchBatch";

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
              component={SearchByDocNumber}
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
            <Route
              exact
              path="/statistics/SearchBatchs"
              component={SearchBatch}
            />
          </Desktop>
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
