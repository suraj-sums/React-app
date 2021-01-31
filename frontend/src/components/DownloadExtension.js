import React from 'react';
import { List } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import chromeStoreLogo from '../images/chrome_store_med.png';

const DownloadExtension = () => (
  <div className="container-fluid p-0">
    <div className="bg-primary">
      <div className="container text-center p-5">
        <h1 className="text-white mt-4 text-uppercase">Facebook Video Downloader</h1>
        <h3 className="text-white">THE BEST FREE ONLINE EXTENSION TO DOWNLOAD FACEBOOK VIDEOS.</h3>
        <h5 className="text-white mb-3">Download Videos directly from Facebook in HD quality with one simple click.</h5>
      </div>
    </div>
    <div className="container pt-4 pb-4">
      <div className="d-flex align-items-center">
        <img src={logo} className="img-responsive mr-10px" alt="logo" height="120" />
        <h3 className="text-primary m-0">
          <p className="mb-1">Video Downloader For Facebook</p>
          <a href={process.env.REACT_APP_CHROME_EXT_URL} target="_blank" rel="noreferrer">
            <img src={chromeStoreLogo} className="img-responsive" alt="chrome store branding" height="70" />
          </a>
        </h3>
      </div>

      <h4 className="mt-3">How to install</h4>
      <p>
        Visit the{' '}
        <a href={process.env.REACT_APP_CHROME_EXT_URL} target="_blank" rel="noreferrer">
          Chrome web store
        </a>{' '}
        to install the free FB Video Downloader browser extension.
      </p>

      <h4>How to use</h4>
      <List>
        <li>
          Whenever you see a video on your Facebook newsfeed, and you want to download it Choose the video quality (Normal or HD).
        </li>
        <li>Click Download video to start the download.</li>
      </List>
      <p>
        We do not allow direct download from the extension because FB Video Downloader will analyze the video and provide you with the
        best video and sound quality.
      </p>

      <h4>Privacy</h4>
      <p>
        At FB Video Downloader, we take your privacy seriously. The only data we collect when you use the extension is the url video
        you send. For more information about how we handle your data please read our <Link to="/privacy-policy">Privacy Policy</Link>
      </p>
    </div>
  </div>
);

export default DownloadExtension;
