import React from 'react';

const About = () => {
  const name = <strong>{process.env.REACT_APP_NAME}</strong>;
  return (
    <div className="container p-4">
      <h1>About</h1>
      <h4>The Fastest and the Easiest Way to Download Facebook Videos Online</h4>
      <p>
        {name} is one of the best tools available online for Facebook download video for free,that helps users to download videos from
        Facebook by just using the URL of that video. All you need to do is to enter the URL in the text box provided and use the
        option “Download” to download the video in the available format.
      </p>

      <p>
        Facebook is the most used social media platform and thousands of videos get shared on this platform every minute. Though these
        videos can be watched online, there are times when we like a video and we wish to download the same. This is when our Facebook
        video downloader comes in handy. No more hassles to download a tool or software; you can now download a video from Facebook
        online with just one click.
      </p>

      <p>
        With {name}, downloading videos from Facebook is made easy, and you can download a video without the need of any additional
        software. With Facebook videos becoming a popular attraction, these videos are now the most downloaded too. Be it your favorite
        song, a DIY or a motivational speech, just copy paste the video URL and see the video downloading into your computer within a
        few minutes.
      </p>

      <p>
        With the help of FB video downloader, you can download the videos you like to your laptop and view them when you are not even
        connected on Facebook. As these are downloaded to the hard disk of your laptop/computer, you can watch them whenever you want
        even without the need of being connected to the internet.
      </p>

      <p>
        If you are looking for a faster and secure option to download Facebook videos, your search ends at {name}. Users can download
        the Facebook videos without the fear of any ads or spam. No need to spend your time registering on the website or filling any
        forms. All you have to do is to use the video URL to download the video of your choice from Facebook in no time. So, do you
        like any videos you see on your Facebook timeline? Wish to download them to watch them at a later time? Do not wait, use {name}{' '}
        to download the videos in minutes.
      </p>
    </div>
  );
};

export default About;
