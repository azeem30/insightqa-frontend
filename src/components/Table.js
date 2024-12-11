import React, { useState } from 'react';
import '../styles/Table.css'
import Pagination from './Pagination';

export default function Table({data}) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  const handleDownload = () => {
    const csvHeaders = 'Question,Answer\n';
    const csvRows = data.map((item) => `"${item.question}","${item.answer}"`).join('\n');
    const csvContent = csvHeaders + csvRows;
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'questions_and_answers.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <div className="table-container">
      <div className="table-header">
        <p className="table-title">Questions and Answers</p>
        <button className="download-button" onClick={handleDownload}>Download</button>
      </div>
      <div className="table-body">
        {currentData.map((item, index) => (
          <div key={index} className="qa-block">
            <div className="question">
              <p className="qa-text">Q: {item.question}</p>
            </div>
            <div className="answer">
              <p className="qa-text">A: {item.answer}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="table-footer">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
