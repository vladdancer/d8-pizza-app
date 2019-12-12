import React, {Component} from "react";
import {Menu} from "semantic-ui-react";


export default class HeaderMenu extends Component {
  state = {};

  render() {
    const { activeItem } = this.state;
    return (
      <Menu>
        <Menu.Item
          name='editorials'
          active={activeItem === 'editorials'}
        >
          Editorials
        </Menu.Item>

        <Menu.Item
          name='reviews'
          active={activeItem === 'reviews'}
        >
          Reviews
        </Menu.Item>

        <Menu.Item
          name='upcomingEvents'
          active={activeItem === 'upcomingEvents'}
        >
          Upcoming Events
        </Menu.Item>
      </Menu>
    );

  };

}
