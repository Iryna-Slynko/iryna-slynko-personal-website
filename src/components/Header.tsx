import React from 'react';
import Navigation from './Navigation'

export default function Header() {
  return (
    <header className='affix-top' data-spy='affix'>
      <Navigation />
    </header>
  )
}