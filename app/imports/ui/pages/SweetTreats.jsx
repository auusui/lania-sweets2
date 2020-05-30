import React from 'react';
import { Header } from 'semantic-ui-react';

/** A simple static component to render some text for the SweetTreats page. */
class SweetTreats extends React.Component {
  render() {
    return (
        <Header className="page-headers" as='h1'>SWEET TREATS</Header>,
            // eslint-disable-next-line max-len
            <Header className="page-headers" as='h3'>Unfortunately, there are no SweetTreats right now.  Keep checking our instagram for updates! (@lania.sweets)</Header>
    );
  }
}
export default SweetTreats;
