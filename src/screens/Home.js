import React, {useState} from 'react';
import Card from '../components/Card';
import Table from '../components/Table';
import '../styles/Home.css'

export default function Home() {
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState(null);
  return (
    <div className="home">
      <Card setQuestionsAndAnswers={setQuestionsAndAnswers} />
      {questionsAndAnswers && <Table data={questionsAndAnswers} />}
    </div>
  );
}
