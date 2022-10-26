import React from "react";
import { NavLink } from "react-router-dom";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      linksCategories: [
        {
          id: 1,
          title: "Women",
          url: "/women",
        },
        {
          id: 2,
          title: "Men",
          url: "/men",
        },
        {
          id: 3,
          title: "Kids",
          url: "/kids",
        },
      ],
    };
  }

  render() {
    return (
      <nav>
        <ul>
          {this.state.linksCategories.map((link) => (
            <li key={link.id}>
              <NavLink to={link.url}>{link.title}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
