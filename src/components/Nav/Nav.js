import React from 'react'
import Link from '../Link'
import './Nav.css'

const pages = [
  {
    title: 'Home',
    path: '/'
  },
  {
    title: 'About',
    path: '/about'
  },
]

export default ({ currentPath, toggleNav, isOpen }) => (
  <nav className={`Nav${isOpen ? ' isOpen' : ''}`}>
    <ul className="Nav-links">
      {pages.map(page => (
        <li
          className={`Nav-item${currentPath === page.path ? ' isActive':''}`}
          key={page.path}
        >
          <Link href={page.path} afterClick={() => {
						setTimeout(toggleNav, 200)
					}}>{page.title}</Link>
        </li>
      ))}
    </ul>
  </nav>
)
