import React from 'react';
import { Alert } from 'reactstrap';
import { Link } from 'react-router-dom';

const HowTo = () => {
  const steps = [
    {
      text: 'Play the video, then Right Click -> Show video URL. See screenshot below.',
      img: 'https://www.getfvid.com/public/assets/images/blog/fb-1.png',
    },
    {
      text: (
        <span>
          Visit <Link to="/">FB Video Downloader</Link> and paste the URL of the text box provided. This process would take a few
          seconds. This is the time you should not refresh or re-load the page.
        </span>
      ),
      img: 'https://www.getfvid.com/public/assets/images/blog/fb-2.png',
    },
    {
      text: 'Click on "Download normal quality video" or "Download HD video" (if available) to start downloading the video.',
      img: 'https://www.getfvid.com/public/assets/images/blog/fb-3.png',
    },
  ];

  return (
    <div className="container mb-3 mt-3">
      <div className="border rounded p-4">
        <h1>How to Download Facebook Videos</h1>
        <p>
          Did you ever want to download a video from your Facebook feed? Did you see a video on your Facebook feed and are wondering if
          you can download it to your hard drive? Wish to download videos from Facebook Feed in MP4 format? If yes, FB Video Downloader
          is the perfect solution.
        </p>
        <p>
          Downloading Facebook videos online has never been so easy. No software or installation is required and you can easily
          download the video you like from the web browser. Thanks to FB Video Downloader, anyone with an active internet connection
          can download the videos from Facebook within a few seconds. FB Video Downloader is free to use and no registration is
          required.
        </p>
        <p>You can just follow the below-mentioned steps to easily download Facebook videos online, for free.</p>

        <div className="steps">
          {steps.map((step, index) => (
            <div key={index} className="mb-3">
              <h4>STEP {index + 1}</h4>
              <p>{step.text}</p>
              <img src={step.img} className="img-responsive" alt={'Download Step ' + (index + 1)} />
            </div>
          ))}

          <Alert color="info" className="m-0">
            If you get an error, then check if the video is public and not private . Or check our{' '}
            <Link to="/download-extension">Video Downloader Extension for Chrome.</Link>
          </Alert>
        </div>
      </div>
    </div>
  );
};

export default HowTo;
