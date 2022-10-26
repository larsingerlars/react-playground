import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children } = this.props;

    return <header>{children}</header>;
  }
}

export default Header;
