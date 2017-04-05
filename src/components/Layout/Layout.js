import React from 'react';
import Dots from '../Dots';
import Hamburger from '../Hamburger';
import Header from '../Header';
import Nav from '../Nav';
import './Layout.css';

export default class extends React.Component {
  state = {
    openNav: false
  };

  onToggleNav = () => {
    this.setState(({ openNav }) => ({ openNav: !openNav }));
  };

  render() {
    const { children, path } = this.props;
    const { openNav } = this.state;
    return (
      <div className="Layout">
        <Hamburger isOpen={openNav} onToggleNav={this.onToggleNav} />
        <Header />
        <Nav toggleNav={this.onToggleNav} currentPath={path} isOpen={openNav} />
        <div className={`Layout-wrap${openNav ? ' openNav' : ''}`}>
          <Dots />
          <main className="Layout-main" role="main">
            {children}
          </main>
        </div>
      </div>
    );
  }
}
