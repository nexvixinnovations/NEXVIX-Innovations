'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`site-navbar ${isScrolled ? 'scrolled' : ''}`}
      id="navbar"
      data-figma-component="Navbar"
      data-figma-layer="Sticky-Header"
    >
      <div className="container navbar-inner">
        <Link
          href="/"
          className="navbar-logo"
          data-figma-layer="Logo-Group"
          aria-label="NEXVIX Innovations Home"
          onClick={closeMenu}
        >
          <Image
            src="/assets/images/nexvix-logo.png"
            alt="NEXVIX Innovations"
            width={160}
            height={94}
            className="brand-logo-img"
            priority
          />
        </Link>

        <nav
          className={`navbar-nav ${mobileMenuOpen ? 'active' : ''}`}
          id="mainNav"
          data-figma-layer="Navigation-Links"
          aria-label="Main Navigation"
        >
          <Link href="/#hero" className="nav-link" onClick={closeMenu}>
            Home
          </Link>
          <Link href="/#about" className="nav-link" onClick={closeMenu}>
            About
          </Link>
          <Link href="/#services" className="nav-link" onClick={closeMenu}>
            Services
          </Link>
          <Link href="/#quality" className="nav-link" onClick={closeMenu}>
            Quality
          </Link>
          <Link href="/#why-nexvix" className="nav-link" onClick={closeMenu}>
            Why us ?
          </Link>
          <Link href="/#process" className="nav-link" onClick={closeMenu}>
            Process
          </Link>
          <Link href="/#testimonials" className="nav-link" onClick={closeMenu}>
            Testimonials
          </Link>
          <Link href="/#contact" className="nav-link" onClick={closeMenu}>
            Contact
          </Link>
        </nav>

        <div className="navbar-actions" data-figma-layer="Header-Actions">
          <Link href="/#contact" className="btn btn-primary" id="navQuoteBtn" onClick={closeMenu}>
            Request a Quote
          </Link>
          <button
            className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
            id="mobileMenuBtn"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
