import React from 'react';
import Navbar from '../components/Navbar';
import Layout from '../components/Layout';
import Home from './Home';

export default function Main() {
  return (
    <>
        <Navbar />
        <Layout>
            <Home></Home>
        </Layout>
    </>
  );
}
