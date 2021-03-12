import React  from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {
  Home,
  NotFound,
  BrowseCatalogue,
  GetListed,
  Login,
  Signup,
  About,
  MeetTheTeam,
  Press,
  Invest,
  Raise,
  TermsAndConditions,
  PrivicyPolicy,
  CookieNotice,
  LegallDocuments,
  UserAccount,
  UserIdentity,
  Participations
} from "./Containers";

const App = (props) => {



  return (
    <section className="App">
      <Router>
        <Switch>
          
          <Route exact path="/" component={Home} />
          <Route path="/offerings" component={BrowseCatalogue} />
          <Route path="/get-listed" component={GetListed} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/about" component={About} />
          <Route path="/team" component={MeetTheTeam} />
          <Route path="/press" component={Press} />
          <Route path="/how-it-works/invest" component={Invest} />
          <Route path="/how-it-works/raise" component={Raise} />
          <Route path="/terms-and-conditions" component={TermsAndConditions} />
          <Route path="/privacy-policy" component={PrivicyPolicy} />
          <Route path="/cookie-notice" component={CookieNotice} />
          <Route path="/legal-documents" component={LegallDocuments} />
          <Route path="/participations" component={Participations} />
          <Route path="/settings/user-account" component={UserAccount} />
          <Route path="/settings/user-identity" component={UserIdentity} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </section>
  );
};

export default App;
