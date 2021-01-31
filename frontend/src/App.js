import React from 'react';
import { List, ListInlineItem } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import Faqs from './components/Faqs';
import HowTo from './components/HowTo';
import About from './components/About';
import Contact from './components/Contact';
import Download from './components/Download';
import NotFound from './components/NotFound';
import TermsOfUse from './components/TermsOfUse';
import Navigation from './components/Navigation';
import PrivacyPolicy from './components/PrivacyPolicy';
import DownloadExtension from './components/DownloadExtension';

const App = () => {
  return (
    <Router>
      <Navigation />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/faqs" component={Faqs} />
        <Route path="/download" component={Download} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/terms-of-use" component={TermsOfUse} />
        <Route exact path="/privacy-policy" component={PrivacyPolicy} />
        <Route exact path="/download-extension" component={DownloadExtension} />
        <Route exact path="/how-to-download-facebook-videos" component={HowTo} />
        <Route path="" component={NotFound} />
      </Switch>

      <div style={{ borderTop: '1px solid #eee' }}>
        <div className="container d-flex align-items-center justify-content-between p-3 font-13px">
          <span className="text-muted">Copyright@{new Date().getFullYear()} FB Downloader. All Right Reserved.</span>
          <List className="d-flex m-0 footer-links">
            <ListInlineItem>
              <Link to="/download-extension">Browser Extension</Link>
            </ListInlineItem>
            <ListInlineItem>
              <Link to="/faqs">Faqs</Link>
            </ListInlineItem>
            <ListInlineItem>
              <Link to="/about">About</Link>
            </ListInlineItem>
            <ListInlineItem>
              <Link to="/terms-of-use">Terms of Use</Link>
            </ListInlineItem>
            <ListInlineItem>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </ListInlineItem>
            <ListInlineItem>
              <Link to="/contact">Feedback</Link>
            </ListInlineItem>
          </List>
        </div>
      </div>
    </Router>
  );
};

export default App;
