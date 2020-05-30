import React from 'react';
import { Header } from 'semantic-ui-react';

/** A simple static component to render some text for the MyStory page. */
class MyStory extends React.Component {
  render() {
    return (
        <Header className="page-headers" as='h1'>MY STORY</Header>,
            // eslint-disable-next-line max-len
            <Header className="page-headers" as='h3'>Unfortunately, there are no MyStory right now.  Keep checking our instagram for updates! (@lania.sweets)</Header>
    );
  }
}
export default MyStory;
