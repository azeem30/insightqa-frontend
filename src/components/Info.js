import React from 'react';
import '../styles/Info.css'
import closeIcon from '../assets/icons/close.svg'

export default function Info({ isOpen, onClose }) {
  if(!isOpen){
    return null;
  }
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <div className="modal-title">Instructions</div>
          <img
            src={closeIcon}
            alt="Close"
            className="modal-close"
            onClick={onClose}
          />
        </div>
        <div className="modal-body">
          <div>
            How to use InsightQA?
            <ul>
              <li>Click on <span className="bold-text">Upload File</span> to choose a file from your system. {`Only .pdf or .txt files can be uploaded.`}</li>
              <li>Click on <span className="bold-text">Generate</span> to generate questions and answers.</li>
              <li>Click on <span className="bold-text">Download</span> to download the generated questions and answers.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
