const express = require('express');
const router = express.Router();
const got = require('got');

const strip_tags = (input, allowed) => {
  allowed = (((allowed || '') + '').toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join(''); // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
  var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
  return input
    .replace(/<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi, '')
    .replace(tags, ($0, $1) => (allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : ''));
};
const getVideoTitle = (content) => {
  let title = '';
  const match1 = content.match(/h2 class="uiHeaderTitle"?[^>]+>(.+?)<\/h2>/);
  if (match1) title = match1[1];
  else {
    const match2 = content.match(/title id="pageTitle">(.+?)<\/title>/);
    if (match2) title = match2[1];
  }

  return strip_tags(title);
};
const getVideoDesc = (content) => {
  const match = content.match(/span class="hasCaption">(.+?)<\/span>/);
  if (match) return strip_tags(match[1]);
  return '';
};
const getVideoThumb = (content) => {
  const match = content.match(/afterTheAdBreakImage:"([^"]+)"/);
  console.log(match);
  if (match) return match[1];
  return '';
};
const getVideoID = (URL) => URL.match(/(\d+)?$/)[1];
const getLinkSD = (content) => content.split('sd_src:"')[1].split('",hd_tag')[0];
const getLinkHD = (content) => content.split('hd_src:"')[1].split('",sd_src:"')[0];

// @route   GET api/facebook/download
// @desc    Extract Facebook Video Information
// @access  Public
router.post('/download', async (req, res) => {
  try {
    const { url } = req.body;
    const urlContent = await got(url);
    const urlBody = urlContent.body;

    const result = {
      id: getVideoID(url),
      title: getVideoTitle(urlBody),
      description: getVideoDesc(urlBody),
      thumbnail: getVideoThumb(urlBody),
      links: { hd: getLinkHD(urlBody), sd: getLinkSD(urlBody) },
    };

    res.status(200).json(result);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server Error' });
  }
});

module.exports = router;
