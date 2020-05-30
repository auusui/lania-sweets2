import React from 'react';
import { Grid, Header, Image } from 'semantic-ui-react';
import Insta from '/doc/instagram.JPG';
import Logo from '/doc/logo.png';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <Grid verticalAlign='middle' textAlign='center' container className="middle-contents">
          <Header as='h1' className='header-name'>WELCOME!</Header>
          <Image size='medium' centered src={Logo}/>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Image size='medium' src={Insta}/>
            </Grid.Column>
            <Grid.Column>
              <Header as='h2'>Find us on Instagram! <br/>
              Just scan the code or look up our username <br/>
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1} textAlign='center' centered>
            <Grid.Column>
              <Header as='h2'>
                Lānia - (vt.) to warm or toast <br />
              </Header>
              <p>
                This home bakery business has been a dream of mines.  Baking for my friends and family has made my
                passion grow because of the smiles and happiness it brings them.  This is my way of sharing that piece
                 of joy in my heart to you.  My business is more than following recipes.  It is about creating a treat
                perfect for your lifestyle or needs. <br/>
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    );
  }
}

export default Landing;
