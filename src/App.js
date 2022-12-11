import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loader from './others/Helper/Loader';
import ScrollToTop from './others/Helper/ScrollToTop';
import Home from './pages/Home';
import './index.css'
import Home2 from './pages/Home2';
import Home3 from './pages/Home3';
import Home4 from './pages/Home4';
import Home5 from './pages/Home5';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Jobs from './pages/Jobs';
import ViewJob from './pages/ViewJobs';
import AppliedJobs from './pages/AppliedJobs';
import MyJobs from './pages/MyJobs';
import Layout from './components/Layout/layout';
import CSignin from './pages/CSignin';
import CSignup from './pages/CSignup';
import CHome from './pages/CHome';
import CJobs from './pages/CJobs';
import AddJob from './pages/CAddJobs';
import CViewJob from './pages/CViewJobs';
import CViewCandidates from './pages/CViewCandidates';
import CViewCandidatesDetails from './pages/CViewCandidatesDetails';
import CCandidatesApplied from './pages/CCandidatesApplied';
import CCandidatesHired from './pages/CCandidatesHired';
import PrivateRoute from './components/HOC/PrivateRoute';
import CUpdateJob from './pages/CUpdateJob';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      window.scrollTo(0, 0);
  });
  useEffect(() => {
      setTimeout(() => {
          setLoading(false);
      }, 2000);
  });
  return (
    <>
        {loading && (
            <div className={`veegil-loader ${loading ? 'active' : ''}`}>
                <Loader />
            </div>
        )}
        <div className={`veegil-visible ${loading === false ? 'active' : ''}`}>
            <Router>
                <ScrollToTop>
                    <Switch>
                    <Route exact path="/company/signin" component={CSignin} />
                    <Route exact path="/company/signup" component={CSignup} />
                    
                    <Route exact path="/" component={CHome} />
                    <Route exact path="/company/jobs" component={CJobs} />
                    <Route exact path="/company/add-jobs" component={AddJob} />
                    <Route exact path="/company/view-job" component={CViewJob} />
                    <Route exact path="/company/update-job" component={CUpdateJob} />
                    <Route exact path="/company/view-candidates" component={CViewCandidates} />
                    <Route exact path="/company/view-candidates-details" component={CViewCandidatesDetails} />
                    <Route exact path="/company/candidates-applied" component={CCandidatesApplied} />
                    <Route exact path="/company/candidates-hired" component={CCandidatesHired} />
                    </Switch>
                </ScrollToTop>
            </Router>
        </div>
        
    </>
);
}

export default App
