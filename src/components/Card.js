import React, {useState, useRef} from 'react';
import '../styles/Card.css'
import infoIcon from '../assets/icons/info.svg';
import Info from './Info';
import axios from 'axios';

export default function Card({setQuestionsAndAnswers}) {
  const [fileName, setFileName] = useState("");
  const [fileContent, setFileContent] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fileInputRef = useRef(null); 

  const removeFile = () => {
    setFileName("");
    setFileContent("");
    setQuestionsAndAnswers(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; 
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const validExtensions = ['text/plain', 'application/pdf'];
      if (!validExtensions.includes(file.type)) {
        setFileName("Only .pdf or .txt files can be uploaded.");
        if (fileInputRef.current) {
          fileInputRef.current.value = ""; 
        }
        return;
      }
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = (e) => {
        setFileContent(e.target.result);
      };
      reader.readAsText(file);
    }
  };

  const handleGenerate = async () => {
    const url = "http://localhost:5000/generate";
    const body = {
      context: fileContent,
    };
    setIsLoading(true);
    try {
      const response = await axios.post(url, body);
      setQuestionsAndAnswers(response.data.questions_and_answers);
    } catch (error) {
      console.error("Error generating Questions and Answers: ", error);
    }
    finally{
      setIsLoading(false);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="card">
      <div className="card-header">
        {fileContent === "" ? (
          <label htmlFor="file-upload" className="upload-button">
            Upload File
            <input
              id="file-upload"
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              className="file-input"
            />
          </label>
        ) : (
          <button className="upload-button" onClick={removeFile}>
            Remove
          </button>
        )}
        <div className="filename">{fileName}</div>
        <img
          src={infoIcon}
          alt="info"
          className="info"
          onClick={openModal}
        />
      </div>

      <div className="preview">
        <textarea
          className="preview-area"
          readOnly
          placeholder="File content will appear here..."
          value={fileContent}
        ></textarea>
      </div>

      <div className="card-footer">
        {isLoading && <div className="spinner"></div>}
        {isLoading && <div className="text">Please wait...</div>}
        <div></div>
        <div className="generate-button" onClick={fileContent === "" ? () => {setFileName("Please Upload a file")} : handleGenerate}>
          Generate
        </div>
      </div>

      <Info isOpen={isModalOpen} onClose={closeModal}></Info>
    </div>
  );
}
