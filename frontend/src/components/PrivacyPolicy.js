import React from 'react';
import { List } from 'reactstrap';

const PrivacyPolicy = () => (
  <div className="container p-4">
    <h1>Privacy Policy</h1>
    <List>
      <li>
        <h5>What information do we collect?</h5>
        <p>We are not collecting any personal information.</p>
      </li>
      <li>
        <h5>Do we use cookies?</h5>
        <p>
          Yes (Cookies are small files that a site or its service provider transfers to your computers hard drive through your Web
          browser (if you allow) that enables the sites or service providers systems to recognize your browser and capture and remember
          certain information). We use cookies to understand and save your preferences for future visits.
        </p>
      </li>
      <li>
        <h5>Third-party advertisements</h5>
        <p>
          Some of the advertisements you see on the Site are selected and delivered by third parties, such as ad networks, advertising
          agencies, advertisers, and audience segment providers. These third parties may collect information about you and your online
          activities, either on the Site or on other websites, through cookies, web beacons, and other technologies in an effort to
          understand your interests and deliver to you advertisements that are tailored to your interests. The information practices of
          these third parties are not covered by this privacy policy.
        </p>
      </li>
      <li>
        <h5>Do we disclose any information to outside parties?</h5>
        <p>
          We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not
          include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as
          those parties agree to keep this information confidential. We may also release your information when we believe release is
          appropriate to comply with the law, enforce our site policies, or protect ours or others rights, property, or safety.
          However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or
          other uses.
        </p>
      </li>
      <li>
        <h5>Third party links</h5>
        <p>
          Occasionally, at our discretion, we may include or offer third party products or services on our website. These third party
          sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and
          activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about
          these sites.
        </p>
      </li>
      <li>
        <h5>Changes to our Privacy Policy</h5>
        <p>If we decide to change our privacy policy, we will post those changes on this page.</p>
      </li>
    </List>
  </div>
);

export default PrivacyPolicy;
