import React from 'react';
import { Header } from 'semantic-ui-react';

/** A simple static component to render some text for the SpecialTreats page. */
class SpecialTreats extends React.Component {
  render() {
    return (
        // eslint-disable-next-line max-len
        <Header className="page-headers" as='h1'>Here you will find SpecialTreats the owner gives periodically.</Header>,
            // eslint-disable-next-line max-len
            <Header className="page-headers" as='h3'>Unfortunately, there are no SpecialTreats right now.  Keep checking our instagram for updates! (@lania.sweets)</Header>
    );
  }
}
export default SpecialTreats;
