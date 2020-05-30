import React from 'react';
import { Icon } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = { paddingTop: '15px' };
    return (
        <footer className="footer-background">
          <div style={divStyle} className="ui center aligned container">
            <hr />
              Lānia Sweets <br />
              Treats made by Aubrie Usui<br />
              Baked with Love <br />
              <Icon name='heart'/> <br />
          </div>
        </footer>
    );
  }
}

export default Footer;
