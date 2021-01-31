const express = require('express');
const router = express.Router();
const mail = require('../helpers/email');

// @route   GET api/email/contact
// @desc    Send Contact US Email
// @access  Public
router.post('/contact', async (req, res) => {
  try {
    const { subject, email, message } = req.body;

    const body = `Hi Admin, <br/> 
                Someone sent a contact us email on FB Video Downloader <br/><br/>
                Here are the details:<br/>
                <table>
                    <tr><th>Email:</th><td>${email}</td></tr>
                    <tr><th>Subject:</th><td>${subject}</td></tr>
                    <tr><th>Message:</th><td>${message}</td></tr>
                </table><br/>
                Thanks <br/>
                Team FB Video Downloader`;

    mail.sendEmail({ subject: 'Someone sent a message on FB Video Downloader', body });
    res.status(200).json({ msg: 'Email sent successfully.' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server Error' });
  }
});

module.exports = router;
