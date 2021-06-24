import React from "react";
import '../components/style.css'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Award from "./award/Award";
import LandingPage from "./landingPage/LandingPage";
import Talkshows from './talkShows/talkShow'
import Magzine from "./magzine/magzine";
import OurTeam from "./team/ourTeam";
import Candidate from "./talkShows/beingCandidate";
import AwardSection from "./award/AwardSection";
const BrandImpact = () => {
  return (
    <>
      <Router>

        <Route exact path="/" component={LandingPage} />
        <Route exact path="/award" component={Award} />
        <Route exact path="/talk_shows" component={Talkshows} />
        <Route exact path="/magzine" component={Magzine} />
        <Route exact path="/team" component={OurTeam} />
        <Route exact path="/team" component={OurTeam} />
        <Route exact path="/candidate" component={Candidate} />
        <Route exact path="/awardsection" component={AwardSection} />


        


        


      
      </Router>
    </>
  );
};
export default BrandImpact;
