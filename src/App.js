import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import OurTeam from "./pages/OurTeamPage";
import Four0FourPage from "./pages/Four0FourPage";
import AboutPage from "./pages/AboutPage";
import SingleWorkPage from "./pages/SingleWorkPage";
import ProjectPage from "./pages/ProjectPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/team" component={OurTeam} />
        {/* <Route path="/:id" component={SingleWorkPage} /> */}
        <Route path="/project" component={ProjectPage} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/*" component={Four0FourPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
