import React from 'react';
import './Hamburger.css';

const Hamburger = ({ isOpen, onToggleNav }) => (
  <button
    className={`Hamburger${isOpen ? ' isOpen' : ''}`}
    onClick={onToggleNav}
  >
    <span className="uHidden">Toggle Navigation</span>
    <span className="Hamburger-top" />
    <span className="Hamburger-mid" />
    <span className="Hamburger-bot" />
  </button>
);

export default Hamburger;
