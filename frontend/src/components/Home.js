import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, InputGroup, Form, Input, InputGroupAddon, List } from 'reactstrap';

const Home = (params) => {
  const [URL, setURL] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    params.history && params.history.push(`/download?url=${URL}`);
  };

  return (
    <div className="container-fluid p-0">
      <div className="bg-primary">
        <div className="container text-center p-5">
          <h1 className="text-white mt-4">Facebook Video Downloader</h1>
          <h5 className="text-white mb-3">Download Videos From Facebook</h5>
          <Form className="mb-4" onSubmit={onSubmit}>
            <InputGroup className="w-50 m-auto" size="lg">
              <Input
                required
                type="url"
                value={URL}
                className="font-1rem shadow-none"
                placeholder="Enter Facebook Video URL..."
                onChange={(e) => setURL(e.target.value)}
              />
              <InputGroupAddon addonType="append">
                <Button size="lg" className="rounded-0 rounded-end font-1rem shadow-none btn-green">
                  DOWNLOAD
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </Form>
        </div>
      </div>
      <div className="container pt-4 pb-4">
        <h4>Free online Facebook video downloader</h4>
        <p>
          FB Video Downloader is one of the best tools available online for convert videos from Facebook to mp4 (video) or mp3 (audio)
          files and download them for free - this service works for computers, tablets and mobile devices. All you need to do is to
          enter the URL in the text box provided and use the button labeled "Download" to download the video in the available format.
          The usage of our website is free and does not require any software or registration. Have fun and enjoy the use of our
          website.
        </p>

        <h4>How to use Facebook downloader?</h4>
        <List>
          <li>Copy FB Video URL</li>
          <li>Paste the URL in a field above</li>
          <li>
            Click "Download" button to Save FB video
            <br />
            <strong>See Tutorial: </strong>
            <Link to="/how-to-download-facebook-videos">How to Download Facebook Videos</Link>
          </li>
        </List>

        <h4>How do I use Facebook Video Downloader Chrome Extension?</h4>
        <List>
          <li>First, add FB Video Downloader (Facebook Video Downloader) extension to your browser</li>
          <li>Then, you can go to the specific page on Facebook that contains the video file you want.</li>
          <li>
            When you get to the page, you will see a green "Download" (HD or SD) button.
            <br />
            You'll need to click it. You'll be automatically taken back to the download page where you can save the video.
          </li>
        </List>

        <h4>How do I download private videos from Facebook?</h4>
        <p>
          If you want to download private videos from Facebook, you can do that with a private video downloader such as
          getfvid.com/private-downloader. Usually, only those who are able to see the video's code can download it. Using this tool
          allows you to capture the video and it still allow it to remain private. Of course, you should still always respect the
          copyrights of the videos you are downloading.
        </p>

        <h4>Where are Facebook videos saved after being downloaded?</h4>
        <p>
          When you're downloading files, they are usually saved into whatever folder you have set as your default. Your browser
          normally sets this folder for you. In browser settings you can change and choose manually the destination folder for your
          downloded facebook videos.
        </p>

        <h4>Can I download Live Facebook videos?</h4>
        <p>
          Once streaming is done, you can easily save live FB videos to your device using FB Video Downloader Facebook video Downloader
          chrome extension.
        </p>

        <h4>Does FB Video Downloader store downloaded videos or keep a copy of videos?</h4>
        <p className="m-0">
          FB Video Downloader doesn't store videos. Neither do we keep copies of downloaded videos. All videos are hosted on Facebook's
          servers. Also, we don't keep track of the download histories of our users, thus making using FB Video Downloader totally
          anonymous.
        </p>
      </div>
    </div>
  );
};

export default Home;
