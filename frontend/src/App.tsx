import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Pages } from "./pages";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Routes = [
  { path: '/', component: Pages.Home },
  { path: '/documentation', component: Pages.Documentation },
  { path: '/about', component: Pages.About },
  { path: '/account', component: Pages.Account },
  { path: '/sign-up', component: Pages.SignUp },
  { path: '/login', component: Pages.Login },
  { path: '', component: Pages.NotFoundPage },
];

interface AppProps {
  tab: string;
}

const App: React.FC<AppProps> = ({ tab }) => {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <div id="content-wrap">
            <Header />
            <div
              style={{
                padding: "20px",
                display: "flex",
                justifyContent: "center",
              }}
              className="row"
            >
              <div className="col-sm-12 col-lg-6">
                <Switch>
                  {Routes.map((route, i) => (
                    <Route exact path={route.path} key={i} component={route.component} />
                  ))}
                </Switch>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
