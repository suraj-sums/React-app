import React from 'react';
import { List } from 'reactstrap';

const Faqs = () => {
  const name = <u>{process.env.REACT_APP_NAME}</u>;
  return (
    <div className="container p-4">
      <h1>Frequently Asked Questions</h1>
      <h4>How do I use {name} for Facebook?</h4>
      <p>
        It is quite easy to download public videos from Facebook. If you have the video link that you wish to download, all you need to
        do is copy it and then paste it into the input box. After you paste the link, click the "download" button which will redirect
        you to another page. You will be able to select the link you want to download. GetfVid is free to use and no registration is
        required.
      </p>

      <h4>How do I use {name} Chrome Extension?</h4>
      <List>
        <li>First, add {name} extension to your browser</li>
        <li>Then, you can go to the specific page on Facebook that contains the video file you want.</li>
        <li>
          When you get to the page, you will see a green "Download" (HD or SD) button. You'll need to click it. You'll be automatically
          taken back to the download page where you can save the video.
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
        When you're downloading files, they are usually saved into whatever folder you have set as your default. Your browser normally
        sets this folder for you. In browser settings you can change and choose manually the destination folder for your downloded
        facebook videos.
      </p>

      <h4>Can I download Live Facebook videos?</h4>
      <p>Once streaming is done, you can easily save live FB videos to your device using {name} chrome extension.</p>

      <h4>Does {name} store downloaded videos or keep a copy of videos?</h4>
      <p>
        {name} doesn't store videos. Neither do we keep copies of downloaded videos. All videos are hosted on Facebook's servers. Also,
        we don't keep track of the download histories of our users, thus making using {name} totally anonymous.
      </p>
    </div>
  );
};

export default Faqs;
