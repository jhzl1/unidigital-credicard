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
import SearchBatch from "./pages/SearchBatch";
import PrivateRoute from "./components/PrivateRoute";
import { AnimatePresence } from "framer-motion";
import AuthProvider from "./components/auth/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Route
          render={({ location }) => (
            <Desktop location={location}>
              <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                  <Route exact path="/" component={Login} />

                  <PrivateRoute exact path="/home" component={Home} />
                  <PrivateRoute
                    exact
                    path="/documents/SearchByNumber"
                    component={SearchByDocNumber}
                  />
                  <PrivateRoute
                    exact
                    path="/documents/SearchByControl"
                    component={SearchByControl}
                  />
                  <PrivateRoute
                    exact
                    path="/documents/SearchByFiscalRegistry"
                    component={SearchByFiscalRegistry}
                  />
                  <PrivateRoute
                    exact
                    path="/documents/SearchByProduct"
                    component={SearchByProduct}
                  />
                  <PrivateRoute exact path="/BatchList" component={BatchList} />
                  <PrivateRoute
                    exact
                    path="/SearchBook"
                    component={SearchBook}
                  />
                  <PrivateRoute exact path="/Admin" component={AdminPage} />
                  <PrivateRoute
                    exact
                    path="/statistics/SearchBatchs"
                    component={SearchBatch}
                  />

                  <Route path="*" component={NotFound} />
                </Switch>
              </AnimatePresence>
            </Desktop>
          )}
        />
      </Router>
    </AuthProvider>
  );
}

export default App;
