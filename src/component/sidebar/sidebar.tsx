import React from 'react'
import './sidebar.css'
import { DiClojureAlt } from 'react-icons/di'
import { NavLink } from 'react-router-dom';
import { linkList } from '../../util/links/links';

export default function Sidebar() {
  return (
    <div className='class-sidebar'>
      <div className='frame-sidebar'>
        <div className='logo'>
          <DiClojureAlt className='di-clojure-alt' />
          {/* <span className='my-name'>Nguyen Thanh An</span> */}
        </div>
        <div className='class-nav-links'>
          <div className='class-nav-links'>
            {linkList.map(item => (
                <NavLink
                  to={`/${item.name}`}
                  key={item.name}
                  style={({ isActive }) => ({
                    boxShadow: isActive ? '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)' : '',
                  })}
                  className='nav-link'
                >
                  {item.icon} <span>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</span>
                </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
