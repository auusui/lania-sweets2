import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Dropdown, Header } from 'semantic-ui-react';
import { Roles } from 'meteor/alanning:roles';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class NavBar extends React.Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    const menuStyle = { marginBottom: '10px' };
    return (
      <Menu style={menuStyle} attached="top" borderless inverted className='topmenu'>
        <Menu.Item as={NavLink} activeClassName="" exact to="/">
          <Header className="header-name" as='h1'>Lānia Sweets</Header>
        </Menu.Item>
        {this.props.currentUser ? (
            [<Menu.Item as={NavLink} activeClassName="active" exact to="/sweet" key='sweet'>
              <Dropdown item name='Sweet Treats'
                        active={activeItem === 'sweet treats'}
                        onClick={this.handleItemClick}>
                <Dropdown.Menu>
                  <Dropdown.Item text="Cookies" as={NavLink} exact to="/cookies"/>
                  <Dropdown.Item text="Cakes" as={NavLink} exact to="/cakes"/>
                  <Dropdown.Item text="Chocolates" as={NavLink} exact to="/choco"/>
                  <Dropdown.Item text="Scones" as={NavLink} exact to="/scones"/>
                  <Dropdown.Item text="Muffins/Cupcakes" as={NavLink} exact to="/muffin"/>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>,
                <Menu.Item as={NavLink} activeClassName="active" exact to="/special" key='special'>
                  <Dropdown name='Special Treats'
                            active={activeItem === 'Special treats'}
                            onClick={this.handleItemClick}>
                    <Dropdown.Menu>
                      <Dropdown.Item text="Gluten-Free" as={NavLink} exact to="/gf"/>
                      <Dropdown.Item text="Vegan" as={NavLink} exact to="/vegan"/>
                      <Dropdown.Item text="Refined Sugar-Free" as={NavLink} exact to="/rsf"/>
                      <Dropdown.Item text="Athletes" as={NavLink} exact to="/athlete"/>
                      <Dropdown.Item text="Examples" as={NavLink} exact to="/ex"/>
                      <Dropdown.Item text="Make Your Own" as={NavLink} exact to="/myo"/>
                    </Dropdown.Menu>
                  </Dropdown>
                </Menu.Item>,
              <Menu.Item as={NavLink} activeClassName="active" exact to="/doughs" key='doughs'>
                <Dropdown name='Doughs'
                          active={activeItem === 'doughs'}
                          onClick={this.handleItemClick}>
                  <Dropdown.Menu>
                  <Dropdown.Item text="Pies" as={NavLink} exact to="/pies"/>
                  <Dropdown.Item text="Bagels" as={NavLink} exact to="/bagels"/>
                  <Dropdown.Item text="Breads" as={NavLink} exact to="/scones"/>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Item>,
              <Menu.Item name='Promotions'
                         active={activeItem === 'promotions'}
                         onClick={this.handleItemClick}
                         as={NavLink} activeClassName="active" exact to="/promo" key='promo'/>,
              <Menu.Item name='My Story'
                         active={activeItem === 'my story'}
                         onClick={this.handleItemClick}
                         as={NavLink} activeClassName="active" exact to="/story" key='story'/>,
              <Menu.Item name='Contact Us'
                         active={activeItem === 'contact us'}
                         onClick={this.handleItemClick}
                         as={NavLink} activeClassName="active" exact to="/contact" key='contact'/>]
        ) : ''}
        {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
            <Menu.Item as={NavLink} activeClassName="active" exact to="/admin" key='admin'>Admin</Menu.Item>
        ) : ''}
        <Menu.Item position="right">
          {this.props.currentUser === '' ? (
            <Dropdown text="Login" pointing="top right" icon={'user'}>
              <Dropdown.Menu>
                <Dropdown.Item icon="user" text="Sign In" as={NavLink} exact to="/signin"/>
                <Dropdown.Item icon="add user" text="Sign Up" as={NavLink} exact to="/signup"/>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <Dropdown text={this.props.currentUser} pointing="top right" icon={'user'}>
              <Dropdown.Menu>
                <Dropdown.Item icon="sign out" text="Sign Out" as={NavLink} exact to="/signout"/>
              </Dropdown.Menu>
            </Dropdown>
          )}
        </Menu.Item>
      </Menu>
    );
  }
}

/** Declare the types of all properties. */
NavBar.propTypes = {
  currentUser: PropTypes.string,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const NavBarContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(NavBar);

/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */
export default withRouter(NavBarContainer);
