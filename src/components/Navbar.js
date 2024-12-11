import React from 'react';
import '../styles/Navbar.css'
import bookIcon from '../assets/icons/book.svg';

export default function Navbar() {
  return (
    <div className="navbar">
      <img src={bookIcon} alt="icon" className="logo"/>
      <div className="title">InsightQA</div>
    </div>
  );
}
