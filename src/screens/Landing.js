import React from 'react';
import '../styles/Landing.css';
import { useNavigate } from 'react-router-dom';
import wandIcon from '../assets/icons/wand.svg'

export default function Landing() {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate('/home');
  }
  return (
    <div className="landing-container">
      <div className="text-container">
        <h1 className="title">InsightQA</h1>
        <p className="subtitle">A Descriptive Question and Answer Generator</p>
        <div className="try-button" onClick={navigateToHome}>
          <img src={wandIcon} alt="magic" className="wand"/>
          <span>Try InsightQA</span>
        </div>
      </div>
    </div>
  );
}
