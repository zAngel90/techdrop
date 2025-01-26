'use client'
import { useState } from 'react'
import Link from 'next/link'
import { LogoIcon } from './icons/LogoIcon'
import { MenuIcon } from './icons/MenuIcon'

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="logo">
          <LogoIcon />
          <span className="logo-text">TechDrop</span>
        </Link>
        <button 
          className="menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menú"
        >
          <MenuIcon />
        </button>
      </div>
      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <Link href="/productos">Productos Tech</Link>
        <Link href="/analytics">Analytics</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/precios">Precios</Link>
        <Link href="/login" className="login-btn">
          Iniciar Sesión
        </Link>
        <Link href="/get-started" className="start-btn">
          Comenzar Gratis
        </Link>
      </div>
    </nav>
  )
} 