import React from 'react';
import { Header } from 'semantic-ui-react';

/** A simple static component to render some text for the ContactUs page. */
class ContactUs extends React.Component {
  render() {
    return (
        <Header className="page-headers" as='h1'>CONTACT US</Header>,
            // eslint-disable-next-line max-len
            <Header className="page-headers" as='h3'>Unfortunately, there are no ContactUs right now.  Keep checking our instagram for updates! (@lania.sweets)</Header>
    );
  }
}
export default ContactUs;
